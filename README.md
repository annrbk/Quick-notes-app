# Quick Notes Web Application (React/TS)

Quick Notes is a web application built with **React**, **TypeScript**, **Redux Toolkit**, **Express**, and **MongoDB** that allows users to create, edit, delete, and store their notes in a interface. The backend is implemented using **Express.js** and serves a **REST API** for managing notes.

## Features
- Create, edit, delete, and view notes.
- Notes are stored in a **MongoDB** database.
- The frontend is built using **React** and **Redux Toolkit** to manage application state.
- **Express.js** serves a **REST API** to interact with the database (saving and retrieving notes).

## Stack
- **Frontend**: 
  - React
  - TypeScript
  - Redux Toolkit
  - Material-UI
  - RTK Query
- **Backend**: 
  - Express.js
  - MongoDB
  - REST API

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/annrbk/quick-notes-app.git
```
### 2. Install Dependencies
Navigate to the frontend and backend directories and install the necessary dependencies.

```bash
npm install
```

### 3. Start the Frontend
Now, go to the client directory and run the following command to start the frontend:

```bash
npm run dev
```
### 4. Start the Backend Server
In the backend directory, run the following command to start the server:

```bash
npm start
```

This will run the React application on http://localhost:5173
