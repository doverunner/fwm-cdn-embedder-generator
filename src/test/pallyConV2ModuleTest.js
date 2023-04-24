const pal2Module = require('../watermark-util/pallyConV2Module.js');
const assert = require('assert');


const watermark = '50b658ee13e133';
describe('App Test!', ()=>{
    it('m3u8 Test', (done)=>{
        const contentPath = '/8/287805096/hls/master.m3u8';
        const responseUrl = pal2Module.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/hls/master.m3u8', responseUrl);
        done();
    });
    it('mpd Test', (done)=>{
        const contentPath = '/8/287805096/dash/stream.mpd';
        const responseUrl = pal2Module.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/dash/stream.mpd', responseUrl);
        done();
    });
    it('ts Test', (done)=>{
        const contentPath = '/8/287805096/hls/video/avc/0/segment-102.ts';
        const responseUrl = pal2Module.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc/0/segment-102.ts', responseUrl);
        done();
    });
    it('mp4 Test', (done)=>{
        const contentPath = '/8/287805096/dash/video/avc/0/init.mp4';
        const responseUrl = pal2Module.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc/0/init.mp4', responseUrl);
        done();
    });
    it('m4s Test', (done)=>{
        const contentPath = '/8/287805096/dash/video/avc/0/seg-103.m4s';
        const responseUrl = pal2Module.createWatermarkUrl(contentPath, watermark, 'wm-contents');
        assert.equal('/wm-contents/8/287805096/dash/video/avc/0/b.seg-103.m4s', responseUrl);
        done();
    });
});