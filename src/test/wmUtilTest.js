const wmUtil = require('../watermark-util/wmUtil');
const assert = require('assert');

describe('wmUtil Test:', ()=>{
    it('getValidNumber()', (done)=>{
        assert.equal(wmUtil.getValidNumber("1"), 1);
        assert.equal(wmUtil.getValidNumber("-1"), -1);
        assert.equal(wmUtil.getValidNumber("_1"), -1);
        assert.equal(wmUtil.getValidNumber("1.mp4"), -1);
        assert.equal(wmUtil.getValidNumber("1+1"), -1);
        assert.equal(wmUtil.getValidNumber("2.5"), -1);
        assert.equal(wmUtil.getValidNumber("-1"), -1);
        assert.equal(wmUtil.getValidNumber("00001"), 1);
        assert.equal(wmUtil.getValidNumber("00125"), 125);
        done();
    });
    it.skip('getSequenceNumber()', (done)=>{
        assert.equal(wmUtil.getSequenceNumber("segment-125"), 125);
        assert.equal(wmUtil.getSequenceNumber("segment_132"), 132);
        assert.equal(wmUtil.getSequenceNumber("asdfsafasdfsdf_111"), 111);
        assert.equal(wmUtil.getSequenceNumber("asdfsafsafasfsdf-111"), 111);
        assert.equal(wmUtil.getSequenceNumber("asdfsdf-asfsadf-asfd-sadfsaf-111"), 111);
        assert.equal(wmUtil.getSequenceNumber("asfsaf_asdfsaf-_-_-_--asdfsadf_123"), 123);
        assert.equal(wmUtil.getSequenceNumber("1231231asdfs"), -1);
        done();
    });

});
