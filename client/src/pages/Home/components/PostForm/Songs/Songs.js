import React from "react";
import "./styles.css";

const Songs = ({ songs, setSongs }) => {
  const songElements = songs.map((song, i) => {
    return (
      <div className="song-selector" key={"song:" + i}>
        <div className="song-selector-name">{"Song #" + (i + 1) + ": "}</div>
        <div className="song-selector-title">Title:</div>
        <div className="song-selector-input">
          <input
            type="text"
            onChange={(e) => {
              let newState = [...songs];
              newState[i].title = e.target.value;
              setSongs(newState);
            }}
          ></input>
        </div>
        <div className="song-selector-remove">
          <button>remove</button>
        </div>
      </div>
    );
  });

  const addSong = () => {
    let newState = [...songs];
    newState.push({ title: "" });
    setSongs(newState);
  };

  return (
    <div className="songs-form">
      <h3>Songs:</h3>
      {songElements}
      <div className="songs-addsong">
        <button onClick={addSong}>Add New Song</button>
      </div>
    </div>
  );
};

export default Songs;
