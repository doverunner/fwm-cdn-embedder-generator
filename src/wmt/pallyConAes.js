const watermarkUtil= require("../watermark-util");
const mediaConvertModule= require("../watermark-util/mediaConvertModule");
const unlabeledAVariantModule= require("../watermark-util/pallyConV2Module");
const directoryPrefixModule= require("../watermark-util/pallyConModule");

exports.getContentUrl = (req, arrUri, prefixFolder, config, hasRevokeToken) =>{
    let watermarkData = arrUri[2];
    watermarkData = watermarkData.replace(/-/gi, '+');
    watermarkData = watermarkData.replace(/_/gi, '/');
    console.log("watermarkData = " + watermarkData);

    let decWatermarkData = watermarkUtil.aesDecrypt(watermarkData, config.aesKey);
    console.log("decrypt WatermarkData : " + decWatermarkData);

    /*
    decWatermarkData format
    {
        "watermark_data": <watermark data>,
        "streaming_format": <dash/hls>,
        "gop":60,
        "timestamp": < YYYY-mm-ddThh:mm:ssZ >,
        "revoke_flag": <true,false>
    }
     */

    let watermarkInfo = JSON.parse(decWatermarkData);
    const watermark = new Buffer.from(watermarkInfo.watermark_data, 'base64').toString('hex');
    const timeStamp = watermarkInfo.timestamp;
    const streamingFormat = watermarkInfo.streaming_format;
    const revokeFlag = watermarkInfo.revoke_flag;

    // Check revoke flag - if revoke_flag is true but revoke_token was not present, deny access
    if (revokeFlag && !hasRevokeToken) {
        console.log('Access denied: revoke_flag is true but revoke_token was not provided');
        return {status: '403', statusDescription: 'Missing required revoke token'};
    }

    if(watermarkUtil.checkTimeStamp(timeStamp, config.availableInterval)){
        let fwmModule;

        const cfgType = config.type.toLowerCase();
        if ('aws' === cfgType) {
            //Used AWS MediaConvert Service
            fwmModule = mediaConvertModule;
        } else if ('unlabeled_a_variant' === cfgType) {
            //composing type : unlabeled_a_variant
            fwmModule = unlabeledAVariantModule;
        } else {
            //composing type : directory_prefix
            fwmModule = directoryPrefixModule;
        }

        const contentPath = req.uri.substring(arrUri[2].length + 2 + prefixFolder.length);

        req.uri = fwmModule.createWatermarkUrl(contentPath, watermark, prefixFolder, streamingFormat);
        console.log('response uri : ', req.uri);

    } else {
        req = {status: '403'};
    }

    return req;
}