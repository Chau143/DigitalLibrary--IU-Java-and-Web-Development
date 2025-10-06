# 📚 Digital Library Web Application

A responsive full-stack web application built for the **IU Java and Web Development course project**, allowing users to sign in,authenticate,create, view, edit, and delete books.  

The app demonstrates CRUD operations using **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB (database)** — styled with **Tailwind CSS**.

<img width="1428" height="739" alt="Screenshot 2025-09-26 at 11 40 27" src="https://github.com/user-attachments/assets/5f566356-c4c3-442f-a260-742358ed0683" />



---




## 🚀 Features

- Authentication of user email and their password
- 📖 View all books (table or card view)
- ➕ Add a new book
- ✏️ Edit existing book details
- ❌ Delete a book
- 🔍 View detailed information
- 🎨 Responsive layout with Tailwind CSS (works on mobile, tablet, and desktop)

---

## 🛠️ Technologies Used

**Frontend:**
- React.js  
- React Router  
- Tailwind CSS  
- Axios  

**Backend:**
- Node.js  
- Express.js  
- MongoDB & Mongoose
- bcrypt.js
- jwt token 

---

## ⚙️ Installation Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Chau143/DigitalLibrary--IU-Java-and-Web-Development.git
cd DigitalLibrary--IU-Java-and-Web-Development
### 2️⃣ **Backend Setup**
-Go to the backend folder: 
cd backend
-Install dependencies:
npm install
-Create a .env file inside the backend folder and add:
PORT=5556
MONGO_URI="mongodb+srv://chau:chau@digital-library.1od0ek7.mongodb.net/?retryWrites=true&w=majority&appName=Digital-Library"
-Run the backend server:
npm start
- The backend should run now on:
http://localhost:5556
### 3️⃣ **Frontend Setup**
-Open a new terminal window and navigate to the frontend folder:
cd ../ frontend
- Install dependencies:
npm install
- Run the frontend
npm run dev
- Then open your browser and visit:
http://localhost:5173 or http://localhost:5175 
### 4️⃣ **Verify the App**
✅ Authentication via email and password,add, view, edit, and delete books
✅ Switch between Table and Card view
✅ Resize the browser window — confirm responsive design

## 📜**License**
This project was created as part of the IU course "Java and Web Development".
For educational and demonstration purposes only.





