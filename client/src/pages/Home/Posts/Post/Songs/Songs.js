import "./styles.css";

const Songs = ({ post }) => {
  return post.songs.map((song, i) => {
    return (
      <div key={post._id + ":song:" + i} className="post__song">
        <label className="post__song__title-label">Song #{i+1}:</label>
        <div className="post__song__title">{song.title}</div>
        <label className="post__song__key-label">Key:</label>
        <div className="post__song__key"> </div>
      </div>
    );
  });
};
export default Songs;
