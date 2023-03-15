import React from 'react'
import "./termlist.scss"

export default function ArtistList({id, title, active, setSelected}) {
    return (
        <li 
            className = {active ? "artistList active" : "artistList"} 
            onClick ={() => setSelected(id)} 
        >
            {title}
        </li>
    )
}
