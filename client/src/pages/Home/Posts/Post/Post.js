import Lineup from "./Lineup/Lineup";
import Songs from "./Songs/Songs";
import "./styles.css";

const Post = ({ post, members }) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const dateString = new Date(post.performanceDate).toLocaleTimeString("en-us", dateOptions);

  return (
    <div className="post">
      <div className="post__date-section">
        <label className="post__date-label">Performance Date:</label>
        <div className="post__date">{dateString}</div>
      </div>
      <div className="post__divider" />
      <div className="post__lineup-section">
        <label className="post__lineup-label">Lineup:</label>
        <Lineup post={post} members={members} />
      </div>
      <div className="post__divider" />
      <div className="post__songs-section">
        <label className="post__songs-label">Songs:</label>
        <Songs post={post} />
      </div>
    </div>
  );
};
export default Post;
