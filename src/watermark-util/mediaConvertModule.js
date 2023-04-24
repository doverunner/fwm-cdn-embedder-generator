const wmUtil = require('./wmUtil');

'use strict';

exports.createWatermarkUrl = (contentPath, watermark, prefixFolder='', gop=60) =>{
    let responseUrl = "/" + prefixFolder;
    let waterInfo = {};
    let separator = contentPath.lastIndexOf('?');

    //파일이름시작index
    waterInfo.fileNameIdx = contentPath.lastIndexOf('/');
    //파라미터가 붙어있는 경우 파라미터를 분리 후 세팅
    if (-1 !== separator) {
        waterInfo.fileName = contentPath.substring(waterInfo.fileNameIdx+1, separator);
        waterInfo.parameter = contentPath.substring(separator);
    } else {
        //파일이름
        waterInfo.fileName = contentPath.substring(waterInfo.fileNameIdx+1);
        waterInfo.parameter = "";
    }

    waterInfo.extensionIdx = waterInfo.fileName.lastIndexOf('.');
    //확장자
    waterInfo.extension = waterInfo.fileName.substring(waterInfo.extensionIdx+1);

    switch(waterInfo.extension){
        case 'ts':
            //xxxxx.ts
            const fileIndex = Number(waterInfo.fileName.substring(waterInfo.fileName.lastIndexOf('_')+1, waterInfo.extensionIdx));
            waterInfo.wmFlag = wmUtil.makeWatermarkFlag(watermark, 1, fileIndex, gop);
            responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 2, waterInfo.wmFlag);
            break;
        case 'mp4':
            //init.mp4
            if (waterInfo.fileName.toLowerCase().endsWith('init.mp4')) {
                responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 2);
            } else {
                //xxxxxxx.mp4
                const fileIndex = Number(waterInfo.fileName.substring(waterInfo.fileName.lastIndexOf('_')+1, waterInfo.extensionIdx));
                waterInfo.wmFlag = wmUtil.makeWatermarkFlag(watermark, 1, fileIndex, gop);
                responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 2, waterInfo.wmFlag);
            }
            break;
        default:
            responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 2);
            break;
    }
    responseUrl += waterInfo.parameter;

    return responseUrl;
}