export interface IConfig {
    [index: string]: string | number | string[] | undefined | null,
    readonly account: string,
    readonly cloudFrontName: string,
    readonly s3BucketName : string,
    readonly s3BucketRegion : string,
    readonly lambdaName : string,
    readonly lambdaRoleName : string,
    readonly aesKey: string
    readonly fwmType?: string,
    readonly availableInterval: number,
    readonly prefixFolder: string[],
    readonly wmtPublicKey?: string,
    readonly wmtPassword?: string
}

export const config: IConfig = {
    /**
     * Enter the aws account number
     */
    account: '{Your AWS account number}',

    /**
     * Enter the name of cloudfront to be created.
     */
    cloudFrontName : 'pallycon-watermark-cdn',


    /**
     * Enter the name of forensic watermark content output bucket. It must be created before running.
     */
    s3BucketName : '{Your output bucket name}',

    /**
     * Enter the name of forensic watermark content output bucket region. It must be created before running.
     * bucket region : us-east-1, ap-northeast-1, ap-northeast-2, ap-southeast-1, eu-central-1
     */
    s3BucketRegion: '{Your output bucket region}',

    /**
     * Enter the name of lambda@Edge function to be created.
     */
    lambdaName : 'watermark-cdn-embedder',

    /**
     * Enter the name of lambda role to be created.
     */
    lambdaRoleName : 'PallConWatermarkLambdaRole',

    /**
     * Enter the site key value provided by the PallyCon console site.
     */
    aesKey: "{Your PallyCon site key}",

    /**
     * The URL requested for watermarking contains a timestamp value.
     * This item is the value for checking the validity of the timestamp.
     * If set to 0, the timestamp validity period is not checked. (Unit: minutes)
     */
    availableInterval: 60000,

    /**
     * Enter unlabeled_a_variant if preprocessed A/B version segments are stored together
     * in one folder, and enter directory_prefix if they are packaged in separate 0 and 1 folders.
     * If you use the latest version of the FWM CLI packager
     * or if you are a new customer of PallyCon SaaS packaging service,
     * it is basically packaged in the form of Unlabeled A Variant. (default: unlabeled_a_variant)
     */
    fwmType: "unlabeled_a_variant",

    /**
     * Set the name of the parent folder where the A/B version contents are stored
     * If you use PallyCon TNP Service, Don't edit.
     */
    prefixFolder: ['dldzkdpsxmdnjrtm', 'wm-contents'],

    /**
     * This is required to operate in the same way as the Akamai wmt format.
     * Set the wmt public key value provided by the PallyCon helpdesk.
     * Required. line separator : \\n (x), \n (o)
     */
    wmtPublicKey: "{Your PallyCon Akamai Public Key}",

    /**
     * This is required to operate in the same way as the Akamai wmt format.
     * Set the wmt password value provided by the PallyCon helpdesk.
     */
    wmtPassword: "{Your PallyCon Akamai Key Password}",
}