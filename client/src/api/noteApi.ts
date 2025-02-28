import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Note } from "../features/notes/noteTypes";
import { v4 as uuidv4 } from "uuid";

export const noteApi = createApi({
  reducerPath: "noteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Note"],
  endpoints: (builder) => ({
    getNotes: builder.query<Note[], void>({
      query: () => "/notes",
      providesTags: ["Note"],
    }),
    addNote: builder.mutation<Note, { noteId: string; text: string }>({
      query: (newNote) => {
        const noteId = uuidv4();
        return {
          url: "/notes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { ...newNote, noteId: noteId },
        };
      },
      invalidatesTags: ["Note"],
    }),
    removeNote: builder.mutation<void, string>({
      query: (noteId) => ({
        url: `/notes/${noteId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Note"],
    }),
    editNote: builder.mutation<void, { noteId: string; text: string }>({
      query: ({ noteId, text }) => ({
        url: `/notes/${noteId}`,
        method: "PUT",
        body: { text },
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useAddNoteMutation,
  useRemoveNoteMutation,
  useEditNoteMutation,
} = noteApi;
