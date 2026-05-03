
# iNotebook - Secure Cloud Notebook

A full-stack MERN (MongoDB, Express, React, Node.js) application designed for users to securely create, store, and manage personal notes in the cloud[cite: 3]. The application features a robust authentication system, ensuring that every user can only access and modify their own data[cite: 3].

## 🚀 Key Features

*   **User Authentication**: Includes secure Signup and Login functionality with encrypted password handling[cite: 3].
*   **Note Management (CRUD)**: Users can create, view, update, and delete notes through an intuitive interface[cite: 3].
*   **Global State Management**: Utilizes the React Context API (`NoteState.js`) to manage application-wide data without prop-drilling[cite: 3].
*   **Secure API Access**: Implements a `Fetchuser` middleware on the backend to verify JWT tokens before allowing access to private routes[cite: 3].
*   **Responsive UI**: Built with React components like `Navbar`, `Alert`, and `Noteitem` for a seamless user experience[cite: 3].

## 🛠️ Tech Stack

### **Frontend**
*   **Framework**: React.js[cite: 3]
*   **State Management**: Context API[cite: 3]
*   **Styling**: Custom CSS and modular components[cite: 3]

### **Backend**
*   **Runtime**: Node.js & Express.js[cite: 3]
*   **Database**: MongoDB (via Mongoose models for `User` and `Note`)[cite: 3]
*   **Security**: JSON Web Tokens (JWT) for session management[cite: 3]

## 📂 Project Structure

The **Notebook-repo-main.zip** project is divided into two primary directories[cite: 3]:

### **Backend**
Contains the server-side logic, including database configuration (`db.js`), API routes (`auth.js`, `notes.js`), and data models[cite: 3].

### **Frontend (src)**
Contains the React application, featuring a dedicated `Components/` folder for UI elements and a `Context/` folder for state management logic[cite: 3].

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

*This project serves as a comprehensive example of a secure, production-ready full-stack application.*[cite: 3]


```
