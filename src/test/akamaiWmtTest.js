const akamaiWmt = require('../wmt/akamaiWmt');
const assert = require('assert');
const eventFixture = require("./eventFixture");
const crypto = require('crypto');

let config ={}
describe('akamaiWmt Test!', ()=> {
    beforeEach(() => {
        config = {
            type : "unlabeled_a_variant",
            availableInterval: 0,
            prefixFolder: ["dldzkdpsxmdnjrtm", "wm-contents"],
            wmtPublicKey: "-----BEGIN PUBLIC KEY-----\n" +
                "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgVPKfjNVUm+flBNHAfKl\n" +
                "U8nZZlnlc2DeJ1ZB0UXeJITHtlNA0edoNF3lLzmFI9+ahD+YoBIEChqFWZHWIMoD\n" +
                "uNdaLb0Z1aaYoBm//n1oORijoz/t9MoJJAqv36ttum/+7Dkh+8Qk9jHSfXMK3JDJ\n" +
                "tuqQIT6CtMoWNE1el4YpaRphnZANMalncHkbfszzS3nJSMn5Stexw0QpGUEseiPr\n" +
                "0TRO1EmPwFHflpiWsztGnLggf1UeCNU19utM18xLNynEKiA23/l0WzKS+jYlbTbU\n" +
                "MCVcAkFmThI7b6DmhR5ZdfP3ZvOVl7XPO2EGGIizgqyik0YAOyWdmIiYjfAv4A47\n" +
                "wwIDAQAB\n" +
                "-----END PUBLIC KEY-----\n",
            wmtPassword: "f0b14deeb24a"
        }
    });

    it('m4s-14 Test - 0', async () => {
        const event = eventFixture.wmt('seg-14.m4s');
        let request = event.Records[0].cf.request;

        const arrUri = request.uri.split('/');

        const result = await akamaiWmt.getContentUrl(
            request,
            arrUri,
            config
        );
        console.log('result : ', result);
        assert.equal('/wm-contents/test/test-cid/dash/video/avc1/1/seg-14.m4s', result.uri);

    });
    it('m4s-21 Test - 1', async () => {
        const event = eventFixture.wmt('seg-21.m4s');
        let request = event.Records[0].cf.request;
        const arrUri = request.uri.split('/');

        const result = await akamaiWmt.getContentUrl(
            request,
            arrUri,
            config
        );
        console.log('result : ', result);
        assert.equal('/wm-contents/test/test-cid/dash/video/avc1/1/b.seg-21.m4s', result.uri);
    });

    it('config 설정 오류', async () => {
        config.wmtPublicKey = '';
        const event = eventFixture.wmt();
        let request = event.Records[0].cf.request;

        const arrUri = request.uri.split('/');

        let result = await akamaiWmt.getContentUrl(
            request,
            arrUri,
            config
        );
        console.log('result : ', result);
        assert.equal('403', result.status);

        config.wmtPassword = '';
        result = await akamaiWmt.getContentUrl(
            request,
            arrUri,
            config
        );
        console.log('result : ', result);
        assert.equal('403', result.status);
    });

    it('config type 설정 오류', async () => {
        config.type = 'directory_prefix';
        const event = eventFixture.wmt();
        let request = event.Records[0].cf.request;

        const arrUri = request.uri.split('/');

        let result = await akamaiWmt.getContentUrl(
            request,
            arrUri,
            config
        );
        console.log('result : ', result);
        assert.equal('403', result.status);
    });

    it('rsa decrypt test', ()=>{
        const thing = 'eyJraWQiOiJRTVRHX2F3bXRfa2lkXzlhYjFmNWFiIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJ3bWlkaXZiNjQiOiI4WXd4SnhJQ0Z3NHh1ZVdDVklFODVnPT0iLCJ3bWlkY3RiNjQiOiJCSkN5RHhNendwREhocmhrV3BpZmRVdHVaUE84RzNiSlBDOWFrRmhpeEJFOG0vRjdiMlNnWkkwZWNKb1l2WWlyYTE3OHltMmswYzR3cjI5QWYvUVpFNysvakZWc3krRGxDUkdwOVRKdE9uWT0iLCJ3bWlkaXZsZW4iOjE2LCJ3bWlkcGlkIjoiUU1UR19hd210X3BpZF8xNWZhMGQxYyIsIndtaWRhbGciOiJhZXMtMjU2LWNiYyIsImlzcyI6InBhbGx5Y29uLmNvbSIsIndtaWRwYWxnIjoic2hhMjU2Iiwid21pZGl2aGV4IjoiZjE4YzMxMjcxMjAyMTcwZTMxYjllNTgyNTQ4MTNjZTYiLCJpYXQiOjE2NzU3NjEwODEsIndtdmVyIjoxfQ';
        const signature = 'DKH-ege6PvP7JZpcPPAhZuTtCpi7C6bW4dQ93XHYFsfNWOa0JoRahdgtKK5S7yBO6CbK1IGtqttaREbKnm4nTtUaTjr7NPwfT8xbRYgBLb2bHnFZlS5H9gP7N9wXu6mZf3nLkiQSLLnnhwew45coi1INECGAKZz4fmAQGJdBUBThEip3_YeNHj5BMNEDbyQnCp8Mg8oOD_cVP71Mbfc7AgGPZrl6ayackQLgchC78qUsyRS9EgCavP3hJurglwsPhwTZQtoKMEQHjnvIt7otx2kg2m8d6tczZSsLtYnL44rM5hRNkwCPcnVxN_CSWPTQvzngT2zcXLHPz-MljiD9Ew';

        const verifier = crypto.createVerify('RSA-SHA256');
        verifier.update(thing);
        assert.equal(true, verifier.verify(config.wmtPublicKey, signature, 'base64'))
    })
});