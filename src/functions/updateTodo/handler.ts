import { DynamoDB } from 'aws-sdk';

import { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const dynamoDB = new DynamoDB.DocumentClient();

const updateTodo: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    const result = await dynamoDB.update({
      TableName: process.env.TODOS_TABLE,
      Key: {
        id: event.pathParameters.id,
      },
      UpdateExpression: 'SET #text = :text',
      ExpressionAttributeNames: {
        '#text': 'text',
      },
      ExpressionAttributeValues: {
        ':text': event.body.text,
      },
      ReturnValues: 'ALL_NEW',
    }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

export const main = middyfy(updateTodo);
