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

export const addNote = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    const newNote = { text };
    const result = await collections.notes?.insertOne(newNote);

    result
      ? res.status(201).json({ _id: result.insertedId, text })
      : res.status(500).json({ message: "Failed to create a new note." });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
};
