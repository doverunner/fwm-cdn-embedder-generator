const mcModule = require('../watermark-util/pallyConModule');
const assert = require('assert');


const watermark = '50b658ee13e133';
describe('App Test!', ()=>{
    it('unknown ext Test', (done)=>{
        let contentPath = '/8/287805096/dash/poster.jpg';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/0/dash/poster.jpg');

        contentPath = '/8/287805096/hls/thumbs.m3u8';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/0/hls/thumbs.m3u8');
        done();
    });
    it('m3u8 Test', (done)=>{
        const contentPath = '/8/287805096/hls/master.m3u8';
        const responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/0/hls/master.m3u8', responseUrl);
        done();
    });
    it('mpd Test', (done)=>{
        const contentPath = '/8/287805096/dash/stream.mpd';
        const responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/0/dash/stream.mpd', responseUrl);
        done();
    });
    it('ts Test', (done)=>{
        const contentPath = '/8/287805096/hls/video/avc1/1/segment-102.ts';
        const responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/0/hls/video/avc1/1/segment-102.ts', responseUrl);
        done();
    });
    it('m4s Test', (done)=>{
        const contentPath = '/8/287805096/dash/video/avc1/1/seg-103.m4s';
        const responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/1/dash/video/avc1/1/seg-103.m4s', responseUrl);
        done();
    });
});