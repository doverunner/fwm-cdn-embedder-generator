'use strict';
exports.getSequenceNumberByPrefix = (fileName, prefix, formatName) => {
    if (!fileName.startsWith(prefix)) {
        console.log("!! unknown ." + formatName + " fileName: " + fileName + " (it must start with '" + prefix + "')");
        return -1;
    }

    const seqNumber = this.getValidNumber(fileName.substring(prefix.length));
    if (seqNumber < 0) {
        console.log("!! unknown ." + formatName + " fileName: " + fileName + " (it must be end with integer)");
    }

    return seqNumber;
}

exports.getSequenceNumber = (fileName, formatName) => {
    const regExp = /.*[_-]\d/;
    if (!regExp.test(fileName)) {
        console.log("!! unknown ." + formatName + " fileName: " + fileName );
        return -1;
    }

    let sepIdx = fileName.lastIndexOf('_');

    if (sepIdx === -1) {
        sepIdx = fileName.lastIndexOf('-');
    }

    const seqNumber = this.getValidNumber(fileName.substring(sepIdx+1));
    if (seqNumber < 0) {
        console.log("!! unknown ." + formatName + " fileName: " + fileName + " (it must be end with integer)");
    }

    return seqNumber;
}

exports.getValidNumber = (str) => {
    const regExp = /^-?\d*$/;
    if (!regExp.test(str)) {
        return -1;
    } else {
        return parseInt(str);
    }
}

const toWatermarkBinary = (str, gop) =>{
    let fullBin = '100010000';
    let result = '';
    // console.log('str1 : ', str);
    // console.log(str.length);
    if (130 === str.length) {
        fullBin = Buffer.from(str, 'hex').toString('utf8');

    } else {
        fullBin = fullBin + (Array
            .from(str)
            .reduce((acc, char) => acc.concat(parseInt(char, 16).toString(2)), [])
            .map(bin => '0'.repeat(4 - bin.length) + bin)
            .join(''));
    }
    console.log('fullBin : ', fullBin);

    if (60 === gop) {
        result += fullBin;
    } else if (30 === gop) {
        for (let j=0; j<fullBin.length; j++) {
            result += fullBin.charAt(j);
            result += fullBin.charAt(j);
        }
    }

    return result;
}

exports.makeWatermarkFlag = (watermark, startNum, tsNum, gop) => {
    let index = -1;
    const accCount = 60;
    const skipBit = 4;

    // 8 bits -> 2 hex characters
    let maxSkipTs = skipBit * (accCount / gop) + startNum;
    let mark = '0';
    if (tsNum >= maxSkipTs) {
        let watermarkBin = toWatermarkBinary(watermark, gop);
        // 6.ts index 0  64
        index = tsNum - maxSkipTs;
        index = index % watermarkBin.length;
        mark = watermarkBin.charAt( index );
    }
    console.log({watermark:watermark, gop:gop, maxSkipTs:maxSkipTs, startNum:startNum, tsNum:tsNum, index:index, mark:mark});
    return mark;
}

exports.makeWatermarkPathByDir = (contentPath, seq, wm=0) => {
    let responseUrl = "";
    const pathArr = contentPath.split('/');
    const pathArrLength = pathArr.length;
    for (let i=1; i<pathArrLength; i++) {
        if (i === (pathArrLength-seq)) {
            responseUrl += '/' + wm;
        }
        responseUrl += '/'+ pathArr[i];
    }
    return responseUrl;
}

exports.makeWatermarkPathFile = (path, fileName, wm='0') => {
    if ('1' === wm) {
        return path + 'b.' + fileName;
    }else{
        return path + fileName;
    }
}

