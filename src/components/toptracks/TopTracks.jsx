import React, { useEffect, useState } from "react";
import TermList from "../termlist/TermList";
import "./toptracks.scss";

export default function TopTracks(props) {
  const [selected, setSelected] = useState("short-term");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "short-term",
      title: "Short Term",
    },
    {
      id: "medium-term",
      title: "Medium Term",
    },
    {
      id: "long-term",
      title: "Long Term",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "short-term":
        setData(props.topTracksST);
        break;
      case "medium-term":
        setData(props.topTracksMT);
        break;
      case "long-term":
        setData(props.topTracksLT);
        break;
      default:
        setData(props.topTracksST);
    }
  }, [selected]);

  return (
    <div className="toptracks">
      <h1> Top Tracks </h1>
      <div className="options">
        <ul className="terms">
          {list.map((item) => (
            <TermList
              key={item.name}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="container">
        {data.slice(0, 20).map((d) => (
          <figure className="imgContainer" key={d.name}>
            <img className="album-cover" alt="" src={d.album.images[0].url} onClick={() => window.open(d.uri, "_blank")}/>
            {/* <div className = "overlay">
                <a href = "#" className = "icon" title = "Play/Pause">
                    <img className = "icon" src = "assets/play.png" alt="" />
                </a>
                
            </div> */}
            <figcaption>
              <div className = "songname">{d.name}</div>
              <div className = "artistname">{d.artists[0].name}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
