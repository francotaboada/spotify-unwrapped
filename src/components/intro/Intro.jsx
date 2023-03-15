import React from 'react'
import './intro.scss'

export default function Intro(props) {
    console.log(props.userData)
    return (
        <div className='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img alt="" src={props.userData.images[0].url} />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div>
                        <h1>Hey {props.userData.display_name},</h1>
                    </div>
                    <div>
                        <h2>Scroll down to see your Spotify Unwrapped.</h2>
                    </div>
                    
                </div>
            </div>
            <div className = "bottom">
                <img src = "assets/down.png" alt="" />
            </div>
            
        </div>

    )
}
