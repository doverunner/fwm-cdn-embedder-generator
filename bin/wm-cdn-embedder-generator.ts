#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from "@aws-cdk/core";
import { WmCdnEmbedderGeneratorStack } from '../lib/wm-cdn-embedder-generator-stack';
import {ConfigValidator} from "../lib/wm-cdn-embedder-validator";
import {config} from "../config";

const configValidator = new ConfigValidator(config);
configValidator.checkConfig();
configValidator.updateLambdaConfig();

const app = new cdk.App();

// create cloudfront, create iam-role(lambda), create lambda, apply lambda@edge
new WmCdnEmbedderGeneratorStack(app, 'WmCdnEmbedderGeneratorStack', {
    env: {
        account: config.account,
        region: 'us-east-1'
    },
});