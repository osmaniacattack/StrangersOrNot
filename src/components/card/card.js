import React from "react";
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "../card/card.css";
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

// General card component used for the live game play and for instructions on the landing page

export default function Card(props){ 
    return (
        <div>
            <Paper elevation={7} className="paper">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography align="center" className="cardLevel" variant="h6" style={{margin: "2rem 0 0 0"}}>{props.title}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography align="center" variant="h5" className="cardQuestion" style={{margin: "1rem"}}>{props.question}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{marginBottom: "700px"}}>
                        <Typography align="center" variant="h6" className="cardBranding">{props.brand ? props.brand: 'Strangers Or Not'}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
};