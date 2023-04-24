import {Construct, Stack, StackProps} from '@aws-cdk/core'
import {Bucket, BucketPolicy} from '@aws-cdk/aws-s3';
import {Function} from '@aws-cdk/aws-lambda';
import {PolicyStatement, Role,} from '@aws-cdk/aws-iam';
import {Distribution, OriginAccessIdentity,} from '@aws-cdk/aws-cloudfront';
import {config, IConfig} from '../config';
import {
  bucketPolicyProps,
  cdnProps,
  lambdaProps,
  lambdaRolePolicyProps,
  lambdaRoleProps,
} from './wm-cdn-embedder-props';

export class WmCdnEmbedderGeneratorStack extends Stack {
  constructor(scope: Construct, id: string, props?:StackProps) {
    super(scope, id, props);

    // Create lambda
    const lambda = this.createLambda(config);
    console.log('lambda stack is created.');

    const outputBucket = Bucket.fromBucketAttributes(this, 'Bucket', {
      bucketName: config.s3BucketName,
      region: config.s3BucketRegion
    });

    // Create the Origin Access Identity.
    const oai = new OriginAccessIdentity(this, 'oai', {
      comment: 'PallyConWatermarkOAI'
    });
    console.log('originAccessIdentity stack is created.');

    // Create the CloudFront distribution
    const cloudfront = new Distribution(
        this,
        'cloudFront',
        cdnProps(outputBucket, oai, lambda.currentVersion, config.cloudFrontName)
    );
    console.log('cdn stack is created.');

    // Apply bucket policy for cloudFront
    const bucketPolicyStatement = new PolicyStatement(
        bucketPolicyProps(
            config.account,
            oai.cloudFrontOriginAccessIdentityS3CanonicalUserId,
            outputBucket
        )
    );
    const bucketPolicy = new BucketPolicy(this, 'cloudfrontAccessBucketPolicy', {
      bucket: outputBucket,
    });
    bucketPolicy.document.addStatements(bucketPolicyStatement);
    console.log('Bucket policy is applied.');
  }

  /**
   * Create lambda
   * @param config
   */
  createLambda(config: IConfig) {
    // create lambda Role
    const lambdaRole = new Role(
        this,
        'lambdaRole', lambdaRoleProps(config.lambdaRoleName)
    );
    const addPolicyResult = lambdaRole.addToPolicy(new PolicyStatement(lambdaRolePolicyProps(config.account)));

    if (!addPolicyResult) {
      throw new Error(`Failed to set policy.`);
    }

    return new Function(
        this,
        'LambdaHandler',
        lambdaProps(config, lambdaRole),
    );
  }
}
