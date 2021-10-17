import React from "react";

const SongsForm = ({ songs, setSongs }) => {
  const songElements = songs.map((song, i) => {
    return (
      <div className="song-selector" key={"song:" + i}>
        <label>{"Song #" + (i + 1) + ": "}</label>
        <input
          type="text"
          className="song-title-selector"
          onChange={(e) => {
            let newState = [...songs];
            newState[i].title = e.target.value;
            setSongs(newState);
          }}
        ></input>
        <button>remove</button>
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
      {songElements}
      <button className="add-song-button" onClick={addSong}>
        Add
      </button>
    </div>
  );
};

export default SongsForm;
