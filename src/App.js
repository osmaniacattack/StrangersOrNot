import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "../src/components/nav/nav"
import Footer from "../src/components/footer/footer"
import Landing from "../src/pages/landing/landing";
import Game from "./pages/game/game";
import ReactGA from 'react-ga';


// Main App Component featuring the Nav, Footer, and conditionally rendered pages in lieu of routing.


export default function App() {

  useEffect(() => {
    ReactGA.initialize('G-YDYM1JSKPW');
    ReactGA.pageview(window.location.pathname + window.location.search);

    ReactGA.initialize('G-3RSRD6CGSL');
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  const [landing, setLanding] = React.useState(true);
  // Handler function for switching from landing to swettings page
  const handleLanding = () => {
    setLanding(false);
    setStartSettings(true);
  }

  const [startSettings, setStartSettings] = React.useState(false);

  return (
    
      <div>
        <Nav/>
        {landing == true ? <Landing mainLandingSettings={handleLanding}/> : null}
        {landing == false? <Game/> : null}
        <Footer/>
      </div>
    

  );
}
