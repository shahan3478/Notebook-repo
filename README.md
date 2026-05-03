
# iNotebook - Secure Cloud Notebook

A full-stack MERN (MongoDB, Express, React, Node.js) application designed for users to securely create, store, and manage personal notes in the cloud. The application features a robust authentication system, ensuring that every user can only access and modify their own data.

## 🚀 Key Features

*   **User Authentication**: Includes secure Signup and Login functionality with encrypted password handling.
*   **Note Management (CRUD)**: Users can create, view, update, and delete notes through an intuitive interface.
*   **Global State Management**: Utilizes the React Context API (`NoteState.js`) to manage application-wide data without prop-drilling.
*   **Secure API Access**: Implements a `Fetchuser` middleware on the backend to verify JWT tokens before allowing access to private routes.
*   **Responsive UI**: Built with React components like `Navbar`, `Alert`, and `Noteitem` for a seamless user experience.

## 🛠️ Tech Stack

### **Frontend**
*   **Framework**: React.js
*   **State Management**: Context API
*   **Styling**: Custom CSS and modular components

### **Backend**
*   **Runtime**: Node.js & Express.js
*   **Database**: MongoDB (via Mongoose models for `User` and `Note`)
*   **Security**: JSON Web Tokens (JWT) for session management

## 📂 Project Structure

The **Notebook-repo-main.zip** project is divided into two primary directories:

### **Backend**
Contains the server-side logic, including database configuration (`db.js`), API routes (`auth.js`, `notes.js`), and data models.

### **Frontend (src)**
Contains the React application, featuring a dedicated `Components/` folder for UI elements and a `Context/` folder for state management logic.

## ⚙️ Setup and Installation

### **1. Backend Setup**
1. Navigate to the `Backend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   nodemon index.js
   ```

### **2. Frontend Setup**
1. Navigate to the root directory.
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

---

*This project serves as a comprehensive example of a secure, production-ready full-stack application.*


```
