import React, { useState } from "react";
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import PeepOne from '../../../assets/peep-one.png';
import PeepTwo from '../../../assets/peep-two.png';
import "../landingCard/landingCard.css";

// Component for the landing card a user see's at the first visit

export default function LandingCard(props){
    let learnButton = props.learnButton;

    return (
        <div>
            <Paper elevation={7} className="paper">
                <img src={PeepOne} className="peepOne"/>
                <img src={PeepTwo} className="peepTwo"/>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography align="center" className="cardTitle" variant="h2">{props.title}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography align="center" variant="h6" className="cardDescription">{props.center}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Grid container>
                            <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
                            <Grid item xs={7} sm={7} md={7} lg={7}>
                                {learnButton === true ? <Button variant="contained" size="medium" className="landingButtons leftButton"><a href="#aboutSection" style={{textDecoration: 'none', color: 'white'}}>Learn to Play</a></Button> : null}
                                <Button variant="contained" size="medium" className="landingButtons rightButton" onClick={props.changeLandingToSettings}>Play Game</Button>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Paper>
        </div>
    )
};