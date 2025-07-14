import type { APIGatewayProxyEvent } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { middyfy } from '@libs/lambda';

const dynamoDB = new DynamoDB.DocumentClient();

const getTodo = async (event: APIGatewayProxyEvent) => {
  try {
    const result = await dynamoDB.get({
      TableName: process.env.TODOS_TABLE,
      Key: {
        id: event.pathParameters.id,
      },
    }).promise();
    if (result.Item) {
      return {
        statusCode: 200,
        body: JSON.stringify(result.Item),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Todo not found' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

export const main = middyfy(getTodo);
