const wmUtil = require('./wmUtil');

/**
 *
 * @param contentPath
 * @param watermark
 * @param prefixFolder default : ''
 * @param streamingFormat
 * @param gop default: 60
 * @returns {string}
 */
exports.createWatermarkUrl = (contentPath, watermark, prefixFolder='', streamingFormat, gop=60) =>{
    let responseUrl = '';

    if ('' !== prefixFolder) {
        responseUrl = "/" + prefixFolder;
    }

    let paramSeparator = contentPath.lastIndexOf('?');
    let waterInfo = {};
    let seqNumber = -1;

    //파일이름시작index
    const fileNameIdx = contentPath.lastIndexOf('/');

    //파일 경로
    waterInfo.path = contentPath.substring(0, fileNameIdx+1);

    //파일 이름(확장자 포함) 및 파라미터
    if (-1 !== paramSeparator) {
        waterInfo.fileName = contentPath.substring(fileNameIdx+1, paramSeparator);
        waterInfo.parameter = contentPath.substring(paramSeparator);
    } else {
        waterInfo.fileName = contentPath.substring(fileNameIdx+1);
        waterInfo.parameter = "";
    }

    //파일 이름(확장자 제외) 및 확장자
    const extIdx = waterInfo.fileName.lastIndexOf('.');
    waterInfo.name = waterInfo.fileName.substring(0, extIdx);
    waterInfo.extension = waterInfo.fileName.substring(extIdx+1);
    waterInfo.markedFileUrl = "";

    let startNum = 0;

    switch (waterInfo.extension) {
        case 'ts':
            seqNumber = wmUtil.getSequenceNumber(waterInfo.name, 'ts');
            if( seqNumber < 0 ){
                break;
            }

            if('dash' !== streamingFormat) {
                startNum = 1;
            }

            waterInfo.wmFlag = wmUtil.makeWatermarkFlag(watermark, startNum, seqNumber, gop);
            waterInfo.markedFileUrl = wmUtil.makeWatermarkPathFile(waterInfo.path, waterInfo.fileName, waterInfo.wmFlag);
            break;
        case 'mp4':
        case 'm4s':
            if (waterInfo.name.endsWith('_init')) {
                break;
            }

            seqNumber = wmUtil.getSequenceNumber(waterInfo.name, waterInfo.extension);
            if (seqNumber < 0) {
                break;
            }

            if('hls' === streamingFormat) {
                startNum = 1;
            }

            waterInfo.wmFlag = wmUtil.makeWatermarkFlag(watermark, startNum, seqNumber, gop);
            waterInfo.markedFileUrl = wmUtil.makeWatermarkPathFile(waterInfo.path, waterInfo.fileName, waterInfo.wmFlag);
            break;
        default:
            break;
    }

    if ('' === waterInfo.markedFileUrl) {
        waterInfo.markedFileUrl = waterInfo.path + waterInfo.fileName;
    }

    // console.log(waterInfo);
    responseUrl += waterInfo.markedFileUrl + waterInfo.parameter;

    return responseUrl;
}
