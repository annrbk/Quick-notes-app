import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const NoteItem: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 10 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            text
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
  );
};

export default NoteItem;
