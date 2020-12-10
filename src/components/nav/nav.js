import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../nav/nav.css'

export default function Nav() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createMuiTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
      <AppBar position="static" className="nav">
        <Toolbar>
          <Typography variant="h5" className="title">STRANGERS OR NOT</Typography>
          <span className="buttonSpan">
            <Button size="medium" variant="outlined" className="toggleButtons">Toggle Colorblindness </Button>
            <Button size="medium" variant="outlined" className="toggleButtons" onClick={() => setTheme(!theme)}>Toggle Dark Mode </Button>
          </span>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export const light = {
    palette: {
        type: "light"
    }
};

export const dark = {
    palette: {
        type: "dark"
    }
};