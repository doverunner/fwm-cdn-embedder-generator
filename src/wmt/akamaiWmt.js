const unlabeledAVariantModule = require("../watermark-util/pallyConV2Module");
const crypto = require('crypto');

'use strict';

exports.getContentUrl = async (req, arrUri, config) =>{
    if (!config.wmtPublicKey || !config.wmtPassword) {
        console.error('[Error] : Please set wmtPublicKey or wmtPassword in config.json.')
        return {status: '403'};
    }
    if ('unlabeled_a_variant' !== config.type.toLowerCase()) {
        console.error('[Error] : AkamaiWmt support only unlabeled_a_variant.');
        return {status: '403'};
    }

    const jwt = arrUri[1].substring(4);

    const watermark = await parsingToken(jwt, config.wmtPublicKey, config.wmtPassword);

    if (!watermark) {
        return {status: '403'};
    }

    const contentPath = req.uri.substring(arrUri[1].length + 1);

    req.uri = unlabeledAVariantModule.createWatermarkUrl(contentPath, watermark);
    console.log('response uri : ', req.uri);

    return req;
}

/**
 * parses akamai wmt token and returns watermarkData.
 * @param jwt :wmt:{xxx}
 * @param wmtPublicKey akamai public key issued by pallycon. wmtPublicKey in the config.json file.
 * @param passwd akamai password issued by pallycon. wmtPassword in the config.json file.
 * @returns {Promise<string>} watermark data
 */
const parsingToken = async (jwt, wmtPublicKey, passwd) => {
    let watermarkData;
    const skipBit = 4;
    try {
        if (await tokenVerify(jwt, wmtPublicKey)) {
            new Error('Jwt is invalid.');
        }

        const payload = getPayloadFromJwt(jwt);
        // console.log('payload :', payload);
        // console.log('payload[\'wmidivb64\'] : ', payload['wmidivb64']);

        const aesKey = crypto.createHash('sha256').update(passwd).digest();
        const aesIv = new Buffer.from(payload['wmidivb64'], 'base64');

        const cipher = crypto.createDecipheriv('aes-256-cbc', aesKey, aesIv);

        let binWatermarkData = cipher.update(payload['wmidctb64'], 'base64', 'utf8');
        binWatermarkData += cipher.final("utf-8");
        binWatermarkData = binWatermarkData.replace(/A/gi, '0').replace(/B/gi, '1');
        binWatermarkData = binWatermarkData.substring(skipBit) + binWatermarkData.substring(0, skipBit);
        console.log('binWatermarkData : ', binWatermarkData);

        watermarkData = new Buffer.from(binWatermarkData, 'utf-8').toString('hex');
    } catch (e) {
        console.log(e);
    }
    return watermarkData;
}

const getSecuredInputFromJwt = (jwt) => jwt.split('.', 2).join('.');

const getSignatureFromJwt = (jwt) =>jwt.split('.')[2];

const getPayloadFromJwt = (jwt) => JSON.parse(new Buffer.from(jwt.split('.')[1], 'base64').toString('utf8'));

/**
 * jwt token verification - rsa256
 * @param jwt
 * @param wmtPublicKey
 * @returns {Promise<boolean>|boolean}
 */
const tokenVerify = async (jwt, wmtPublicKey) => {
    try {
        const verifier = crypto.createVerify('RSA-SHA256');
        verifier.update(getSecuredInputFromJwt(jwt));

        return await verifier.verify(wmtPublicKey, getSignatureFromJwt(jwt), 'base64');
    } catch (e) {
        console.error(e.message);
        return false
    }
}
