# AWS Serverless ToDo App |  🛠️ Serverless Architecture

> ✅ AWS Solution Architect Associate Project – Manara Cohort  
> 🧑‍💻 Developed by: Mohammed Atef  
> 🗓️ Submitted: July 2025

---

## 📚 Table of Contents

- [Solution Overview](#solution-overview)
- [Architecture Diagram](#architecture-diagram)
- [AWS Services Used](#aws-services-used)
- [API Endpoints](#api-endpoints)
- [DynamoDB Schema](#dynamodb-schema)
- [Learning Outcomes](#learning-outcomes)
- [Customizing the Solution](#customizing-the-solution)
  - [Prerequisites](#prerequisites)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Deploy the App](#3-deploy-the-app)
- [Testing with Postman](#testing-with-postman)
- [Operational Metrics](#operational-metrics)
- [External Contributors](#external-contributors)
- [License](#license)

---

## 📌 Solution Overview

This project demonstrates a serverless RESTful To-Do application using AWS cloud services. Users can add, retrieve, update, and delete tasks in a simple to-do list interface.

The application follows best practices for event-driven architecture using AWS Lambda, API Gateway, and DynamoDB — ensuring scalability, security, and cost-effectiveness.

---

## 🧱 Architecture Diagram

![Architecture Diagram](./AWS%20Architecture%20Diagram.png)

### Architecture Summary

- **API Gateway** receives HTTP requests.
- **Lambda Functions** handle each request (Create, Read, Update, Delete).
- **DynamoDB** stores tasks in a NoSQL table.
- **CloudWatch** logs the function executions.
- **IAM** secures access between services.

---

## 🧰 AWS Services Used

| Service             | Purpose                                      |
|--------------------|----------------------------------------------|
| **Amazon API Gateway** | Exposes REST endpoints to users.          |
| **AWS Lambda**        | Executes logic without server management. |
| **Amazon DynamoDB**   | Stores to-do list items.                  |
| **Amazon CloudWatch** | Logs and monitors system activity.        |
| **AWS IAM**           | Manages secure access and permissions.    |

---

## 📡 API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | /todos           | Create a new task         |
| GET    | /todos           | Retrieve all tasks        |
| PUT    | /todos/{id}      | Update task by ID         |
| DELETE | /todos/{id}      | Delete task by ID         |

🔄 All endpoints are routed via API Gateway and handled by individual Lambda functions.

---

## 📦 DynamoDB Schema

| Field      | Type    | Description                      |
|------------|---------|----------------------------------|
| `id`       | String  | Primary key (Partition key)       |
| `title`    | String  | Task description                  |
| `status`   | Boolean | Task completion status (true/false) |

---

## 🎯 Learning Outcomes

- Designed a serverless RESTful API architecture.
- Implemented Lambda functions for CRUD operations.
- Used DynamoDB with secure IAM role access.
- Deployed using Serverless Framework.
- Documented architecture with diagram and schema.
- Tested endpoints via Postman.

---

## ⚙️ Customizing the Solution

This section helps developers deploy or modify the project in their own AWS environment.

### 🔧 Prerequisites

- AWS CLI configured with your account:  
  👉 `aws configure`
- Node.js v18+  
- Serverless Framework installed globally:

```bash
npm install -g serverless
```

### 1. Clone the Repository

```bash
git clone https://github.com/mohammedatef33/AWS--Serverless-ToDo-.git
cd AWS--Serverless-ToDo-
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Deploy the App

```bash
serverless deploy
```


---

## 📊 Operational Metrics

- CloudWatch monitors all Lambda executions.
- Logs for each API call can be viewed in the AWS CloudWatch console.

---

## 🤝 External Contributors

- Thanks to the open-source community and original contributors for inspiration and base structure.

---

## 📜 License

This project is licensed under the MIT License.template.

---

## 📄 License

This project is licensed under the [Apache 2.0 License](LICENSE).
