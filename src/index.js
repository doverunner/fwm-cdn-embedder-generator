const config = require("./config.json");
const pallyConAes = require('./wmt/pallyConAes');
const akamaiWmt = require("./wmt/akamaiWmt");

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

    const arrUri = request.uri.split('/');
    const prefixFolder = arrUri[1];

    if (prefixFolder.startsWith('wmt:')) {
        // akamaiWmt 이용
        request = await akamaiWmt.getContentUrl(request, arrUri, config);
    } else {
        // pallyConAes 이용
        if (checkWatermarkPath(prefixFolder)) {
            request = pallyConAes.getContentUrl(request, arrUri, prefixFolder, config);
        }
    }

    callback(null, request);
}
