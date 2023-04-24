const {handler} = require('../');
const assert = require('assert');

describe('Handler Test!', ()=> {
    it('segment1 Test - 0', (done) => {
        let result;
        const event = {'Records': [{'cf': {'request': {'uri': '/dldzkdpsxmdnjrtm/kxrjCF6-_54v9rk_e0GHPNZWzP3W_Zb-AAq_m--5ygLBu1G0DhgV_HCswHKMUcqQXgrDlk42OyuEkoQvoeNACY519HWIcUk63Jbd_-3UfNU=/8/287805096/hls/video/avc1/1/segment-1.ts'}}}]};
        handler(
            event,
            ()=>console.log('context'),
            (a,b)=>{
                console.log(b);
                result = b.uri;
            }
            );
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/segment-1.ts', result);
        done();
    });
    it('segment5 Test - 1', (done) => {
        let result;
        const event = {'Records': [{'cf': {'request': {'uri': '/dldzkdpsxmdnjrtm/kxrjCF6-_54v9rk_e0GHPNZWzP3W_Zb-AAq_m--5ygLBu1G0DhgV_HCswHKMUcqQXgrDlk42OyuEkoQvoeNACY519HWIcUk63Jbd_-3UfNU=/8/287805096/hls/video/avc1/1/segment-5.ts'}}}]};
        handler(
            event,
            ()=>console.log('context'),
            (a,b)=>{
                console.log(b);
                result = b.uri;
            }
        );
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.segment-5.ts', result);
        done();
    });
});

describe('Handler Akamai Test!', ()=> {
    it.skip('m4s-1 Test - 0', (done) => {
        const event = {'Records': [{'cf': {'request': {'uri': '/wmt:eyJraWQiOiJpbmthLXBhbGx5Y29uLXdtLWNlcnQtdGVzdCIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJ3bWlkaXZiNjQiOiIrbkRWUHUvdUw3Wi9JalZkZkVXcEZnPT0iLCJ3bWlkY3RiNjQiOiJ1S1UxOWhsS1FLNmpGUVVEclY5bjl2WEhhaWNFQUVzMVBsM3VtWFNBRnJxSHNmbG1xbnZsSEwvSGRON2krTGZMdEt2OSs2d1V2RVZtSHR4amFGYmdMMlNGODdXQkVVd1pMTDhKd1NCY2VKST0iLCJ3bWlkaXZsZW4iOjE2LCJ3bWlkcGlkIjoiaW5rYS1wYWxseWNvbi13bS1wdy10ZXN0Iiwid21pZGFsZyI6ImFlcy0yNTYtY2JjIiwiaXNzIjoicGFsbHljb24uY29tIiwid21pZHBhbGciOiJzaGEyNTYiLCJ3bWlkaXZoZXgiOiJmYTcwZDUzZWVmZWUyZmI2N2YyMjM1NWQ3YzQ1YTkxNiIsImlhdCI6MTY3NTIxMDYzOCwid212ZXIiOjF9.YZimUEryT-xEHqBIxtjhtYdDWCG1qO_w_1fNTv7pAzqo5jno8QUr5HnPm4KW504lqTU6a7G5ojRcQ9nypsrmWQ4J7BhkTuINyV2hIXA3WCBv3PMyfIrCnWZQoUiI0a_hbKZi07NMSZIC32wdMwSR369SFu08OClU3pVYguPYsFWjPTywpqIHWnsLYuHUqpdx6Q2vDuqpPNlnFFSc4dAasfC8edZ7zAsxHCHTe8OWIVkM2PfWQJq6Q3TzSHa3E0bUW2J7_vrItPhCegl23Hqb9EtPYLZz35-OzVqJ2YZSrb6dl_B_X34y1t4W7qAClI-wgay8caeUMaWtkvG-hXiCmw/test/test-cid/dash/video/avc1/1/seg-5.m4s'}}}]};
        handler(
            event,
            ()=>console.log('context'),
            (a,b)=>{
                console.log(b);
                result = b.uri;
            }
        );
        assert.equal('/dldzkdpsxmdnjrtm/8/287805096/hls/video/avc1/1/b.seg-5.m4s', result);
        done();
    });
});