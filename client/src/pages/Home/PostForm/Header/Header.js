import "./styles.css";

const Header = ({ setDate, postAttempt }) => {
  // render Error upon submission attempt and empty selector
  const renderError = () => {
    if (document.getElementById("date-selector"))
      if (!document.getElementById("date-selector").value && postAttempt)
        return (
          <div className="postform__date-selector-empty-error">
            <div className="postform__date-selector-empty-error__arrow"></div>
            <div className="postform__date-selector-empty-error__pane">
              <label className="postform__date-selector-empty-error__label">Please select a date</label>
            </div>
          </div>
        );
  };

  return (
    <div className="postform__header">
      <h2 className="postform__header__title">Create Post</h2>

      <div className="postform__header__date-section">
        {renderError()}
        <label className="postform__header__date-label">Worship Date: </label>
        <input
          className="postform__header__date-selector"
          id="date-selector"
          type="datetime-local"
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default Header;
