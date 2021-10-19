import axios from "axios";
import { useState, useEffect, useRef } from "react";

import LineUpForm from "./LineupForm/LineUpForm";
import SongsForm from "./SongsForm/SongsForm";
import "./styles.css";

const ROLES = ["Leader", "Vocal", "Acoustic Guitar", "Keyboard", "Bass", "Drummer", "Electric Guitar"];

const PostForm = () => {
  const [members, setMembers] = useState([]);
  const [assignments, setAssignments] = useState([{ role: "Leader", members: [""] }]);
  const [date, setDate] = useState();
  const [songs, setSongs] = useState([{ title: "" }]);
  const [postAttempt, setPostAttempt] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/members").then((response) => {
      setMembers(response.data);
      console.log("successfully retrieved members from database...");
    });
  }, []);

  const memberOptions = members.map((member) => {
    return (
      <option key={member._id} value={member._id}>
        {member.firstName + " " + member.lastName}
      </option>
    );
  });

  const roleOptions = ROLES.map((role) => {
    return (
      <option key={role} value={role}>
        {role}
      </option>
    );
  });

  const handleSubmitPost = () => {
    console.log("start submit");
    if (!postAttempt) setPostAttempt(true);
    else setPostAttempt(false);
    
    for (let assignment in assignments) {
      for (let member in assignments[assignment].members) {
        if (!assignments[assignment].members[member]) {
          //console.log(assignments[assignment].role + ": member index " + member + " is empty");
          // render error window onto corresponding selector!
        }
      }
    }

    // axios.post("http://localhost:5000/posts", {
    //   author: "",
    //   assignments: [...assignments],
    //   songs: [...songs],
    //   performanceDate: date
    // }).then(() => {
    //     console.log("successfully sent post request to server...");
    //   });
  };

  return (
    <div className="postform">
      <div className="postform-header">
        <h2 className="postform-header-title">Create Post</h2>
        <div className="postform-header-date">
          <label>Worship Date: </label>
          <input type="date" onChange={(e) => setDate(e.target.value)}></input>
        </div>
      </div>
      <div className="postform-content">
        <LineUpForm
          assignments={assignments}
          setAssignments={setAssignments}
          memberOptions={memberOptions}
          roleOptions={roleOptions}
          postAttempt={postAttempt}
        />
        <div className="postform-divider" />
        <SongsForm songs={songs} setSongs={setSongs} />
      </div>
      <div className="postform-submit-button">
        <button onClick={handleSubmitPost}>Post Lineup</button>
      </div>
    </div>
  );
};

export default PostForm;
