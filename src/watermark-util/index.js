const crypto = require('crypto');

'use strict';

const AES_IV = '0123456789abcdef';

exports.aesDecrypt = (watermarkData, aesKey) => {
    const descipher = crypto.createDecipheriv('aes-256-cbc', aesKey, AES_IV);
    let result = descipher.update(watermarkData, "base64", "utf-8");
    result += descipher.final("utf-8");
    return result;
}
exports.checkTimeStamp = (timeStamp, interval) => {
    if (0 === interval) {
        return true;
    }
    const now = new Date();
    const checkTime = new Date(timeStamp);
    const currentMilliSeconds = now.getTime();
    const checkMilliSeconds = checkTime.getTime();
    const period = (currentMilliSeconds - checkMilliSeconds) / 1000;

    if ((interval * 60) > period && period > 0) {
        console.log("success TImeStamp.");
        return true;
    } else {
        console.log("fail TimeStamp.");
        return false;
    }
}