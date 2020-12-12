import React from "react";
import Card from "../../components/card/card";
import LandingCard from "../../components/card/landingCard/landingCard";
import HeadingCard from "../../components/card/headingCard/headingCard";
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import "../landing/landing.css"

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
                    <Card title="ABOUT THE GAME" question="STRANGERS OR NOT IS A GAME BASED OFF OF THE POPULAR CARD GAME, WE'RE NOT REALLY STRANGERS. IT IS A PURPOSE DRIVEN CARD GAME AND MOVEMENT ALL ABOUT EMPOWERING MEANINGFUL CONNECTIONS."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="ABOUT THE GAME" question="THREE CAREFULLY CRAFTED LEVELS OF QUESTIONS AND WILDCARDS WILL ALLOW YOU TO DEEPEN YOUR EXISTING RELATIONSHIP AND CREATE NEW ONES."/>
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
                    <Card title="HOW TO PLAY" question="ORGANIZE A VIRTUAL CALL WITH WHOMEVER YOU'D LIKE TO PLAY WITH. ONE PLAYER CAN HAVE THE QUESTIONS UP FOR THE GROUP."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="HAVE THE ONE PLAYER CHOOSE HOW MANY CARDS THEY WANT PER ROUND. THEN, THE PLAYER WILL HAVE THE CARD IN PLAY SHOWN ON THEIR SCREEN, SO THEY CAN READ THE QUESTION CARD TO THE REST OF THE GROUP."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="GO AROUND LETTING EACH PLAYER ANSWER THE QUESTION BEFORE MOVING ON. USE THE ARROWS TO MOVE ON TO THE NEXT QUESTION OR TO LOOK BACK AT PREVIOUS QUESTIONS."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="LEVEL 1 CARDS ARE PERCEPTION QUESTIONS. THIS LEVEL IS ABOUT GAINING PERSPECTIVE ON WHAT FIRST IMPRESSIONS WE GIVE OFF AND CHALLENGING THE ASUMPTIONS WE MAKE ABOUT OTHERS."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="LEVEL 2 CARDS ARE CONNECTION QUESTIONS. THIS LEVEL IS ABOUT ASKING THE RARELY ASKED QUESTIONS AND CONNECTING ON A DEEPER LEVEL."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="LEVEL 3 ARE REFLECTION QUESTIONS. THIS LEVEL IS THE TIME TO REFLECT ON YOUR GAME EXPERIENCE."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
            <Grid container className="shift">
                <Grid item xs={1} sm={1} md={2} lg={2}/>
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Card title="HOW TO PLAY" question="AT THE END OF THE GAME, THERE WILL BE A FINAL CARD. SEND YOUR PLAYERS A MESSAGE. OPEN ONLY ONCE YOU ALL HAVE LEFT THE CALL."/>
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
                    <Card title="VERSION 1.0" question="If you experience any issues please contact us with the device you used as well as what the problem was."/>
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2}/>
            </Grid>
        </Container>
    )
}

