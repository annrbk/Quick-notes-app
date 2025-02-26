import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Note } from "../features/notes/noteTypes";

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
    addNote: builder.mutation<Note, { text: string }>({
      query: (newNote) => ({
        url: "/notes",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newNote,
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

export const { useGetNotesQuery, useAddNoteMutation } = noteApi;
