import React from "react";
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PeepThree from '../../../assets/peep-three.png';
import PeepFour from '../../../assets/peep-four.png';
import "../headingCard/headingCard.css";

// A card component used as "headers" for the landing page

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
  
export default function LandingCard(props){ //add props
    const classes = useStyles();

    return (
        <div>
            <Paper elevation={7} className="headingCard">
                {props.peep == 'three' ? <img src={PeepThree} className="peepThree"/> : null}
                <Typography variant="h2" className="textSpace">{props.heading}</Typography>
                {props.peep == 'four' ? <img src={PeepFour} className="peepFour"/> : null}
            </Paper>
        </div>
    )
};