const mediaConvertModule = require('../watermark-util/mediaConvertModule');
const assert = require('assert');


const watermark = '50b658ee13e133';
describe('App Test!', ()=>{
    it('m3u8 Test', (done)=>{
        const contentPath = ' /8/287805096/hls/master.m3u8';
        const responseUrl = mediaConvertModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/0/hls/master.m3u8', responseUrl);
        done();
    });
    it('mpd Test', (done)=>{
        const contentPath = ' /8/287805096/dash/stream.mpd';
        const responseUrl = mediaConvertModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/0/dash/stream.mpd', responseUrl);
        done();
    });
    it('ts Test', (done)=>{
        const contentPath = ' /8/287805096/hls/master_360_00102.ts';
        const responseUrl = mediaConvertModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/0/hls/master_360_00102.ts', responseUrl);
        done();
    });
    it('mp4 Test', (done)=>{
        const contentPath = ' /8/287805096/dash/stream_360_000000103.mp4';
        const responseUrl = mediaConvertModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/1/dash/stream_360_000000103.mp4', responseUrl);
        done();
    });
    it('fmp4 Test', (done)=>{
        const contentPath = ' /8/287805096/dash/stream_360_000000103.fmp4';
        const responseUrl = mediaConvertModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/0/dash/stream_360_000000103.fmp4', responseUrl);
        done();
    });
    it('init.mp4 Test', (done)=>{
        const contentPath = ' /8/287805096/dash/init.mp4';
        const responseUrl = mediaConvertModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/0/dash/init.mp4', responseUrl);
        done();
    });
});