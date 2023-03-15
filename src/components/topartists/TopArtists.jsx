import React from "react";
import { useEffect, useState } from "react";
import TermList from "../termlist/TermList";
import "./topartists.scss";

export default function TopArtists(props) {
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
        setData(props.topArtistsST);
        break;
      case "medium-term":
        setData(props.topArtistsMT);
        break;
      case "long-term":
        setData(props.topArtistsLT);
        break;
      default:
        setData(props.topArtistsST);
    }
  }, [selected]);

  return (
    <div className="topartists">
      <h1> Top Artists </h1>
      <div className="options">
        <ul className="terms">
          {list.map((item) => (
            <TermList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>

      <div className="container">
        {data.map((d, index) => (
          <li key={d.name}>
            <div className="artistbar">
              <figure className="imgContainer" key={d.name}>
                <img
                  onClick={() => window.open(d.uri)}
                  className="artist-img"
                  alt={d.name}
                  src={d.images[0].url}
                />
                <div className="overlay">
                  <div className="index">{index + 1}</div>
                </div>
                <figcaption onClick={() => window.open(d.uri)}>
                  <div className="artisttext">{d.name}</div>
                </figcaption>
              </figure>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
