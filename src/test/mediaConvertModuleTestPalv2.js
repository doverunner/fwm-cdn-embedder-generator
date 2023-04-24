const mcModule = require('../watermark-util/pallyConV2Module');
const assert = require('assert');

const watermark = 'ccaaee77330f66';

describe('mediaConvertModuleTestPalv2 Test:', ()=>{
    it('unknown ext Test', (done)=>{
        let contentPath = '/8/287805096/dash/poster.jpg';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/poster.jpg');
        done();
    });
    it('m3u8 Test', (done)=>{
        let contentPath = '/8/287805096/hls/master.m3u8';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/master.m3u8');
        done();
    });
    it('mpd Test', (done)=>{
        let contentPath = '/8/287805096/dash/stream.mpd';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/stream.mpd');
        done();
    });
    it('ts Test', (done)=>{
        let contentPath = '/8/287805096/hls/video/avc1/1/segment-101.ts?key=val';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-101.ts?key=val');

        contentPath = '/8/287805096/hls/video/avc1/1/segment-102.ts?key=val';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-102.ts?key=val');

        contentPath = '/8/287805096/hls/video/avc1/1/segment-101.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-101.ts');

        contentPath = '/8/287805096/hls/video/avc1/1/segment-102.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-102.ts');

        contentPath = '/8/287805096/hls/video/avc1/1/seg-102.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/seg-102.ts');

        contentPath = '/8/287805096/hls/video/avc1/1/segment-102g.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-102g.ts');

        done();
    });
    it('mp4 Test', (done)=>{
        let contentPath = '/8/287805096/dash/video/avc1/1/_init.mp4';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/_init.mp4');
        done();
    });
    it('m4s Test 1', (done)=>{
        let contentPath = '/8/287805096/dash/video/avc1/1/seg_100.m4s';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_100.m4s');

        contentPath = '/8/287805096/dash/video/avc1/1/seg_100.m4s?key=val';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_100.m4s?key=val');

        contentPath = '/8/287805096/dash/video/avc1/1/seg_101.m4s';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_101.m4s');

        contentPath = '/8/287805096/dash/video/avc1/1/seg_101.m4s?key=val';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_101.m4s?key=val');

        done();
    });
    it('m4s Test 2', (done)=>{
        let contentPath = '/8/287805096/dash/video/avc1/1/seg_101_init.m4s';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_101_init.m4s');

        contentPath = '/8/287805096/dash/video/avc1/1/seg_101_init.m4s?key=val';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_101_init.m4s?key=val');

        done();
    });
    it('m4s Test 3', (done)=>{
        let contentPath = '/8/287805096/dash/video/avc1/1/seg_101g.m4s';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_101g.m4s');
        done();
    });
});
