import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from "@material-ui/core/Switch";
import Button from '@material-ui/core/Button';
import '../nav/nav.css'

export default function Nav() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createMuiTheme(theme ? light : dark);

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <AppBar position="static" className="nav">
        <Toolbar>
          <Typography variant="h5" className="title">STRANGERS OR NOT</Typography>
          <span className="buttonSpan">
            <Switch checked={theme} onChange={handleThemeChange} />
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