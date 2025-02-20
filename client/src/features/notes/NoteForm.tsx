import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";

const NoteForm: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Enter a new note"
        variant="outlined"
        sx={{ width: "20%" }}
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
