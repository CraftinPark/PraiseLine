import axios from "axios";
import { useState, useEffect, useRef } from "react";

import LineUpForm from "./LineUpForm";
import SongsForm from "./SongsForm";
import "./styles.css";

const ROLES = ["Leader", "Vocal", "Acoustic Guitar", "Keyboard", "Bass", "Drummer", "Electric Guitar"];

const PostForm = () => {
  const [members, setMembers] = useState([]);
  const [assignments, setAssignments] = useState([{ role: "Leader", members: [""] }]);
  const [songs, setSongs] = useState([{ title: "" }]);
  const [postData, setPostData] = useState({ author: "", assignments: {}, songs: {} });
  const initialRender = useRef(true);

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
    const finalAssignments = [...assignments];
    const finalSongs = [...songs];
    const newPost = { ...postData, assignments: finalAssignments, songs: finalSongs };
    setPostData(newPost);
    // This triggers useEffect to send post
  };

  useEffect(() => {
    if (!initialRender.current) {
      axios.post("http://localhost:5000/posts", postData).then(() => {
        console.log("successfully sent post request to server...");
        console.log(postData);
      });
    } else {
      initialRender.current = false;
    }
  }, [postData]);

  return (
    <div className="post-form">
      <LineUpForm
        assignments={assignments}
        setAssignments={setAssignments}
        memberOptions={memberOptions}
        roleOptions={roleOptions}
      />
      <SongsForm songs={songs} setSongs={setSongs} />
      <button className="submit-post-button" onClick={handleSubmitPost}>
        Post Lineup
      </button>
    </div>
  );
};

export default PostForm;
