import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;



// Middleware
app.use(cors({
  origin: "http://localhost:5173"
})
);

app.use(express.json()); // this will parse JSON bodies: req.body


// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

// if database is connected, the application should start
connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server is running on PORT:",PORT);
});
});

