import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Note, NoteState } from "./noteTypes";

const initialState: NoteState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(
        (note) => note.noteId !== action.payload
      );
    },
    editNote: (
      state,
      action: PayloadAction<{ noteId: string; text: string }>
    ) => {
      const note = state.notes.find(
        (note) => note.noteId === action.payload.noteId
      );
      if (note) {
        note.text = action.payload.text;
      }
    },
  },
});

export const { addNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
