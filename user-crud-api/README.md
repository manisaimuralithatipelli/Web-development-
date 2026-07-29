<div align="center">

# 🚀 User CRUD API

### A Production-Ready RESTful Backend for User Management

**Built with Node.js, Express.js, MongoDB Atlas & Mongoose**

<br/>

![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=2E9EF7&center=true&vCenter=true&width=600&lines=RESTful+CRUD+API+for+Users;Built+with+Node.js+%2B+Express.js;MongoDB+Atlas+%2B+Mongoose+ODM;Deployed+on+Render+%E2%98%81%EF%B8%8F)

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)

<br/>

[![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square)](#-contributing-guide)
[![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-red.svg?style=flat-square)](#)

<br/>

**[🔴 Live Demo](https://user-crud-api-xzes.onrender.com/users)** • **[📂 Source Code](https://github.com/manisaimuralithatipelli/Web-development-/tree/main/user-crud-api)** • **[📖 API Docs](#-api-documentation)** • **[🐛 Report Bug](#)** • **[✨ Request Feature](#)**

</div>

---

## 📌 Introduction

**User CRUD API** is a clean, production-grade RESTful backend service that demonstrates how to build a fully functional **Create, Read, Update, and Delete (CRUD)** system for managing user data. It is built using **Node.js** and **Express.js** on the server side, with **MongoDB Atlas** as a cloud-hosted database and **Mongoose** as the Object Data Modeling (ODM) layer that connects the two.

This project isn't just a toy example — it follows **real-world backend architecture patterns** used in professional software teams: separated routing layers, schema-based data models, environment-based configuration, and live cloud deployment. Whether you're a student learning backend development, a recruiter evaluating engineering fundamentals, or a developer looking for a clean CRUD reference implementation, this README will walk you through every single piece of the system in plain, beginner-friendly language.

> 💡 **Tip:** If you're new to backend development, don't skip the [Architecture](#-application-architecture) and [Why This Project](#-why-this-project) sections — they explain *why* each technology was chosen, not just *how* to use it.

---

## 📚 Table of Contents

1. [About the Project](#-about-the-project)
2. [Why This Project](#-why-this-project)
3. [Features](#-features)
4. [Tech Stack](#-tech-stack)
5. [Application Architecture](#-application-architecture)
6. [Folder Structure](#-folder-structure)
7. [Request Flow Diagram](#-request-flow-diagram)
8. [Installation Guide](#-installation-guide)
9. [Environment Variables](#-environment-variables)
10. [Local Development Setup](#-local-development-setup)
11. [API Documentation](#-api-documentation)
12. [Error Handling](#-error-handling)
13. [HTTP Status Codes](#-http-status-codes-used)
14. [Deployment Guide](#-deployment-guide)
15. [Live Demo](#-live-demo)
16. [Testing with Postman](#-testing-using-postman)
17. [Security Notes](#-security-notes)
18. [Performance Notes](#-performance-notes)
19. [Best Practices Followed](#-best-practices-followed)
20. [Screenshots](#-screenshots)
21. [Contributing Guide](#-contributing-guide)
22. [Author](#-author)
23. [Contact](#-contact)
24. [GitHub Stats](#-github-stats)
25. [Star This Repository](#-star-this-repository)

---

## 📖 About the Project

The **User CRUD API** exposes a set of HTTP endpoints that allow any client — a browser, a mobile app, Postman, or a frontend framework like React — to manage a collection of "user" records stored in the cloud. Each user record typically contains fields like a name, email, or age (defined by the Mongoose schema), and the API allows clients to:

- ➕ **Create** a new user
- 📋 **Read** all users, or a single user by ID
- ✏️ **Update** an existing user's details
- ❌ **Delete** a user permanently

All of this happens over standard **HTTP** using **JSON** as the data format, following **REST (Representational State Transfer)** conventions — the same architectural style used by companies like GitHub, Stripe, Twitter, and virtually every modern web API.

> ℹ️ **Note:** REST is not a framework or a library — it's a set of design conventions. This project follows those conventions closely: resources (`/users`) are represented as nouns, and actions are represented using HTTP verbs (`GET`, `POST`, `PATCH`, `DELETE`).

---

## 🤔 Why This Project

This project was built to **learn and demonstrate professional backend development practices** — not just to make an API "work," but to make it work the way real-world production APIs are built. Specifically, it demonstrates:

| Goal | How This Project Achieves It |
|---|---|
| Clean architecture | Routes, models, and configuration are fully separated |
| Cloud-native thinking | Uses MongoDB Atlas instead of a local database |
| Secure configuration | Uses `.env` + `dotenv` instead of hardcoded secrets |
| Real deployment experience | Live on Render, not just running on `localhost` |
| Industry-standard REST design | Predictable, resource-based endpoint naming |
| Scalability mindset | Folder structure that scales as the app grows |

---

## ✨ Features

- ✅ Full CRUD support (Create, Read, Update, Delete)
- ✅ RESTful endpoint design
- ✅ MongoDB Atlas cloud database integration
- ✅ Mongoose schema-based data modeling
- ✅ Modular Express Router setup
- ✅ Environment-based configuration with `dotenv`
- ✅ Clean JSON request/response format
- ✅ Meaningful HTTP status codes for every scenario
- ✅ Production deployment on Render
- ✅ Scalable, professional folder structure
- ✅ Beginner-friendly, well-documented codebase

---

## 🛠 Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|---|---|---|
| 🟢 Runtime | **Node.js** | Runs JavaScript on the server |
| ⚡ Framework | **Express.js** | Handles routing, requests, and responses |
| 🧭 Routing | **Express Router** | Organizes endpoints into modular files |
| 🍃 ODM | **Mongoose** | Maps JavaScript objects to MongoDB documents |
| 🍃 Database | **MongoDB Atlas** | Cloud-hosted NoSQL database |
| ☁️ Hosting | **Render** | Deploys and hosts the live API |
| 🔐 Config | **dotenv** | Loads secrets from `.env` safely |
| 📦 Package Manager | **npm** | Installs and manages dependencies |
| 🔧 Version Control | **Git & GitHub** | Tracks changes and hosts source code |

</div>

### Why each technology was chosen

- **Node.js** — A JavaScript runtime that lets us write server-side code using the same language as the frontend, with excellent performance for I/O-heavy operations like handling many simultaneous API requests.
- **Express.js** — A minimal, unopinionated web framework that sits on top of Node.js and makes it dramatically simpler to define routes, parse requests, and send responses, instead of writing raw HTTP-handling code from scratch.
- **Express Router** is used because it lets us **split routes into separate files** (like `routes/user.js`) instead of cramming every endpoint into one giant `app.js`. This keeps the codebase organized and makes it easy to add new resources (like `/products` or `/orders`) later without touching existing code.
- **Mongoose** is used because MongoDB by itself is "schema-less" — it will accept almost any data shape. Mongoose adds a **schema layer on top**, so we can define exactly what fields a `User` should have, their types, and validation rules, catching bad data before it ever reaches the database.
- **MongoDB Atlas** is used instead of a local MongoDB installation because it's a **fully managed cloud database**. That means no manual server maintenance, automatic backups, built-in security, and — most importantly — the database is reachable from anywhere, which is essential once the app is deployed live on the internet.
- **dotenv** is used because sensitive values like database connection strings should **never be hardcoded** into source code (especially code pushed to a public GitHub repo). `dotenv` loads these values from a local `.env` file into `process.env` at runtime, keeping secrets out of version control.
- **Render** is used as the hosting platform because it offers **free, simple, Git-based deployment** for Node.js APIs — every push to the connected GitHub branch can automatically redeploy the live application, closely mirroring real-world CI/CD workflows.

---

## 🏗 Application Architecture

```mermaid
flowchart TD
    A[🌐 Browser / Client] --> B[🚀 Express Server]
    B --> C[🧩 Express Middleware]
    C --> D[🧭 Express Router]
    D --> E[📄 Route Handler]
    E --> F[🍃 Mongoose]
    F --> G[(☁️ MongoDB Atlas)]
    G --> F
    F --> E
    E --> H[📦 JSON Response]
    H --> A
```

**In plain English:**

1. A client (browser, Postman, frontend app) sends an HTTP request to the server.
2. **Express Server** receives the raw request.
3. **Middleware** (like `express.json()`) processes the request — for example, parsing incoming JSON into a usable JavaScript object.
4. **Express Router** looks at the URL and HTTP method to decide *which* piece of code should handle this request.
5. The matched **Route Handler** runs the actual business logic (e.g., "create a new user").
6. **Mongoose** translates that logic into a database operation and talks to MongoDB.
7. **MongoDB Atlas** stores or retrieves the actual data in the cloud.
8. The result travels back up the chain and is sent to the client as a **JSON response**.

---

## 📂 Folder Structure

```
user-crud-api/
│
├── app.js                 # Entry point — starts the Express server & connects to MongoDB
├── package.json            # Project metadata & dependency list
├── package-lock.json       # Exact locked versions of installed dependencies
├── .env                    # Environment variables (MONGO_URI) — never committed to Git
│
├── models/
│   └── user.js              # Mongoose schema — defines the shape of a "User" document
│
└── routes/
    └── user.js              # Express Router — defines all /users endpoints
```

### What each part does

| File / Folder | Purpose |
|---|---|
| `app.js` | Boots up the Express app, connects to MongoDB Atlas, and mounts the routes |
| `models/user.js` | Defines the **Mongoose Schema** — the "blueprint" for what a user record looks like |
| `routes/user.js` | Contains the actual **CRUD logic** for each endpoint (`POST`, `GET`, `PATCH`, `DELETE`) |
| `.env` | Stores the `MONGO_URI` connection string securely, outside of source code |
| `package.json` | Lists dependencies (`express`, `mongoose`, `dotenv`) and npm scripts |

> 📝 **Note:** Separating `models/` and `routes/` is a foundational backend pattern. As the app grows, you could add `controllers/`, `middleware/`, or `config/` folders without restructuring what already exists.

---

## 🔄 Request Flow Diagram

```mermaid
sequenceDiagram
    participant Client as 🌐 Client
    participant Express as 🚀 Express Server
    participant Router as 🧭 Router
    participant Mongoose as 🍃 Mongoose
    participant Atlas as ☁️ MongoDB Atlas

    Client->>Express: HTTP Request (e.g. POST /users)
    Express->>Router: Route matched
    Router->>Mongoose: Create/Find/Update/Delete operation
    Mongoose->>Atlas: Query executed on cloud DB
    Atlas-->>Mongoose: Returns document(s)
    Mongoose-->>Router: Data returned to handler
    Router-->>Express: JSON response prepared
    Express-->>Client: HTTP Response (JSON + status code)
```

This diagram shows exactly how a single request — for example, creating a new user — travels through every layer of the application and back, end to end.

---

## ⚙️ Installation Guide

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/manisaimuralithatipelli/Web-development-.git
cd Web-development-/user-crud-api
```

### Install Dependencies

```bash
npm install
```

This reads `package.json` and installs `express`, `mongoose`, and `dotenv` into a local `node_modules/` folder.

---

## 🔑 Environment Variables

Create a `.env` file in the root of the `user-crud-api` folder:

```env
MONGO_URI=your_mongodb_atlas_connection_string_here
```

| Variable | Description |
|---|---|
| `MONGO_URI` | The full MongoDB Atlas connection string, including username, password, and database name |

> 🚨 **Warning:** Never commit your `.env` file to GitHub. Add it to `.gitignore` immediately. Treat your `MONGO_URI` like a password — anyone with it has full access to your database.

---

## 💻 Local Development Setup

1. Complete the [Installation Guide](#-installation-guide) above.
2. Set up your `.env` file with a valid `MONGO_URI`.
3. Start the server:

```bash
node app.js
```

Or, if a dev script is configured with a tool like `nodemon`:

```bash
npm run dev
```

4. The server should now be running locally (commonly at `http://localhost:3000`).
5. Test it by visiting `http://localhost:3000/users` in your browser or Postman.

> 💡 **Tip:** Use [nodemon](https://www.npmjs.com/package/nodemon) during development — it automatically restarts the server whenever you save a file, saving you from manually restarting `node app.js` every time.

---

## 📡 API Documentation

**Base URL (Live):** `https://user-crud-api-xzes.onrender.com`
**Base URL (Local):** `http://localhost:3000`

### Endpoint Table

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/users` | Create a new user |
| `GET` | `/users` | Retrieve all users |
| `GET` | `/users/:id` | Retrieve a single user by ID |
| `PATCH` | `/users/:id` | Update an existing user by ID |
| `DELETE` | `/users/:id` | Delete a user by ID |

---

### ➕ Create User

**`POST /users`**

Creates a new user document in the database.

**Request Body:**

```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "age": 28
}
```

**cURL Example:**

```bash
curl -X POST https://user-crud-api-xzes.onrender.com/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "email": "jane.doe@example.com", "age": 28}'
```

**Success Response — `201 Created`:**

```json
{
  "_id": "6512f1a2b3c4d5e6f7890abc",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "age": 28,
  "__v": 0
}
```

---

### 📋 Read All Users

**`GET /users`**

Retrieves every user currently stored in the database.

**cURL Example:**

```bash
curl https://user-crud-api-xzes.onrender.com/users
```

**Success Response — `200 OK`:**

```json
[
  {
    "_id": "6512f1a2b3c4d5e6f7890abc",
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "age": 28
  },
  {
    "_id": "6512f1a2b3c4d5e6f7890def",
    "name": "John Smith",
    "email": "john.smith@example.com",
    "age": 34
  }
]
```

---

### 🔍 Read Single User

**`GET /users/:id`**

Retrieves a single user by their unique MongoDB `_id`.

**cURL Example:**

```bash
curl https://user-crud-api-xzes.onrender.com/users/6512f1a2b3c4d5e6f7890abc
```

**Success Response — `200 OK`:**

```json
{
  "_id": "6512f1a2b3c4d5e6f7890abc",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "age": 28
}
```

**Error Response — `404 Not Found`:**

```json
{
  "message": "User not found"
}
```

---

### ✏️ Update User

**`PATCH /users/:id`**

Updates one or more fields of an existing user. Only the fields included in the request body are changed.

**Request Body:**

```json
{
  "age": 29
}
```

**cURL Example:**

```bash
curl -X PATCH https://user-crud-api-xzes.onrender.com/users/6512f1a2b3c4d5e6f7890abc \
  -H "Content-Type: application/json" \
  -d '{"age": 29}'
```

**Success Response — `200 OK`:**

```json
{
  "_id": "6512f1a2b3c4d5e6f7890abc",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "age": 29
}
```

---

### ❌ Delete User

**`DELETE /users/:id`**

Permanently removes a user from the database.

**cURL Example:**

```bash
curl -X DELETE https://user-crud-api-xzes.onrender.com/users/6512f1a2b3c4d5e6f7890abc
```

**Success Response — `200 OK`:**

```json
{
  "message": "User deleted successfully"
}
```

---

## 🛑 Error Handling

The API returns structured JSON error messages so clients can handle failures gracefully instead of receiving raw stack traces.

```json
{
  "message": "Descriptive error message here"
}
```

Common error scenarios handled:

| Scenario | Status Code | Example Message |
|---|---|---|
| Invalid or missing `id` | `404` | `"User not found"` |
| Malformed request body | `500` | `"Internal server error"` |
| Database connection failure | `500` | `"Something went wrong"` |

> ℹ️ **Note:** In a production-grade upgrade of this project, you'd add input validation (e.g., with `Joi` or `express-validator`) to catch bad requests with a `400 Bad Request` *before* they ever reach the database.

---

## 📟 HTTP Status Codes Used

| Code | Meaning | When It's Used |
|---|---|---|
| `200` | OK | Successful `GET`, `PATCH`, or `DELETE` |
| `201` | Created | A new user was successfully created via `POST` |
| `404` | Not Found | Requested user `id` does not exist |
| `500` | Internal Server Error | An unexpected server/database error occurred |

---

## 🚀 Deployment Guide

This API is deployed on **[Render](https://render.com/)**, a cloud platform for hosting web services directly from a GitHub repository.

### Steps to deploy your own copy:

1. Push your project to a GitHub repository.
2. Create a free account at [render.com](https://render.com/).
3. Click **New → Web Service** and connect your GitHub repo.
4. Set the **Build Command**: `npm install`
5. Set the **Start Command**: `node app.js`
6. Add your environment variable `MONGO_URI` in Render's dashboard under **Environment**.
7. Click **Deploy** — Render will build and host your API automatically.
8. Every future `git push` to your connected branch triggers an automatic redeploy.

> 💡 **Tip:** Render's free tier may "spin down" after periods of inactivity, so the first request after idle time can take a few extra seconds to respond — this is expected behavior, not a bug.

---

## 🔴 Live Demo

The API is live and publicly accessible here:

🔗 **[https://user-crud-api-xzes.onrender.com/users](https://user-crud-api-xzes.onrender.com/users)**

Visit the link above or use the [cURL examples](#-api-documentation) to interact with the live database directly.

---

## 🧪 Testing Using Postman

1. Open [Postman](https://www.postman.com/downloads/).
2. Create a new request.
3. Set the method (`GET`, `POST`, `PATCH`, `DELETE`) and URL, e.g. `https://user-crud-api-xzes.onrender.com/users`.
4. For `POST`/`PATCH` requests, go to the **Body** tab → select **raw** → choose **JSON** → enter your payload.
5. Click **Send** and inspect the response body and status code.

> 📝 **Note:** You can also import all endpoints into a Postman Collection for one-click testing — this is a great addition for future contributors.

---

## 🔒 Security Notes

- 🔐 `.env` file is excluded from version control via `.gitignore` to protect the `MONGO_URI` secret.
- 🌐 MongoDB Atlas restricts access via IP allow-listing and authenticated connection strings.
- ⚠️ This project does **not** currently implement authentication/authorization (e.g., JWT) — all endpoints are publicly accessible. This is intentional for learning purposes but should be added before handling real user data.
- ⚠️ Input validation is minimal; adding a validation library is recommended for production use.

---

## ⚡ Performance Notes

- Mongoose connection pooling is used by default, allowing efficient reuse of database connections across requests.
- MongoDB Atlas's cloud infrastructure provides built-in redundancy and automatic scaling of storage.
- For high-traffic scenarios, consider adding indexes on frequently queried fields (like `email`) to speed up lookups.

---

## ✅ Best Practices Followed

- ✔️ Separation of concerns (routes vs. models vs. server entry point)
- ✔️ Environment-based configuration (no hardcoded secrets)
- ✔️ RESTful, resource-based endpoint naming
- ✔️ Consistent JSON response format
- ✔️ Meaningful HTTP status codes for every outcome
- ✔️ Cloud-first database design
- ✔️ Git-based deployment workflow

---

## 📸 Screenshots

<div align="center">

**`GET /users` — All Users**

<img src="./screenshots/get-all-users.jpg" alt="GET all users" width="600"/>

<br/><br/>

**`POST /users` — Create User**

<img src="./screenshots/post-request.jpg" alt="POST create user" width="600"/>

<br/><br/>

**`PATCH /users/:id` — Update User**

<img src="./screenshots/patch-request.jpg" alt="PATCH update user" width="600"/>

</div>

> 📝 **Note:** These screenshots were captured using `curl` from a mobile terminal, showing real requests hitting the live deployed API on Render.

---

## 🤝 Contributing Guide

Contributions are welcome and appreciated! To contribute:

1. **Fork** this repository
2. **Clone** your fork: `git clone https://github.com/your-username/Web-development-.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes and commit: `git commit -m "Add: your feature description"`
5. Push to your fork: `git push origin feature/your-feature-name`
6. Open a **Pull Request** describing your changes

> 💡 **Tip:** For major changes, please open an issue first to discuss what you'd like to change.

---

## 👤 Author

**Mani Sai Murali Thatipelli**

- GitHub: [@manisaimuralithatipelli](https://github.com/manisaimuralithatipelli)
- Email: [manisaimuralithatipelli1@gmail.com](mailto:manisaimuralithatipelli1@gmail.com)
- Repository: [Web-development-](https://github.com/manisaimuralithatipelli/Web-development-/tree/main/user-crud-api)

---

## 📬 Contact

Have questions, feedback, or found a bug? Reach out through:

- 📧 **Email:** [manisaimuralithatipelli1@gmail.com](mailto:manisaimuralithatipelli1@gmail.com)
- 🐙 **GitHub Issues:** [Open an Issue](https://github.com/manisaimuralithatipelli/Web-development-/issues)
- 🔀 **Pull Requests:** [Contribute Here](https://github.com/manisaimuralithatipelli/Web-development-/pulls)

---

## 📊 GitHub Stats

<div align="center">

![GitHub Repo stars](https://img.shields.io/github/stars/manisaimuralithatipelli/Web-development-?style=social)
![GitHub forks](https://img.shields.io/github/forks/manisaimuralithatipelli/Web-development-?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/manisaimuralithatipelli/Web-development-?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/manisaimuralithatipelli/Web-development-?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/manisaimuralithatipelli/Web-development-?style=flat-square)

</div>

---

## 🌟 Star This Repository

<div align="center">

If this project helped you learn something or inspired your own backend build, please consider giving it a ⭐!

**[⭐ Star this repo on GitHub](https://github.com/manisaimuralithatipelli/Web-development-)**

</div>

---

<div align="center">

### 🛠 Built with Node.js, Express.js & MongoDB Atlas

**[Mani Sai Murali Thatipelli](https://github.com/manisaimuralithatipelli)**

<sub>© 2026 User CRUD API</sub>

</div>
