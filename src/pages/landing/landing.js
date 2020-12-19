import React from "react";
import Card from "../../components/card/card";
import LandingCard from "../../components/card/landingCard/landingCard";
import HeadingCard from "../../components/card/headingCard/headingCard";
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import "../landing/landing.css"
import ContactForm from "../../components/form/ContactForm"

// Landing page component that holds the Landing Card, Heading Card, and regular Card components

export default function Landing(props){
    return (
        <Container>
            <Grid container className="landingCardSpace shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <LandingCard title="STRANGERS OR NOT" center={"A GAME TO CREATE HUMAN CONNECTION"} learnButton={true} changeLandingToSettings={props.mainLandingSettings} />
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <div id="aboutSection">
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <HeadingCard heading="ABOUT THE GAME" peep="three"/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            </div>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="ABOUT THE GAME" question="Strangers or not is a game based off of the popular card game, we’re not really strangers. WNRS is a movement and a game meant to create and foster human connections with the people surrounding us."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="ABOUT THE GAME" question="The game consists of 3 levels of questions ultimately aimed at helping you and your group connect with one another in an impactful manner."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <HeadingCard heading="HOW TO PLAY" peep="four"/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="gather a group of folks you want to play this game with. have one person be in charge of setting up the game on their screen and reading the questions."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="the host presses “play game” and it redirects them to a settings card asking them to choose how many cards they want to play per round. as a group, make your choice and have your person press “play”."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="all of your randomized cards will appear, so answer each card one by one. have everyone in the group answer before moving on to the next question."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="use the “next” and “previous” buttons to move to the next card or the previous card (if you want to revisit the card), respectively."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="level 1 cards are the perception questions. this level makes you think about your impressions on other people and how you make assumptions about other folks."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="level 2 cards are the connection questions. this level focuses on developing your connections with others beyond the surface level and provides thought provoking questions to do that."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="level 3 cards are the reflection questions. this level is about reflecting not only on your experiences, but also on yourself."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="at the end of the game, your group will be presented with a final card with a specified label on it, so please answer the prompt on the final card."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <HeadingCard heading="Disclaimer" peep="none"/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="Disclaimer" question="We acknowledge and give full credit to We’re Not Really Strangers for creating the movement and card game, so please support the original creators for their hard work."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <HeadingCard heading="Version 1.0" peep="none"/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="VERSION 1.0" question="This is a work in progress so all constructive feedback is appreciated! The game is currently optimized only for desktop and vertical phone orientations."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="VERSION 1.0" question="We are aware that the application may not render correctly on certain Android devices. We are also working on a fix for the dark mode text color."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="VERSION 1.0" question="If you experience any issues please contact us with the device you used as well as what the problem was."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <ContactForm/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
        </Container>
    )
}

