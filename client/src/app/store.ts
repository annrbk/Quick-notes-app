import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/noteSlice";
import { noteApi } from "../api/noteApi";

const reducers = {
  notes: notesReducer,
  [noteApi.reducerPath]: noteApi.reducer,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
