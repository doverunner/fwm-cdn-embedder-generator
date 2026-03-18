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
    if (regExp.test(str)) {
        return Number.parseInt(str);
    } else {
        return -1;
    }
}

const toWatermarkBinary = (str, gop) =>{
    let fullBin = '100010000';
    let result = '';

    if (130 === str.length) {
        fullBin = Buffer.from(str, 'hex').toString('utf8');

    } else {
        fullBin = fullBin + (Array
            .from(str)
            .reduce((acc, char) => acc.concat(Number.parseInt(char, 16).toString(2)), [])
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

exports.makeWatermarkFlag = (watermark, startNum, tsNum, syncSkipBit, gop) => {
    exports.makeWatermarkFlag = (watermark, startNum, tsNum, syncSkipBit, gop) => {
        let index = -1;
        let tsSeq = tsNum;
        const accCount = 60;
        const skipBit = 4;
        const indicatorInterval = 3;
        const indicatorIndex = 2;
        let isIndicator = false;

        if (syncSkipBit > -1) {
            tsSeq = tsSeq + syncSkipBit;
        }

        // 8 bits -> 2 hex characters
        let maxSkipTs = skipBit * (accCount / gop) + startNum;
        let mark = '0';
        if (tsSeq >= maxSkipTs) {
            let watermarkBin = toWatermarkBinary(watermark, gop);
            let watermarkBinLength = watermarkBin.length;

            // 6.ts index 0  64
            index = tsSeq - maxSkipTs;

            // syncSkipBit 활성 및 워터마크 길이가 65인 경우에만 indicator를 지원한다.
            if (syncSkipBit > -1 && watermarkBinLength === 65 && Math.trunc(index / watermarkBinLength) % indicatorInterval === indicatorIndex) {
                isIndicator = true;
                watermarkBin = '10001000011000000110000000000000011111111000000000000001100000011';
            }

            index = index % watermarkBinLength;
            mark = watermarkBin.charAt( index );
        }
        console.log({watermark:watermark, gop:gop, maxSkipTs:maxSkipTs, startNum:startNum, tsNum:tsNum, tsSeq:tsSeq, isIndicator:isIndicator, index:index, mark:mark});

        return mark;
    }
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

exports.removeRevokeToken = (arrUri) => {
    const watermarkData = arrUri[2].split('.');
    const hasRevokeToken = watermarkData.length >= 2;

    if (hasRevokeToken) {
        arrUri[2] = watermarkData[1];
    }
    return {
        modifiedArrUri:arrUri,
        hasRevokeToken
    };
};