import {ConfigValidator} from '../lib/wm-cdn-embedder-validator';
import * as fs from "fs";

describe('Validator Check', () => {
    const defaultConfig = () => {
        return {
            account: 'abc',
            region: 'def',
            cloudFrontName : '123',
            s3BucketName : '456',
            s3BucketRegion : 'ap-northeast-2',
            lambdaName : '789',
            lambdaRoleName : 'TestRoleName',
            aesKey: '12345678901234567890123456789012',
            availableInterval: 0,
            prefixFolder: ['dldzkdpsxmdnjrtm', 'wm-contents'],
            wmtPublicKey: 'public_key',
            wmtPassword: "password"
        };
    };

    test('Case 1 : Success', ()=>{
        const testConfig = defaultConfig();
        expect(new ConfigValidator(testConfig).checkConfig()).toBeTruthy();
    });

    test.each([
        'account', 'cloudFrontName', 's3BucketName', 's3BucketRegion', 'lambdaName', 'lambdaRoleName', 'prefixFolder', 'aesKey'
    ])("Empty Test : %s", (property) => {
        try {
            const testConfig: any = defaultConfig();
            testConfig[property] = '';
            new ConfigValidator(testConfig).checkConfig();
        } catch (e: any) {
            expect(e.message).toBe(`Required config.${property} value is empty.`)
        }
    });

    test.each([
        'account', 'cloudFrontName', 's3BucketName', 's3BucketRegion', 'lambdaName', 'lambdaRoleName', 'prefixFolder', 'aesKey'
    ])("Null Test : %s", (property) => {
        try {
            const testConfig: any = defaultConfig();
            delete testConfig[property];
            new ConfigValidator(testConfig).checkConfig();
        } catch (e: any) {
            console.log(e.message);
            expect(e.message).toBe(`config.${property} is not exist. Please check config.js.`)
        }
    });

    test('prefixFolder is empty array', () =>{
        try {
            const testConfig: any = defaultConfig();
            testConfig.prefixFolder = [];
            new ConfigValidator(testConfig).checkConfig();
        } catch (e: any) {
            console.log(e.message);
            expect(e.message).toBe('Required config.prefixFolder value is empty.')
        }
    });

    test('update lambda config.json', () =>{
        const testConfig: any = defaultConfig();

        expect(new ConfigValidator(testConfig).updateLambdaConfig()).toBeTruthy();
        const jsonData = JSON.parse(fs.readFileSync('./src/config.json', 'utf-8'));

        expect(jsonData.aesKey).toBe('12345678901234567890123456789012');
        expect(jsonData.type).toBe('unlabeled_a_variant');
        expect(jsonData.availableInterval).toBe(0);
        expect(jsonData.prefixFolder[0]).toBe('dldzkdpsxmdnjrtm');
        expect(jsonData.prefixFolder[1]).toBe('wm-contents');
        expect(jsonData.wmtPublicKey).toBe('public_key');
        expect(jsonData.wmtPassword).toBe('password');

        const returnData = '{\n' +
            '  "aesKey": "{Your PallyCon Site Key}",\n' +
            '  "type" : "unlabeled_a_variant",\n' +
            '  "availableInterval": 60000,\n' +
            '  "prefixFolder": ["dldzkdpsxmdnjrtm", "wm-contents"],\n' +
            '  "wmtPublicKey": "{Your PallyCon Akamai Public Key}",\n' +
            '  "wmtPassword": "{Your PallyCon Akamai Key Password}"\n' +
            '}';
        fs.writeFileSync('./src/config.json', returnData, 'utf8');
    });
});
