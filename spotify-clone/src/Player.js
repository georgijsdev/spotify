// React Components
import React from 'react'

// Made Components
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

//CSS
import './Player.css'

export const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>

            <Footer />
        </div>
    )
}

export default Player