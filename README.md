# 🚀 RMS – Role Management System (Full Stack)

A complete Employee, Leave & Task Management System built using **Node.js + Vue 3 + MySQL + JWT** with role-based access control.

---

# 📌 Project Overview

RMS is a role-based management system designed for organizations to manage employees, leaves, and tasks efficiently.

The system supports **three stakeholders**:

| Role           | Access                                        |
| -------------- | --------------------------------------------- |
| **Superadmin** | Manage all users & roles/permissions          |
| **Admin**      | Manage employees & approve/reject leaves      |
| **Employee**   | Apply leaves (with attachment) & update tasks |

---

# 🧰 Tech Stack

## Backend

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT Authentication & Authorization
* Swagger API Documentation
* MVC Modular Architecture
* API Versioning (`/api/v1`)
* Audit Error Logging

## Frontend

* Vue 3 + Vite
* Vue Router
* Bootstrap 5
* Axios

---

# 📦 Features

## 🔐 Authentication & Authorization

* JWT Login
* Role-based middleware
* Secure API access

## 👨‍💼 Employees Management

* Create employee
* Update employee
* Delete employee
* View employees list

## 🌴 Leaves Management

* Apply leave with file attachment
* Approve / Reject leaves
* Employee can view own leaves

## 📋 Tasks Management

* Admin assigns tasks
* Employee updates task status
* Track task progress

## 📊 Dashboard

* Role-based dashboard stats

## 📄 API Documentation

* Swagger UI integrated

---

# 📁 Project Structure

```
RMS/
 ├── backend/
 │    ├── config/
 │    ├── controllers/
 │    ├── middleware/
 │    ├── models/
 │    ├── routes/
 │    ├── uploads/
 │    └── server.js
 │
 ├── frontend/
 │    ├── src/
 │    │    ├── api/
 │    │    ├── components/
 │    │    ├── layouts/
 │    │    ├── router/
 │    │    ├── services/
 │    │    ├── stores/
 │    │    └── views/
 │
 └── README.md
```

---

# ⚙️ BACKEND SETUP

## 1️⃣ Install Dependencies

```bash
cd backend
npm install
```

---

## 2️⃣ Create Environment File

Create file:

```
backend/.env
```

Paste:

```
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=rms_db

JWT_SECRET=supersecretkey
```

---

## 3️⃣ Create MySQL Database

Open MySQL and run:

```sql
CREATE DATABASE rms_db;
```

Sequelize will auto create tables on first run.

---

## 4️⃣ Run Backend Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 📄 Swagger API Documentation

Open in browser:

```
http://localhost:5000/api-docs
```

All backend APIs are documented here.

---

# 💻 FRONTEND SETUP

## 1️⃣ Install Dependencies

```bash
cd frontend
npm install
```

---

## 2️⃣ Run Vue Application

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

# 🔐 Default App Flow

1. Superadmin creates Admin
2. Admin creates Employees
3. Employee logs in
4. Employee applies leave & updates tasks
5. Admin approves/rejects leaves
6. Tasks tracked in dashboard

---

# 🔄 API Base URL

Frontend uses:

```
http://localhost:5000/api/v1
```

---

# 🧠 Architecture Highlights

* MVC modular backend
* RESTful APIs
* Role-based middleware
* Concurrent user support
* File upload support (Multer)
* Swagger API documentation
* Scalable project structure

---

# 🚀 Run Full Project

Start backend:

```bash
cd backend
npm run dev
```

Start frontend:

```bash
cd frontend
npm run dev
```

Open app:

```
http://localhost:5173
```

---

# 👨‍💻 Author

**Amit Rajput**