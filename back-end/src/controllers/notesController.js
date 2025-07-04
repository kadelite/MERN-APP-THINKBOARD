import mongoose from "mongoose"
import Note from "../models/Notes.js";

// Find all notes
export async function getAllNotes (req, res) {
 try {
  const notes = await Note.find().sort({ createdAt:-1 }); //show the newest first
  res.status(200).json(notes);
 } catch (error) {
  console.error("Error fetching notes from the controller:", error);
  res.status(500).json({message: "Internal Server Error"});
 }
}

// get note by specific id
export async function getNoteById (req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({message: "Note not found!"});
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching note by ID from the controller:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
}


//Create Notes
export async function createNotes (req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save()
    res.status(201).json({message:"Note created successfully!"});
  } catch (error) {
    console.error("Error in creating notes from the controller:", error);
  res.status(500).json({message: "Internal Server Error"});
  }
};

// Update note by ID
export async function updateNotes (req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, 
      { title, content }, 
      {new: true,});

    if (!updatedNote) {
      return res.status(404).json({message: "Note not found!"});
    }
      res.status(200).json({message:"Note updated Successfully!", note: updatedNote});
  } catch (error) {
    console.error("Error in Updating notes from the controller:", error);
  res.status(500).json({message: "Internal Server Error"});
  }
}

// delete note by id
 export async function deleteNotes (req, res) {
 try {
  const deletedNote = await Note.findByIdAndDelete(req.params.id);
  if (!deletedNote) {
    return res.status(404).json({message: "Note not found!"});
  }
  res.status(200).json({message:"Note deleted Successfully!"});
 } catch (error) {
  console.error("Error in Deleting notes from the controller:", error);
  res.status(500).json({message: "Internal Server Error"});
 }
}