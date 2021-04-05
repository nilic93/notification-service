// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-west-1' });

export const helloWorld = async (): Promise<void> => {
// Create publish parameters
  const params = {
    Message: JSON.stringify({
      default: 'hello world',
      title: 'something',
      text: 'some random text',
    }), /* required */
    MessageStructure: 'json',
    TargetArn: 'arn:aws:sns:eu-west-1:346568244904:endpoint/APNS_SANDBOX/testSNS/1bef589f-af54-329c-9ea5-c53338369dde',
  };

  let publishTextPromise = await new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
  console.log('publishTextPromise 1', publishTextPromise);
  params.TargetArn = 'arn:aws:sns:eu-west-1:346568244904:endpoint/APNS_SANDBOX/testSNS/73e61c4b-706b-3e77-ac41-c78873586a5b';
  publishTextPromise = await new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
  console.log('publishTextPromise 2', publishTextPromise);
};
