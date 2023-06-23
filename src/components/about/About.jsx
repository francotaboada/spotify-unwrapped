import React from 'react'
import './about.scss'

export default function About() {

    return (
        <div className='about'>
            <div className="container">
                <div className="left">
                    <div className="imgContainer">
                        <img alt="Github" src="assets/github.png"  onClick={() => window.open("https://github.com/francotaboada/spotify-unwrapped")}/>
                    </div>
                </div>
                <div className="right">
                    <h2>Source Code</h2>
                    To view the github repo tied to making this webapp, click on the github logo.
                </div>
                
            </div>
        </div>

    )
}
