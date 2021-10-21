import "./styles.css";

const Lineup = ({ post, members }) => {
  return post.assignments.map((assignment, i) => {
    return (
      <div className="post__lineup__assignment" key={post._id + "role" + i}>
        <label className="post__lineup__assignment-label">{assignment.role + ": "}</label>
        
        {assignment.members.map((member, j) => {
          let m = members.find((m) => m._id === member);
          if (m)
            return (
              <div key={"post:" + assignment.role + ":" + j} className="post__lineup__assignment-member">
                {j === assignment.members.length-1 ? m.firstName : m.firstName + ","}
              </div>
            );
          return <div key={"post:" + assignment.role + ":" + j + ":error"}>error</div>;
        })}
      </div>
    );
  });
};
export default Lineup;
