<<<<<<< HEAD
# serverless-todo-api

Serverless todo REST API with CRUD operations deployed to AWS using API Gateway, Lambda (Node.js + TypeScript), DynamoDB and Serverless Framework [typescript, aws, aws-api-gateway, aws-lambda, aws-sdk, aws-dynamodb, serverless-framework]

# Project

The project is a serverless Todo application built with AWS Lambda, API Gateway, and DynamoDB. It allows users to create, read, update, and delete Todo items using RESTful API endpoints. The serverless architecture enables the application to scale easily and requires minimal infrastructure management.

# Technologies

This project uses a number of AWS services and technologies to create a serverless TODO application. The key services and technologies used are:

- **AWS API Gateway**: for creating and managing RESTful APIs that trigger the application code
- **AWS Lambda**: for serverless compute that runs the application code in response to events
- **AWS DynamoDB**: for a NoSQL database to store and retrieve TODO items
- **AWS IAM**: for managing permissions and access control to AWS resources
- **AWS SDK for Node.js**: for accessing AWS services from within the Node.js application code
- **Serverless Framework**: for defining and deploying the serverless application infrastructure as code
- **TypeScript**: for writing type-safe and structured code in a statically typed language

# Skills

The skills required and learnt in this project include:

1. **AWS services**: Familiarity with various AWS services such as API Gateway, Lambda, DynamoDB, IAM, CloudFormation, and CloudWatch.

2. **Serverless Framework**: Knowledge of how to use Serverless Framework for building and deploying serverless applications.

3. **TypeScript**: Understanding of TypeScript, a typed superset of JavaScript, and how to use it to write more reliable code.

4. **RESTful API design**: Ability to design and implement a RESTful API using HTTP methods such as GET, POST, PUT, and DELETE.

5. **Data modeling and persistence**: Understanding of how to model data and persist it using a NoSQL database such as DynamoDB.

6. **Error handling and debugging**: Knowledge of how to handle errors and debug serverless applications.

7. **Testing**: Ability to write automated tests for serverless applications using tools such as Jest.

8. **Git**: Familiarity with version control using Git and how to collaborate with others using tools such as GitHub.

9. **Communication**: Ability to effectively communicate project status, issues, and progress with team members and stakeholders.

# Testing

Once the project is deployed, you can test it using an API testing tool like `Postman` or by sending requests directly from the command line using `curl`.

To test the endpoints, you can make requests to the API Gateway endpoint that was generated when the service was deployed. You can find this endpoint in the output of the `npx sls deploy` command, or by running `npx sls info`.

# Notes

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS
- Run `npx sls remove` to remove this stack from AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS
- Run `yarn sls remove` to remove this stack from AWS

## Test your service

### Locally

In order to test the hello function locally, run the following command:

- `npx sls invoke local -f hello --path src/functions/hello/mock.json` if you're using NPM
- `yarn sls invoke local -f hello --path src/functions/hello/mock.json` if you're using Yarn

Check the [sls invoke local command documentation](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) for more information.

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location --request POST 'https://myApiEndpoint/dev/hello' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Frederic"
}'
```

## Template features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
├── src
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── hello
│   │   │   ├── handler.ts      # `Hello` lambda source code
│   │   │   ├── index.ts        # `Hello` lambda Serverless configuration
│   │   │   ├── mock.json       # `Hello` lambda input parameter, if any, for local invocation
│   │   │   └── schema.ts       # `Hello` lambda input event JSON-Schema
│   │   │
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
└── tsconfig.paths.json         # Typescript paths
```

### 3rd party libraries

- [json-schema-to-ts](https://github.com/ThomasAribart/json-schema-to-ts) - uses JSON-Schema definitions used by API Gateway for HTTP request validation to statically generate TypeScript types in your lambda's handler code base
- [middy](https://github.com/middyjs/middy) - middleware engine for Node.Js lambda. This template uses [http-json-body-parser](https://github.com/middyjs/middy/tree/master/packages/http-json-body-parser) to convert API Gateway `event.body` property, originally passed as a stringified JSON, to its corresponding parsed object
- [@serverless/typescript](https://github.com/serverless/typescript) - provides up-to-date TypeScript definitions for your `serverless.ts` service file

### Advanced usage

Any tsconfig.json can be used, but if you do, set the environment variable `TS_NODE_CONFIG` for building the application, eg `TS_NODE_CONFIG=./tsconfig.app.json npx serverless webpack`
=======
# To-do-Serverless-App-
>>>>>>> e809ba370811b961f838e63a7ea932c689237cea
