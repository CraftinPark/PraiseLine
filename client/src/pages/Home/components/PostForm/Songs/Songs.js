import React, { useEffect } from "react";

import SongSelector from "./SongSelector/SongSelector";
import "./styles.css";

const Songs = ({ songs, setSongs, postAttempt }) => {
  const addSong = () => {
    let newState = [...songs];
    newState.push({ title: "" });
    setSongs(newState);
  };

  useEffect(() => {
    for (let i = 0; i < songs.length; i++) {
      let input = document.getElementById("song:title-selector:" + i);
      input.value = songs[i].title;
    }
  });

  return (
    <div className="songs">
      <h3 className="title">Songs:</h3>
      {songs.map((song, i) => {
        return (
          <SongSelector
            key={"song:" + i}
            songs={songs}
            setSongs={setSongs}
            song={song}
            sIndex={i}
            postAttempt={postAttempt}
          />
        );
      })}
      <div className="new-song">
        <button className="submit" onClick={addSong}>
          Add New Song
        </button>
      </div>
    </div>
  );
};

export default Songs;
