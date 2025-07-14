import { DynamoDB } from 'aws-sdk';

import { middyfy } from '@libs/lambda';

const dynamoDB = new DynamoDB.DocumentClient();

const listTodos = async () => {
  try {
    const result = await dynamoDB
      .scan({
        TableName: process.env.TODOS_TABLE,
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

export const main = middyfy(listTodos);
