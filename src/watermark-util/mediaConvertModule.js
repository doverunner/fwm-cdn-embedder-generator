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
    const extIdx = waterInfo.fileName.lastIndexOf('.');
    waterInfo.name = waterInfo.fileName.substring(0, extIdx);
    waterInfo.extension = waterInfo.fileName.substring(extIdx+1);

    let seqNumber = -1;
    let startNum = 0;

    switch(waterInfo.extension){
        case 'ts':
            seqNumber = wmUtil.getSequenceNumber(waterInfo.name, 'ts');
            if( seqNumber < 0 ){
                break;
            }

            if('dash' !== streamingFormat) {
                startNum = 1;
            }

            waterInfo.wmFlag = wmUtil.makeWatermarkFlag(watermark, startNum, seqNumber, gop);

            responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 2, waterInfo.wmFlag);
            break;
        case 'mp4':
        case 'm4s':
            //init.mp4
            if (waterInfo.fileName.toLowerCase().endsWith('init.mp4')) {
                responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 2);
            } else {
                seqNumber = wmUtil.getSequenceNumber(waterInfo.name, waterInfo.extension);
                if (seqNumber < 0) {
                    break;
                }

                if('hls' === streamingFormat) {
                    startNum = 1;
                }

                waterInfo.wmFlag = wmUtil.makeWatermarkFlag(watermark, startNum, seqNumber, gop);
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