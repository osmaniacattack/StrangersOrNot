import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from "@material-ui/core/Switch";
import Button from '@material-ui/core/Button';
import '../nav/nav.css'

// Navigation Bar Component

export default function Nav() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createMuiTheme(theme ? light : dark); // Used to toggle the dark mode feature

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <AppBar position="static" className="nav">
        <Toolbar>
          <Typography variant="h5" className="title"><a style={{textDecoration: 'none', color: 'white'}} href="https://strangers-or-not.vercel.app/">STRANGERS OR NOT</a></Typography>
          <span className="buttonSpan">
            <Switch style={{color:"white"}} checked={theme} onChange={handleThemeChange} />
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