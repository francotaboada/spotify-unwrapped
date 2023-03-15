import React from 'react';
import './topgenres.scss';

export default function TopGenres(props) {

    return (
        <div className="topgenres">
            <h1>Top Genres</h1>
            <div className = "subheading">
                According to your listening habits, your top genres are:
            </div>
            <div className="container">
                {Object.entries(props.genres).slice(0, 9).map(([key, value]) => (
                    <div className="genreContainer" key={key}>
                        <p >{key}: {value}</p>
                    </div>
                ))}
                <div className="otherContainer">
                    other: {props.genreRemainder}
                </div>

            </div>


        </div>
    )
}
