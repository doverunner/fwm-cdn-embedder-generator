const wmUtil = require('./wmUtil');

'use strict';

/**
 *
 * @param contentPath
 * @param watermark
 * @param prefixFolder default : ''
 * @param streamingFormat
 * @param gop default: 60
 * @returns {string}
 */
exports.createWatermarkUrl= (contentPath, watermark, prefixFolder='', streamingFormat, gop=60) =>{
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
    //이름 및 확장자
    waterInfo.name = waterInfo.fileName.substring(0, waterInfo.extensionIdx);
    waterInfo.extension = waterInfo.fileName.substring(waterInfo.extensionIdx+1);

    //폴더 경로
    var prefixPath = contentPath.substring(0, waterInfo.fileNameIdx);

    // var prifixIdx = prefixPath.lastIndexOf('/');

    let startNum = 0;

    switch (waterInfo.extension) {
        case 'mpd':
            responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 2);
            break;
        case 'm3u8':
            if (-1 < waterInfo.fileName.indexOf('master')) {
                responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 2);
            } else if ('stream.m3u8' === waterInfo.fileName || 'iframes.m3u8' === waterInfo.fileName) {
                responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 5);
            } else if ('subtitle.m3u8' === waterInfo.fileName ) {
                responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 4);
                // }else{
                //     responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 4);
            }
            break;
        case 'ts':
            const seqNumber = wmUtil.getSequenceNumber(waterInfo.name, 'ts');
            if( seqNumber < 0 ){
                break;
            }

            if('dash' !== streamingFormat) {
                startNum = 1;
            }

            waterInfo.wmFlag = wmUtil.makeWatermarkFlag(watermark, startNum, seqNumber, gop);
            responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 5, waterInfo.wmFlag);
            break;
        case 'm4s':
        case 'mp4':
            if (waterInfo.name.endsWith('init')) {
                responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 5);
            } else if (checkSubtitle(prefixPath)) {
                responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 4);
            } else {
                const seqNumber = wmUtil.getSequenceNumber(waterInfo.name, waterInfo.extension);
                if( seqNumber < 0 ){
                    break;
                }

                if('hls' === streamingFormat) {
                    startNum = 1;
                }

                waterInfo.wmFlag = wmUtil.makeWatermarkFlag(watermark, startNum, seqNumber, gop);
                responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 5, waterInfo.wmFlag);
            }
            break;
        case 'vtt':
            responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 4);
            break;
        case "aac":
            responseUrl += wmUtil.makeWatermarkPathByDir(contentPath, 5);
            break;
        default:
            console.log("default!!");
            break;
    }

    if (responseUrl === ("/" + prefixFolder)) {
        responseUrl += makeDefaultPath(contentPath);
    }
    responseUrl += waterInfo.parameter;

    return responseUrl;
}

/**
 * Create a path by adding /0 in front of the flagFolders path in the contentPath.
 * @param contentPath  excluding the prefix folder path
 * @returns {string} default path
 */
const makeDefaultPath = (contentPath) =>{
    const flagFolders = ['dash', 'hls', 'cmaf'];

    var responseUrl = "";
    var pathArr = contentPath.split('/');
    var pathArrLength = pathArr.length;

    for (var i=1; i<pathArrLength; i++) {
        if (flagFolders.includes(pathArr[i])) {
            responseUrl += '/0';
        }
        responseUrl += '/'+ pathArr[i];
    }
    return responseUrl;
}

const checkSubtitle = (prefixPath) =>{
    var boolSubtitle = false;
    let pathArr = prefixPath.split('/');
    let pathArrLength = pathArr.length;
    console.log("pathArr[pathArrLength-2] : " + pathArr[pathArrLength-2]);
    if ('subtitle' === pathArr[pathArrLength-2]) {
        boolSubtitle = true;
    }
    return boolSubtitle;
}
