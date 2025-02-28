import { Request, Response } from "express";
import { collections } from "../services/database.service";
import { Note } from "../models/note";

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = (await collections.notes?.find({}).toArray()) as Note[];
    res.status(200).json(notes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
  }
};

export const addNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { noteId, text } = req.body;

    if (!noteId || !text) {
      res.status(400).json({ message: "ID and text are required" });
    }

    const newNote = { noteId, text };
    const result = await collections.notes?.insertOne(newNote);

    result
      ? res.status(201).json({ noteId, text })
      : res.status(500).json({ message: "Failed to create a new note." });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
};

export const removeNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { noteId } = req.params;

    if (!noteId) {
      res.status(400).json({ message: "ID is required to delete note" });
    }

    const note = await collections.notes?.findOneAndDelete({
      noteId,
    });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
  }
};

export const editNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { noteId } = req.params;
    const updatedNote: Partial<Note> = req.body as Note;

    const result = await collections.notes?.updateOne(
      { noteId },
      {
        $set: updatedNote,
      }
    );

    result
      ? res.status(200).json({ message: "Successfully updated note" })
      : res.status(304).json({ message: "Note not updated" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
  }
};
