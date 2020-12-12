import React, { useState } from "react"
import SettingCard from "../../components/card/settingCard/settingCard"
import LivePlay from "../../pages/game/liveplay/liveplay"

// Component that holds the SettingCard (and the game) component that is passed into the App component

export default function Game(props){

    return (
        <div>
            <SettingCard/>
        </div>
    )
};
