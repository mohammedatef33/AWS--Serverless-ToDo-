# AWS Serverless ToDo App |  🛠️ Serverless Architecture

> ✅ AWS Solution Architect Associate Project – Manara Cohort  
> 🧑‍💻 Developed by: Mohammed Atef  
> 🗓️ Submitted: July 2025

---

## 📚 Table of Contents

- [Solution Overview](#solution-overview)
- [Architecture Diagram](#architecture-diagram)
- [AWS Services Used](#aws-services-used)
- [Customizing the Solution](#customizing-the-solution)
- [Operational Metrics](#operational-metrics)
- [External Contributors](#external-contributors)
- [License](#license)

---

## 📌 Solution Overview

This project demonstrates a serverless RESTful To-Do application using AWS cloud services. Users can add, retrieve, update, and delete tasks in a simple to-do list interface.

The application follows best practices for event-driven architecture using AWS Lambda, API Gateway, and DynamoDB — ensuring scalability, security, and cost-effectiveness.

---

## 🧱 Architecture Diagram

![Architecture Diagram](AWS%20Architecture%20Diagram.png)

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
| **AWS Lambda**         | Executes logic without server management. |
| **Amazon DynamoDB**    | Stores to-do list items.                  |
| **Amazon CloudWatch**  | Logs and monitors system activity.        |
| **AWS IAM**            | Manages secure access and permissions.    |
     |

---

## ⚙️ Customizing the Solution

This section helps developers deploy or modify the project in their own AWS environment.

### 🔧 Prerequisites

- AWS CLI configured with your account:  
  👉 `aws configure`
- Node.js v18 or later
- Serverless Framework installed globally:

```bash
npm install -g serverless
```

### 📥 1. Clone the Repository

```bash
git clone https://github.com/mohammedatef33/AWS--Serverless-ToDo-.git
cd AWS--Serverless-ToDo-
```

### 📦 2. Install Dependencies

```bash
npm install
```

### 🚀 3. Deploy the App

Make sure you're authenticated and then run:

```bash
serverless deploy
```

> This will deploy all Lambda functions, the API Gateway, and the DynamoDB table.

Once deployed, note the API Gateway endpoint returned in the terminal.

---

## 📊 Operational Metrics

The application uses **Amazon CloudWatch** to monitor and log:

- Function executions
- Errors and throttles
- API Gateway access logs

Logs are useful for debugging and tracking performance.

---

## 🌍 External Contributors

This project is customized and maintained solely by Mohammed Atef based on an open-source template.

---

## 📄 License

This project is licensed under the [Apache 2.0 License](LICENSE).
