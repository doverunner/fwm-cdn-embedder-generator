const config = require("./config.json");
const pallyConAes = require('./wmt/pallyConAes');
const akamaiWmt = require("./wmt/akamaiWmt");
const wmUtil = require("./watermark-util/wmUtil")

const checkWatermarkPath = (reqPrefixFolder) => {
    const {prefixFolder} = config;
    if (Array.isArray(prefixFolder)) {
        return prefixFolder.includes(reqPrefixFolder);
    } else {
        return prefixFolder === reqPrefixFolder;
    }
}

exports.handler = async (event, context, callback) => {
    let request = event.Records[0].cf.request;
    console.log('request : ' + JSON.stringify(request));

    let arrUri = request.uri.split('/');
    const prefixFolder = arrUri[1];

    if (prefixFolder.startsWith('wmt:')) {
        // akamaiWmt 이용
        request = await akamaiWmt.getContentUrl(request, arrUri, config);
    } else {
        // pallyConAes 이용
        if (checkWatermarkPath(prefixFolder)) {
            // remove revoke token
            const { modifiedArrUri, hasRevokeToken } = wmUtil.removeRevokeToken(arrUri);
            arrUri = modifiedArrUri;
            request.uri = '/' + arrUri.slice(1).join('/');

            request = pallyConAes.getContentUrl(request, arrUri, prefixFolder, config, hasRevokeToken);
        }
    }

    callback(null, request);
}
