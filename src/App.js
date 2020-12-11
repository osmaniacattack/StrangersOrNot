import React, { useState } from 'react';
import './App.css';
import Nav from "../src/components/nav/nav"
import Footer from "../src/components/footer/footer"
import Landing from "../src/pages/landing/landing";
import Game from "./pages/game/game";


export default function App() {

  const [landing, setLanding] = React.useState(true);
  const handleLanding = () => {
    setLanding(false);
    setStartSettings(true);
  }

  const [startSettings, setStartSettings] = React.useState(false);
  const handleSettings = () => {
    setStartSettings(false);
    setGameStart(true);
  }

  const [gameStart, setGameStart] = React.useState(false);
  const handleGameStart = () => {
    setGameStart(false);
    setLanding(true);
  }
  return (
    
      <div>
        <Nav/>
        {landing == true ? <Landing mainLandingSettings={handleLanding}/> : null}
        {landing == false? <Game/> : null}
        <Footer/>
      </div>
    

  );
}
