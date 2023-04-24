const pallyConAes = require('../wmt/pallyConAes');
const assert = require('assert');
const eventFixture = require("./eventFixture");

let config ={}
describe('pallyConAes Test!', ()=> {
    beforeEach(() => {
        config = {
            aesKey: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            type : "unlabeled_a_variant",
            availableInterval: 0,
            prefixFolder: ["dldzkdpsxmdnjrtm", "wm-contents"],
        }
    });

    it('m4s-15 Test - 0', async () => {
        const event = eventFixture.aes('seg-15.m4s');
        let request = event.Records[0].cf.request;

        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/dash/video/avc1/1/seg-15.m4s', result.uri);

    });
    it('m4s-22 Test - 0', async () => {
        const event = eventFixture.aes('seg-22.m4s');
        let request = event.Records[0].cf.request;

        const arrUri = request.uri.split('/');
        // 10001000 01000011 11001111 01000100 10010100
        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/dash/video/avc1/1/seg-22.m4s', result.uri);

    });
    it('m4s-22 Test include streaming_format - 0', async () => {
        const event = eventFixture.aesIncludeHls('seg-22.m4s');
        let request = event.Records[0].cf.request;

        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/dash/video/avc1/1/b.seg-22.m4s', result.uri);

    });
    it('m4s-21 Test - 1', async () => {
        const event = eventFixture.aes('seg-21.m4s');
        let request = event.Records[0].cf.request;
        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/dash/video/avc1/1/b.seg-21.m4s', result.uri);
    });

    it('directory_prefix : m4s-15 Test - 0', async () => {
        config.type = 'directory_prefix';

        const event = eventFixture.aes('seg-15.m4s');
        let request = event.Records[0].cf.request;

        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/0/dash/video/avc1/1/seg-15.m4s', result.uri);

    });
    it('directory_prefix : m4s-18 Test - 1', async () => {
        config.type = 'directory_prefix';

        const event = eventFixture.aes('seg-18.m4s');
        let request = event.Records[0].cf.request;
        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/1/dash/video/avc1/1/seg-18.m4s', result.uri);
    });
    it('directory_prefix : m4s-18 Test include streaming_format - 0', async () => {
        config.type = 'directory_prefix';
        //10001000 01000011 11001111 01000100 10010100
        const event = eventFixture.aesIncludeHls('seg-18.m4s');
        let request = event.Records[0].cf.request;
        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/0/dash/video/avc1/1/seg-18.m4s', result.uri);
    });
    it('directory_prefix : m4s-17 Test include streaming_format - 0', async () => {
        config.type = 'directory_prefix';
        //1000100001000011110011110100010010010100
        const event = eventFixture.aesIncludeHls('seg-17.m4s');
        let request = event.Records[0].cf.request;
        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/0/dash/video/avc1/1/seg-17.m4s', result.uri);
    });

    it('directory_prefix : ts-18 Test - 0', async () => {
        config.type = 'directory_prefix';

        const event = eventFixture.aesHls('segment-18.ts');
        let request = event.Records[0].cf.request;
        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/0/hls/video/avc1/1/segment-18.ts', result.uri);
    });
    it('directory_prefix : ts-18 Test include streaming_format - 0', async () => {
        config.type = 'directory_prefix';
        //1000100001000011110011110100010010010100
        const event = eventFixture.aesIncludeDash('segment-18.m4s');
        let request = event.Records[0].cf.request;
        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/0/hls/video/avc1/1/segment-18.m4s', result.uri);
    });
    it('directory_prefix : ts-20 Test include streaming_format - 1', async () => {
        config.type = 'directory_prefix';
        //1000100001000011110011110100010010010100
        const event = eventFixture.aesIncludeDash('segment-20.m4s');
        let request = event.Records[0].cf.request;
        const arrUri = request.uri.split('/');

        const result = await pallyConAes.getContentUrl(
            request,
            arrUri,
            'wm-contents',
            config
        );
        console.log('result : ', result);
        assert.strictEqual('/wm-contents/test/test-cid/1/hls/video/avc1/1/segment-20.m4s', result.uri);
    });
});