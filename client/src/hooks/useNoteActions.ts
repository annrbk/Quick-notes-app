import { useState } from "react";
import {
  useAddNoteMutation,
  useEditNoteMutation,
  useRemoveNoteMutation,
} from "../api/noteApi";
import { v4 as uuidv4 } from "uuid";
import { Note } from "../features/notes/noteTypes";

export const useNoteActions = () => {
  const [text, setText] = useState("");
  const [addNote] = useAddNoteMutation();
  const [removeNote] = useRemoveNoteMutation();
  const [editNote] = useEditNoteMutation();
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const handleAdd = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!text.trim()) return;
      const newNote = {
        noteId: uuidv4(),
        text,
      };
      await addNote(newNote).unwrap();
      setText("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleRemove = async (noteId: string) => {
    if (!noteId) {
      console.error("Invalid note ID");
      return;
    }
    try {
      await removeNote(noteId).unwrap();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEdit = async (note: Note) => {
    setEditId(note.noteId);
    setEditText(note.text);
  };

  const handleSaveEdit = async (noteId: string) => {
    try {
      if (editText.trim()) {
        await editNote({ noteId, text: editText }).unwrap();
        setEditId(null);
        setEditText("");
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return {
    text,
    setText,
    handleAdd,
    handleRemove,
    handleEdit,
    editText,
    editId,
    setEditText,
    handleSaveEdit,
  };
};
