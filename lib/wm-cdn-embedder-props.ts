import {Code, FunctionProps, Runtime, Version} from "@aws-cdk/aws-lambda";
import {IBucket} from "@aws-cdk/aws-s3";
import {
    CachePolicy,
    IOriginAccessIdentity,
    LambdaEdgeEventType,
    OriginRequestPolicy,
    ViewerProtocolPolicy
} from "@aws-cdk/aws-cloudfront";
import {CanonicalUserPrincipal, CompositePrincipal, Effect, Role, ServicePrincipal} from "@aws-cdk/aws-iam";
import {PolicyStatementProps} from "@aws-cdk/aws-iam/lib/policy-statement";
import {RoleProps} from "@aws-cdk/aws-iam/lib/role";
import {IConfig} from "../config";
import {S3Origin} from "@aws-cdk/aws-cloudfront-origins";
import {DistributionProps} from "@aws-cdk/aws-cloudfront/lib/distribution";

export const lambdaProps = (config: IConfig, role: Role): FunctionProps => {
    return {
        functionName: config.lambdaName,
        runtime: Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: Code.fromAsset('./src'),
        role: role,
    };
};

export const lambdaRoleProps = (lambdaRoleName: string): RoleProps => {
    return {
        assumedBy: new CompositePrincipal(
            new ServicePrincipal('lambda.amazonaws.com'),
            new ServicePrincipal('edgelambda.amazonaws.com'),
        ),
        roleName: lambdaRoleName
    }
}

export const cdnProps = (bucket: IBucket, oai: IOriginAccessIdentity, lambdaEdge: Version, cdnName: string): DistributionProps => {
    return {
        defaultBehavior: {
            origin: new S3Origin(bucket, {
                originAccessIdentity: oai
            }),
            cachePolicy: CachePolicy.CACHING_OPTIMIZED,
            viewerProtocolPolicy: ViewerProtocolPolicy.ALLOW_ALL,
            edgeLambdas: [
                {
                    eventType: LambdaEdgeEventType.VIEWER_REQUEST,
                    functionVersion: lambdaEdge
                }
            ],
            originRequestPolicy: OriginRequestPolicy.CORS_S3_ORIGIN
        },
        comment: cdnName
    }
}

export const lambdaRolePolicyProps = (account: string): PolicyStatementProps => {
    return {
            effect: Effect.ALLOW,
            actions: [
                'lambda:GetFunction',
                'lambda:EnableReplication*',
                'iam:CreateServiceLinkedRole',
                'cloudfront:UpdateDistribution',
                'cloudfront:CreateDistribution',
                'logs:CreateLogGroup',
                'logs:CreateLogStream',
                'logs:PutLogEvents'
            ],
            resources: [
                `arn:aws:lambda:*:${account}:function:*`,
                `arn:aws:cloudfront::${account}:distribution/*`,
                `arn:aws:iam::${account}:role/*`,
                `arn:aws:logs:*:${account}:log-group:*`
            ]
        }
}

export const bucketPolicyProps = (account: string, oaiId: string, bucket: IBucket): PolicyStatementProps => {
    return {
        sid: 'pal-1',
        effect: Effect.ALLOW,
        actions: ['s3:GetObject'],
        principals: [ new CanonicalUserPrincipal(oaiId)],
        resources: [bucket.arnForObjects('*')],
    }
}
