import "./styles.css"

const Header = ({ setDate }) => {
  return (
    <div className="header">
      <h2 className="title">Create Post</h2>
      <div className="date">
        <label>Worship Date: </label>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      </div>
    </div>
  );
};
export default Header;
