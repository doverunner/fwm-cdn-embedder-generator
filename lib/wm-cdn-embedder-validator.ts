import {IConfig} from "../config";
import * as fs from "fs";

interface IValidator {
    checkConfig(): boolean,
    updateLambdaConfig(): boolean,
    readonly REQUIRED_PROPERTIES: string[]
}
export class ConfigValidator implements IValidator {
    /**
     * This values are require config value.
     */
    REQUIRED_PROPERTIES = ['account', 'cloudFrontName', 's3BucketName', 's3BucketRegion', 'lambdaName', 'lambdaRoleName', 'prefixFolder', 'aesKey', 'availableInterval'];
    config: IConfig

    constructor(config: IConfig) {
        this.config = config;
    }

    /**
     * Validation check for config.ts.
     */
    checkConfig(): boolean {
        this.checkRequired();
        this.checkAesKey();
        this.checkFwmType();
        return true;
    }

    /**
     * Update the config.json in lambda source.
     */
    updateLambdaConfig(): boolean {
        try {
            const wmtPublicKey = this.config.wmtPublicKey?.replace(/\n/g, '\\n')

            const data = '{\n' +
                '  "aesKey": "' + this.config.aesKey + '",\n' +
                '  "type" : "' + (this.config.fwmType ?? 'unlabeled_a_variant') + '",\n' +
                '  "availableInterval": ' + this.config.availableInterval + ',\n' +
                '  "prefixFolder": ' + this.createPrefixFolderString(this.config.prefixFolder) + ',\n' +
                '  "wmtPublicKey": "' + wmtPublicKey + '",\n' +
                '  "wmtPassword": "' + this.config.wmtPassword + '"\n' +
                '}';

            fs.writeFileSync('./src/config.json', data, 'utf8');
        } catch (e) {
            console.error(e);
            throw new Error('Fail to update config.json file in lambda source.');
        }
        return true;
    }

    /**
     * Check the required configuration values.
     * @private
     */
    private checkRequired() {
        const notExistKey = this.REQUIRED_PROPERTIES.find(property => !this.config.hasOwnProperty(property));

        if(notExistKey) {
            throw new Error(`config.${notExistKey} is not exist. Please check config.js.`);
        }

        for( const key in this.config ) {
            if (!this.config[key] && 'availableInterval' !== key) {
                throw new Error(`Required config.${key} value is empty.`);
            }
        }
        if (0==this.config.prefixFolder.length) {
            throw new Error('Required config.prefixFolder value is empty.');
        }
    }

    /**
     * Check the aesKey length.
     * @private
     */
    private checkAesKey() {
        if ('{Your PallyCon Site Key}' === this.config.aesKey || 32 !== this.config.aesKey.length) {
            throw new Error('aesKey value is invalid. please check it.');
        }
    }

    /**
     * Check the fwmType value.
     * @private
     */
    private checkFwmType() {
        if (
            this.config.fwmType &&
            'unlabeled_a_variant' !== this.config.fwmType &&
            'directory_prefix' !== this.config.fwmType
        ) {
            throw new Error('fwmType value is invalid. (required :unlabeled_a_variant, directory_prefix)')
        }
    }

    /**
     * Create a string to input to prefixFolder in config.json.
     * @param prefixFolder
     * @private
     */
    private createPrefixFolderString(prefixFolder: string[]) {
        let result = "[";
        for(let i=0, max=prefixFolder.length-1; i <= max; i++) {
            if (i !== max) {
                result += '\"' + prefixFolder[i] + '\", ';
            } else {
                result += '\"' + prefixFolder[i] + '\"]';
            }
        }
        return result;
    }
}