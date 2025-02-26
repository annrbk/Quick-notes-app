import express from "express";
import { getNotes, addNote } from "../controllers/noteController";

export const notesRouter = express.Router();
notesRouter.use(express.json());

notesRouter.get("/", getNotes);
notesRouter.post("/", addNote);
