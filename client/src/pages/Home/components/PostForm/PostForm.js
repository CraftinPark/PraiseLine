import { useState } from "react";
import axios from "axios";

import Header from "./Header/Header";
import Lineup from "./Lineup/Lineup";
import Songs from "./Songs/Songs";
import "./styles.css";

const PostForm = ({ members }) => {
  const [assignments, setAssignments] = useState([{ role: "Leader", members: [""] }]);
  const [date, setDate] = useState();
  const [songs, setSongs] = useState([{ title: "" }]);
  const [postAttempt, setPostAttempt] = useState(false);

  const handleSubmitPost = () => {
    setPostAttempt(true);
    // Catch Empty Member Entry
    for (let assignment in assignments) {
      for (let member in assignments[assignment].members) {
        if (!assignments[assignment].members[member]) {
          console.log(assignments[assignment].role + ": member index " + member + " is empty");
          return;
        }
      }
    }
    // Catch Empty Song Entry
    for (let song in songs) {
      if (!songs[song].title) {
        console.log("song #" + song + " is empty");
        return;
      }
    }
    // Proceed.
    axios
      .post("http://localhost:5000/posts", {
        author: "",
        assignments: [...assignments],
        songs: [...songs],
        performanceDate: date,
      })
      .then(() => {
        console.log("successfully sent post request to server...");
      });
  };

  return (
    <div className="postform">
      <Header setDate={setDate} />
      <div className="content">
        <Lineup assignments={assignments} setAssignments={setAssignments} members={members} postAttempt={postAttempt} />
        <div className="divider" />
        <Songs songs={songs} setSongs={setSongs} postAttempt={postAttempt} />
      </div>
      <button className="submit" onClick={handleSubmitPost}>
        Post Lineup
      </button>
    </div>
  );
};
export default PostForm;
