import { DynamoDB } from 'aws-sdk';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const dynamoDB = new DynamoDB.DocumentClient();

const createTodo: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    const todo = {
      id: `${Date.now()}`,
      text: event.body.text,
    };
    await dynamoDB
      .put({
        TableName: process.env.TODOS_TABLE,
        Item: todo,
      })
      .promise();
    return {
      statusCode: 201,
      body: JSON.stringify(todo),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

export const main = middyfy(createTodo);
