import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import type { Note } from "./noteTypes";
import { useGetNotesQuery } from "../../api/noteApi";
import { useNoteActions } from "../../hooks/useNoteActions";

const NoteList: React.FC = () => {
  const { data: notes = [], error, isLoading } = useGetNotesQuery();
  const {
    handleRemove,
    handleEdit,
    handleSaveEdit,
    editId,
    editText,
    setEditText,
  } = useNoteActions();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading notes</p>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {notes.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        notes.map((note: Note) => (
          <Card key={note.noteId} sx={{ maxWidth: 345, marginTop: 10 }}>
            <CardActionArea>
              <CardContent>
                {editId === note.noteId ? (
                  <TextField
                    fullWidth
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    variant="outlined"
                    size="small"
                    autoFocus
                  />
                ) : (
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {note.text}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  handleRemove(note.noteId);
                }}
              >
                Delete
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() =>
                  editId === note.noteId
                    ? handleSaveEdit(note.noteId)
                    : handleEdit(note)
                }
              >
                {editId === note.noteId ? "Save" : "Edit"}
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  );
};

export default NoteList;
