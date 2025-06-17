import express from "express";
import { deleteNotes, getAllNotes, updateNotes } from "../controllers/notesController.js";
import { createNotes, getNoteById } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);



export default router;