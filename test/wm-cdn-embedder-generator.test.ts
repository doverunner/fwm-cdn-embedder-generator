import * as cdk from "@aws-cdk/core";
import { Template } from '@aws-cdk/assertions';
import {WmCdnEmbedderGeneratorStack} from "../lib/wm-cdn-embedder-generator-stack";

test.skip('Cdn Embedder Created', () => {
    const app = new cdk.App();

//   // WHEN
    const stack = new WmCdnEmbedderGeneratorStack(app, 'MyTestStack',);
//   // THEN
    const template = Template.fromStack(stack);

    console.log('template : ', template.toJSON());
});
