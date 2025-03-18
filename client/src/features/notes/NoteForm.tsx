import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useNoteActions } from "../../hooks/useNoteActions";

const NoteForm: React.FC = () => {
  const { text, setText, handleAdd } = useNoteActions();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: 2,
          marginTop: 3,
        }}
        onSubmit={handleAdd}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Enter a new note"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" size="large">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default NoteForm;
