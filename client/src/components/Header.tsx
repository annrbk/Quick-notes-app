import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          component="a"
          sx={{
            mr: 2,
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 500,
            color: "inherit",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          QuickNotes
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
