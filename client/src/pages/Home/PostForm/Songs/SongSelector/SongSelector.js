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
          <div className="postform__songs__song-selector__empty-error">
            <div className="postform__songs__song-selector__empty-error__arrow"></div>
            <div className="postform__songs__song-selector__empty-error__pane">
              <label className="postform__songs__song-selector__empty-error__label">Please choose a song</label>
            </div>
          </div>
        );
  };

  return (
    <div className="postform__songs__song" key={"song:" + sIndex}>
      {/* LABEL */}
      <label className="postform__songs__song__label">{"Song #" + (sIndex + 1) + ": "}</label>
      {/* TITLE: */}
      <div className="postform__songs__song__title-label">Title:</div>
      {/* INPUT */}
      <input id={"song:title-selector:" + sIndex} className="postform__songs__song__title-input" type="text" onChange={(e) => updateSong(e)} />
      {/* REMOVE BUTTON */}
      <button className="postform__songs__song__remove" onClick={removeSong}>
        remove
      </button>
      {/* CONDITIONAL ERROR MESSAGE */}
      {renderError()}
    </div>
  );
};
export default SongSelector;
