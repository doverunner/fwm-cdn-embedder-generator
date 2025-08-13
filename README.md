# DoveRunner Watermark CDN Embedder Generator

## Version
- 1.0.0

## Environment
- Language: TypeScript
- AWS CDK : v2
- Lambda(Node.js) : v16.x
- Forensic Watermark CDN Embedder : v2.9.0

## Steps
### Step1. Install npm and source download
- You can download and install file from the [npm site page](https://nodejs.org/en/download)
- You can clone this sample project.

### Step2. Install Package
```bash
npm install
```

### Step3. Install the AWS CDK
This sample code is from CDK v2. So, if you have installed CDK v1, upgrade your CDK.
```bash
npm install -g aws-cdk
```
> For more information about AWS CDK, please refer to [CDK guide](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install) from AWS.



### Step4. Put your Configuration Settings in config.ts
In the config.ts file, you can set
- AWS config settings
- DoveRunner config settings
- Akamai config settings

Please create an output bucket that will be connected to the CDN in advance and proceed.  
And this CDK sample may not work if your output bucket's default encryption used `SSE-KMS`.
Please, set bucket default encryption to `SSE-S3`.

| Name              | Required | Description                                                                                                                                                                                                                                                                                                                                                                                             |
|-------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| account           | ture     | Enter the AWS account number                                                                                                                                                                                                                                                                                                                                                                            |
| cloudFrontName    | true     | Enter the name of cloudfront to be created.                                                                                                                                                                                                                                                                                                                                                             |
| s3BucketName      | true     | Enter the name of forensic watermark content output bucket. <br/> **It must be created before running**.                                                                                                                                                                                                                                                                                                |
| s3BucketRegion    | true     | Enter the region of forensic watermark content output bucket. <br/> **It must be created before running**.                                                                                                                                                                                                                                                                                              |
| lambdaName        | true     | Enter the name of lambda@Edge function to be created.                                                                                                                                                                                                                                                                                                                                                   |
| lambdaRoleName    | true     | Enter the name of lambda role to be created.                                                                                                                                                                                                                                                                                                                                                            |
| aesKey            | true     | Enter the site key value provided by the DoveRunner console site.                                                                                                                                                                                                                                                                                                                                         |
| availableInterval | true     | The URL requested for watermarking contains a timestamp value. This item is the value for checking the validity of the timestamp. If set to 0, the timestamp validity period is not checked. (Unit: minutes)                                                                                                                                                                                            |
| fwmType           | false    | Enter unlabeled_a_variant if preprocessed A/B version segments are stored together in one folder, and enter `directory_prefix` if they are packaged in separate 0 and 1 folders. If you use the latest version of the FWM CLI packager or if you are a new customer of DoveRunner SaaS packaging service, it is basically packaged in the form of `Unlabeled A Variant`. (default: `unlabeled_a_variant`) |
| prefixFolder      | true     | Set the name of the parent folder where the A/B version contents are stored<br/> - For contents packaged with old version packaging service: `dldzkdpsxmdnjrtm`<br/> - For contents packaged with the new T&P service: `wm-contents` <br/> The default value is `["dldzkdpsxmdnjrtm", "wm-contents"]`, which supports both cases.                                                                       |
| wmtPublicKey      | false    | Set when using the `wmt` token type. Use the `Akamai public key` issued from the DoveRunner site. It can be requested the helpdesk.                                                                                                                                                                                                                                                                       |
| wmtPassword       | false    | Set when using the `wmt` token type. Use the `Akamai password` issued from the DoveRunner site. It can be requested the helpdesk.                                                                                                                                                                                                                                                                         |

### Step5. Bootstrap your AWS account
Lambda@Edge region must be `us-east-1`. so bootstrap region is `us-east-1`.
```bash
# Get the AWS account number
aws sts get-caller-identity

# Bootstrap the account
cdk bootstrap aws://{{ACCOUNT-NUMBER}}/us-east-1
```

> ❕ Permission errors can occur if you have MFA enabled on your IAM account. You can resolve the error by acquiring and applying the session token of [aws sts](https://awscli.amazonaws.com/v2/documentation/api/2.1.30/reference/sts/get-session-token.html).

### Step6. Deploy
If Bootstrapping on Step5 successes, deploy the cdk.

```bash
cdk deploy
```

## Note
> In the case of lambda@edge, it is impossible to delete it immediately.   
> When resetting using this sample or deleting a resource through cloud formation, it can be completely deleted after a certain period of time.
> 
