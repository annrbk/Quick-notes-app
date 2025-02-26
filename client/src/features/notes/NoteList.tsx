import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import type { Note } from "./noteTypes";
import { useGetNotesQuery } from "../../api/noteApi";

const NoteList: React.FC = () => {
  const { data: notes = [], error, isLoading } = useGetNotesQuery();

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
          <Card key={note._id} sx={{ maxWidth: 345, marginTop: 10 }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {note.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Delete
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  );
};

export default NoteList;
