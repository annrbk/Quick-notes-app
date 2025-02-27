import express from "express";
import cors from "cors";
import { connectToDatabase } from "./services/database.service";
import { notesRouter } from "./routes/notes.router";

const app = express();
const port = 3000;

app.use(express.json());

const corsOptions = {
  origin: process.env.CORS_LINK,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

connectToDatabase();

app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
