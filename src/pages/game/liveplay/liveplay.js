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
    let [currentId, setCurrentId] = React.useState(1);

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
                setCurrentQuestion(questions[currentId-1][1]);
                setCurrentLevel(questions[currentId-1][0]);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function handlePrevious() {
        getCurrentQuestion();
        getCurrentTitle();
        setCurrentId(currentId--);
    }

    function handleNext() {
        getCurrentQuestion();
        getCurrentTitle();
        setCurrentId(currentId++);
    }

    function getCurrentQuestion(){
        setCurrentQuestion(questionArray[currentId-1][1])
    };

    function getCurrentTitle(){
        setCurrentLevel(questionArray[currentId-1][0])
    }

    return (
        <div>
            {questionArray.length > 0 ? 
            <Grid container key={currentId}>
                <Grid item sm={2} md={2} lg={2}></Grid>
                <Grid item xs={12} sm={8} md={8} lg={8} className="gameStyling">
                    <Typography variant="h5" className="numberStyling">Card {currentId}/{number*3}</Typography>
                    <Card title={currentLevel} question={currentQuestion} brand="Strangers or Not"/>
                    <Button disabled={currentId <= 1} disableRipple variant="outlined" className="prevButton prevNext" onMouseDown={handlePrevious}>Previous</Button>
                    <Button disabled={currentId >= questionArray.length} disableRipple variant="outlined" className="nextButton prevNext" onMouseDown={handleNext}>Next</Button>
                </Grid>
                <Grid item sm={2} md={2} lg={2}></Grid>
            </Grid>
        : "Loading..."}
        </div>
    )
}