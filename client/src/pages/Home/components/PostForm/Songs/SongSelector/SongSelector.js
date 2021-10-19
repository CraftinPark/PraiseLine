import "./styles.css";

const SongSelector = ({ songs, setSongs, song, sIndex, postAttempt }) => {
  const removeSong = () => {
    let newState = [...songs];
    newState.splice(sIndex, 1);
    setSongs(newState);
  };

  const updateSong = (e) => {
    let newState = [...songs];
    newState[sIndex].title = e.target.value;
    setSongs(newState);
  };

  const renderError = () => {
    if (document.getElementById("song:title-selector:" + sIndex))
      if (document.getElementById("song:title-selector:" + sIndex).value === "" && postAttempt)
        return (
          <div className="lineup-role-selector-empty-error">
            <div className="arrow"></div>
            <div className="pane">
              <label>Please choose a song</label>
            </div>
          </div>
        );
  };

  return (
    <div className="song-selector" key={"song:" + sIndex}>
      {/* LABEL */}
      <label className="label">{"Song #" + (sIndex + 1) + ": "}</label>
      {/* TITLE: */}
      <div className="title-label">Title:</div>
      {/* INPUT */}
      <input id={"song:title-selector:" + sIndex} className="input" type="text" onChange={(e) => updateSong(e)} />
      {/* REMOVE BUTTON */}
      <button className="remove" onClick={removeSong}>
        remove
      </button>
      {/* CONDITIONAL ERROR MESSAGE */}
      {renderError()}
    </div>
  );
};
export default SongSelector;
