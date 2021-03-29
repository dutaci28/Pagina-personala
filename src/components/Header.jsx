import { Typography, AppBar, Toolbar } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography>Pagina personala</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
