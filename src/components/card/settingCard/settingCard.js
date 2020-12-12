import React, { useState, useEffect } from "react"
import { Typography } from "@material-ui/core"
import { Button } from "@material-ui/core"
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Paper } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import LivePlay from "../../../pages/game/liveplay/liveplay";
import "../settingCard/settingCard.css"

// Component used to customize game settings and initialize game play

export default function SettingCard(props){
    const [startSettings, setStartSettings] = React.useState(true); // State for toggling from setting card to game card
    const handleSettings = () => {
      setStartSettings(false);
      setStartGame(true);
    }

    const [startGame, setStartGame] = React.useState(false);

    const [number, setNumber] = React.useState(0); // State for holding the number of cards to pass to child component
    const handleChange = (e, newNumber) => {
        setNumber(newNumber);
    }


    return(
        // Conditional rendering the setting card if settings have not been chosen yet.
        <div>
            {startSettings === true ? 
            <Paper elevation={7} className="paperSetting">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography align="center" className="cardLevel" variant="h4">How many cards do you <br/>want to play per level?</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Grid container>
                        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
                        <Grid container item xs={8} sm={8} md={8} lg={8} justify="center">
                            <ToggleButtonGroup value={number} exclusive onChange={handleChange} className="groupSpace">
                                <ToggleButton disabled={number === 3 ? true : false} value={3} className={number === 3 ? "disabledButton" : "buttonGroup"}>3</ToggleButton>
                                <ToggleButton disabled={number === 5 ? true : false} value={5} className={number === 5 ? "disabledButton" : "buttonGroup"}>5</ToggleButton>
                                <ToggleButton disabled={number === 7 ? true : false} value={7} className={number === 7 ? "disabledButton" : "buttonGroup"}>7</ToggleButton>
                                <ToggleButton disabled={number === 9 ? true : false} value={9} className={number === 9 ? "disabledButton" : "buttonGroup"}>9</ToggleButton>
                                <ToggleButton disabled={number === 11 ? true : false} value={11} className={number === 11 ? "disabledButton" : "buttonGroup"}>11</ToggleButton>
                                <ToggleButton disabled={number === 13 ? true : false} value={13} className={number === 13 ? "disabledButton" : "buttonGroup"}>13</ToggleButton>
                                <ToggleButton disabled={number === 15 ? true : false} value={15} className={number === 15 ? "disabledButton" : "buttonGroup"}>15</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1} lg={1}></Grid>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>                    
                </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Grid container>
                            <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Button disabled={number === 0} variant="contained" size="large" className="startButton" onClick={handleSettings}>Start Game</Button>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            : null}
            {startGame === false ? null : 
                <LivePlay numberPerRound={number}/>
            }
        </div>
    )
};