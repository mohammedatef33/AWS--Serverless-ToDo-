import type { APIGatewayProxyEvent } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { middyfy } from '@libs/lambda';

const dynamoDB = new DynamoDB.DocumentClient();

const deleteTodo = async (event: APIGatewayProxyEvent) => {
  try {
    await dynamoDB.delete({
      TableName: process.env.TODOS_TABLE,
      Key: {
        id: event.pathParameters.id,
      },
    }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Todo item deleted: ${event.pathParameters.id}` }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

export const main = middyfy(deleteTodo);
