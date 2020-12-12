import React, { useState, useEffect } from "react"
import { Typography } from "@material-ui/core"
import Card  from "../../../components/card/card"
import { Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import "../../game/liveplay/liveplay.css"
import axios from 'axios';


export default function LivePlay(props){
    let number = props.numberPerRound;
    let [questionArray, setQuestionArray] = React.useState([])
    let [currentQuestion, setCurrentQuestion] = React.useState('');
    let [currentLevel, setCurrentLevel] = React.useState('');
    let [currentId, setCurrentId] = React.useState(0);

    useEffect(() => {
        let questions = [];
        let count = 0;
        axios.get('https://strangers-or-not.firebaseio.com/.json')
            .then(res => {
                for (const [key, value] of Object.entries(res.data)){
                    while (count < number){
                        if (key == "level1"){
                            questions.push(["Level 1: Perception", value[Math.floor((Math.random() * value.length))]]);
                            count++;
                        }
                        else if (key == "level2"){
                            questions.push(["Level 2: Connection", value[Math.floor((Math.random() * value.length))]]);
                            count++;
                        }
                        else if (key == "level3"){
                            questions.push(["Level 3: Reflection", value[Math.floor((Math.random() * value.length))]]);
                            count++;
                        }
                    }
                    count = 0;
                }
                setQuestionArray(questions);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function handlePrevious() {
        setCurrentId(currentId - 1);
    }

    function handleNext() {
        setCurrentId(currentId + 1);
    }
    
    return (
        <div>
            {questionArray.length > 0 ? 
            <Grid container key={currentId}>
                <Grid item xs={1} sm={2} md={2} lg={2}></Grid>
                <Grid item xs={10} sm={8} md={8} lg={8} className="gameStyling">
                    <Typography variant="h5" className="numberStyling">Card {currentId+1}/{number*3}</Typography>
                    <Card title={questionArray[currentId][0]} question={questionArray[currentId][1]} brand="Strangers or Not"/>
                    <Button disabled={currentId < 1} variant="outlined" className="prevButton prevNext" onClick={handlePrevious}>Previous</Button>
                    <Button disabled={currentId >= questionArray.length-1} variant="outlined" className="nextButton prevNext" onClick={handleNext}>Next</Button>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={2}></Grid>
            </Grid>
        : "Loading..."}
        </div>
    )
}