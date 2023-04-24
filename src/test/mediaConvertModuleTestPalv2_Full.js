import mcModule from '../watermark-util/pallyConV2Module.js';
import assert from 'assert';

const watermark = 'ccaaee77330f66';
// sync + header: 100010000
// payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110

describe('mediaConvertModuleTestPalv2_Full Test:', ()=>{
    it('hs Test full', (done)=>{
        console.log("hs Test full");

        // skip
        let fileid = 1;
        let contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // sync
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        // header
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                      ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                               ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                        ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                 ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                          ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                   ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                            ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // sync
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        // header
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                      ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                               ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                        ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                 ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                          ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                   ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm', 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                            ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-' + fileid + '.ts');

        done();
    });
    it('m4s Test full', (done)=>{
        console.log("m4s Test full");

        // skip
        let fileid = 0;
        let contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // sync
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // header
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                      ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                               ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                        ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                 ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                          ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                   ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                            ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // sync
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // header
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                      ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                               ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                        ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                 ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                          ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                   ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                            ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        done();
    });

    it('hs Test full2', (done)=>{
        console.log("hs Test full");

        // skip
        let fileid = 1;
        let contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // sync
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        // header
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                      ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                               ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                        ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                 ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                          ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                   ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                            ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // sync
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        // header
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                      ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                               ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                        ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                 ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                          ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                   ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                            ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.test-hybrik-test_testtest_' + fileid + '.ts');

        fileid++;
        contentPath = '/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/test-hybrik-test_testtest_' + fileid + '.ts');

        done();
    });
    it('m4s Test full', (done)=>{
        console.log("m4s Test full");

        // skip
        let fileid = 0;
        let contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        let responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // sync
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // header
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                      ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                               ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                        ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                 ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                          ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                   ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                            ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // sync
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // header
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                      ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                               ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                        ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                 ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                          ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                   ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        // payload (watermark): 11001100 10101010 11101110 01110111 00110011 00001111 01100110
        //                                                                            ~~~~~~~~
        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/b.seg_' + fileid + '.mp4');

        fileid++;
        contentPath = '/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4';
        responseUrl = mcModule.createWatermarkUrl(contentPath, watermark, 'dldzkdpsxmdnjrtm');
        assert.equal(responseUrl, '/dldzkdpsxmdnjrtm/8/287805096/dash/video/avc1/1/seg_' + fileid + '.mp4');

        done();
    });
});
