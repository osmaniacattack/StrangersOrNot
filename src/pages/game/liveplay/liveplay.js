import React, { useState, useEffect } from "react"
import { Container } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import Card  from "../../../components/card/card"
import { Grid } from "@material-ui/core"
import { Button } from "@material-ui/core"
import "../../game/liveplay/liveplay.css"
import axios from 'axios';

// The component that the actual game runs on. Calls API and renders game conditionally using currentId

export default function LivePlay(props){
    let number = props.numberPerRound; // receives number of cards per round from parent component
    let [questionArray, setQuestionArray] = React.useState([]) // questions from API are stored here
    let [currentId, setCurrentId] = React.useState(0); // current question number used to keep track of level type
     
    useEffect(() => {
        let questions = [];
        let count = 0;
        axios.get('https://strangers-or-not.firebaseio.com/.json')
            .then(res => {
                let tempSet = new Set();
                for (const [key, value] of Object.entries(res.data)){
                    let tempArr = [];
                    while (count < number){
                        let card_value = value[Math.floor((Math.random() * value.length))];
                        if (key === "level1"){
                            if(!tempArr.includes(card_value)){ // section pushes cards to one big array and checks for no repeated cards
                                tempArr.push(card_value);
                                questions.push(["Level 1: Perception", card_value]);
                                count++;
                            }
                        }
                        else if (key === "level2"){
                            if(!tempArr.includes(card_value)){
                                tempArr.push(card_value);
                                questions.push(["Level 2: Connection", card_value]);
                                count++;
                            }
                        }
                        else if (key === "level3"){
                            if(!tempArr.includes(card_value)){
                                tempArr.push(card_value);
                                questions.push(["Level 3: Reflection", card_value]);
                                count++;
                            }
                        }
                    }
                    count = 0;
                }
                console.log(questions);
                questions.push(["FINAL CARD", "EACH PLAYER SEND A MESSAGE TO THE OTHER. OPEN ONLY ONCE THE GAME HAS CONCLUDED."])
                setQuestionArray(questions);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function handlePrevious() {
        // decrements the currentId to take the previous question
        setCurrentId(currentId - 1);
    }

    function handleNext() {
        // increments the currentId to take the next question
        setCurrentId(currentId + 1);
    }
    
    return (
        // conditional rendering of the question cards only once the questions have loaded
        <Container>
            {questionArray.length > 0? 
            <Grid container key={currentId}>
                <Grid item xs={1} sm={2} md={2} lg={2}></Grid>
                <Grid item xs={10} sm={8} md={8} lg={8} className="gameStyling">
                    <Typography variant="h5" className="numberStyling">Card {currentId+1}/{number*3+1}</Typography>

                    <Card title={questionArray[currentId][0]} question={questionArray[currentId][1]} brand="Strangers or Not"/>
                    <Button disabled={currentId < 1} 
                            variant="outlined" 
                            className="prevButton prevNext" 
                            onClick={handlePrevious}>Previous</Button>

                    <Button disabled={currentId >= number*3}
                            variant="outlined"
                            className="nextButton prevNext" 
                            onClick={handleNext}>
                            {currentId+1 >= number*3 ? 'Final Card' : 'Next'}</Button>
                </Grid>
                <Grid item xs={1} sm={2} md={2} lg={2}></Grid>

            </Grid>
        : 'loading...'}
        </Container>
    )
}