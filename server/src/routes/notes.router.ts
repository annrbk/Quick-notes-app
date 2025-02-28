import express from "express";
import {
  getNotes,
  addNote,
  removeNote,
  editNote,
} from "../controllers/noteController";

export const notesRouter = express.Router();
notesRouter.use(express.json());

notesRouter.get("/", getNotes);
notesRouter.post("/", addNote);
notesRouter.delete("/:noteId", removeNote);
notesRouter.put("/:noteId", editNote);
