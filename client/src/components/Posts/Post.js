const Post = ({ post, members }) => {
  const lineupElements = post.assignments.map((assignment, i) => {
    return (
      <div className="post-lineup-role" key={post._id + "role" + i}>
        {assignment.role + ": "}
        {assignment.members.map((member) => {
          let m = members.find((m) => m._id === member);
          if (m) return <div className="post-lineup-role-member">{m.firstName}</div>;
        })}
      </div>
    );
  });

  const songElements = post.songs.map((song, i) => {
    return (
      <div key={post._id + ":song:" + i} className="post-song">
        {song.title}
      </div>
    );
  });

  return (
    <div className="post">
      <div className="post-lineup">
        <h4 className="post-lineup-label">Lineup:</h4>
        <div className="post-lineup-roles">{lineupElements}</div>
      </div>
      <div className="post-songs">
        <h4 className="post-songs-label">Songs:</h4>
        <div className="post-songs-list">{songElements}</div>
      </div>
    </div>
  );
};

export default Post;
