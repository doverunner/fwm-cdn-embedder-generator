const watermarkUtil = require('./watermark-util');
const assert = require('assert');

describe('App Test!', ()=>{
    it('decrypt Test', (done)=>{
        const encData = 'az6c-8iecWNYikgu8YIzF_eDaITsjC___EHyGE8Vbq-db7fbzdPg0qhMkc8V3zAmo7piTAgIXBozagqNXhIzaZ74cKHOCymnClF4zE2i97M=';
        const siteKey = 'dCzFAbm4jrDVmkcHXTCd1PYyAaJXawCf';
        const decData = watermarkUtil.aesDecrypt(encData, siteKey);
        console.log('decData : ', decData);
        assert.equal('{"watermark_data":"42fdKBPcRQ==","gop":60,"timestamp":"2020-11-13T02:17:00Z"}', decData);
        done();
    });
});
