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
  - [Prerequisites](#prerequisites)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)a
  - [3. Deploy the App](#3-deploy-the-app)
- [Operational Metrics](#operational-metrics)
- [External Contributors](#external-contributors)
- [License](#license)

---

## 📌 Solution Overview

This project demonstrates a serverless RESTful To-Do application using AWS cloud services. Users can add, retrieve, update, and delete tasks in a simple to-do list interface.

The application follows best practices for event-driven architecture using AWS Lambda, API Gateway, and DynamoDB — ensuring scalability, security, and cost-effectiveness.

---

## 🧱 Architecture Diagram

AWS Architecture Diagram.png

![Architecture Diagram](./architecture.png)

### Architecture Summary

- **API Gateway** receives HTTP requests.
- **Lambda Functions** handle each request (Create, Read, Update, Delete).
- **DynamoDB** stores tasks in a NoSQL table.
- **CloudWatch** logs the function executions.
- **IAM** secures access between services.

---

## 🧰 AWS Services Used

| Service         | Purpose                                      |
|----------------|----------------------------------------------|
| **Amazon API Gateway** | Exposes REST endpoints to users.          |
| **AWS Lambda**        | Executes logic without server management. |
| **Amazon DynamoDB**   | Stores to-do list items.                  |
| **Amazon CloudWatch** | Logs and monitors system activity.        |
| **AWS IAM**           | Manages secure access and permissions.    |

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
