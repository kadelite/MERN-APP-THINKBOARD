# MERN Stack Beginner App

A simple MERN (MongoDB, Express, React, Node.js) stack application for managing notes.

---

## 📁 Project Structure

```
beginner/
├── back-end/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── notesController.js
│   │   ├── models/
│   │   │   └── Note.js
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   └── server.js
│   ├── package.json
│   └── .env
├── front-end/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   │   └── NoteCard.jsx
│   │   ├── pages/
│   │   │   └── HomePage.jsx
│   │   └── App.jsx
│   ├── package.json
│   └── .env
└── README.md
```

---

## 🛠️ Setup Instructions

### 1. **Clone the Repository**
```sh
git clone <your-repo-url>
cd beginner
```

---

### 2. **Back-End Setup**

#### a. Install Dependencies
```sh
cd back-end
pnpm install
# or
npm install
```

#### b. Configure Environment Variables

Create a `.env` file in `back-end/` with:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.vzk2dkq.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=3000
```
Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB Atlas credentials.

#### c. Start the Server
```sh
pnpm run dev
# or
npm run dev
```
The server should run on `http://localhost:3000`.

---

### 3. **Front-End Setup**

#### a. Install Dependencies
```sh
cd ../front-end
pnpm install
# or
npm install
```

#### b. Start the React App
```sh
pnpm start
# or
npm start
```
The app should run on `http://localhost:5173` (or another port).

---

## ⚙️ Key Steps & Troubleshooting

- **MongoDB Atlas Setup:**  
  - Whitelist your IP in Atlas under "Network Access".
  - Create a database user with read/write access.
  - Use the correct connection string in your `.env`.

- **Common Errors:**  
  - `MongooseError: The uri parameter to openUri() must be a string, got "undefined"`  
    → Check your `.env` and ensure `MONGODB_URI` is set and loaded.
  - `Could not connect to any servers in your MongoDB Atlas cluster`  
    → Check IP whitelist, credentials, and cluster status.
  - `Error fetching notes: TypeError: response.json is not a function`  
    → Ensure your Express route uses `res.json(...)`.

- **React Routing:**  
  - Use `react-router-dom` for routing and `Link` components.

---

## 📝 Example Express Route

````js
// [notesRoutes.js](http://_vscodecontentref_/0)
import express from "express";
import { getAllNotes, createNotes, updateNotes, deleteNotes } from "../controllers/notesController.js";
const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;