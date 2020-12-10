import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      height: 50
    },
    grow: {
      flexGrow: 1,
    },
  }));

export default function Footer() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <AppBar position="fixed" color="primary" className={classes.appBar} style={{backgroundColor:"#bf0413"}}>
          <Toolbar>
            <Typography style={{margin:"auto"}}>Created with ReactJS and some love from Abdul and Ryan</Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }