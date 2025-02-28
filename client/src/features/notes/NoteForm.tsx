import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useNoteActions } from "../../hooks/useNoteActions";

const NoteForm: React.FC = () => {
  const { text, setText, handleAdd } = useNoteActions();

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      onSubmit={handleAdd}
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Enter a new note"
        variant="outlined"
        sx={{ width: "20%" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ alignSelf: "flex-start" }}
      >
        Save
      </Button>
    </Box>
  );
};

export default NoteForm;
