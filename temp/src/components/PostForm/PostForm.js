import axios from "axios";
import { useState, useEffect } from "react";

import LineUpForm from "./LineUpForm";
import "./styles.css";

const ROLES = ["Leader", "Vocal", "Acoustic Guitar", "Keyboard", "Bass", "Drummer", "Electric Guitar"];

const PostForm = () => {
  const [assignments, setAssignments] = useState([{ role: "Leader", members: [""] }]);
  const [members, setMembers] = useState([]);
  const [postData, setPostData] = useState({ author: "", assignments: {}, songs: {} });

  useEffect(() => {
    axios.get("http://localhost:5000/members").then((response) => {
      setMembers(response.data);
    });
  }, []);

  const handleSubmitPost = async () => {
    let finalAssignments = [...assignments];
    await setPostData({ ...postData, assignments: finalAssignments });
    axios.post("http://localhost:5000/posts", postData);
  };

  const memberOptions = members.map((member) => {
    return (
      <option key={member.firstName} value={member.firstName}>
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

  const addRoleOption = (role) => {
    let newAssignments = [...assignments];

    let assignment = newAssignments.find((assignment) => assignment.role === role);

    if (assignment) {
      //existing property, add member selector as second
      assignment.members.push("");
      setAssignments(newAssignments);
    } else {
      //new property, create property
      newAssignments.push({
        role: role,
        members: [""],
      });
      setAssignments(newAssignments);
    }
  };

  const temp = () => {
    console.log(assignments);
  };

  const roleSelectorElements = assignments.map((assignment) => {
    const memberElements = assignment.members.map((member, i) => {
      return (
        <div className="role-selector" key={assignment.role + ":" + i}>
          <label>
            {assignment.members.length === 1 ? assignment.role + ": " : assignment.role + " #" + (i + 1) + ": "}
          </label>
          <select className="member-selector">
            <option>select a member</option>
            {memberOptions}
          </select>
          <button>remove</button>
        </div>
      );
    });
    return <div key={assignment.role}>{memberElements}</div>;
  });

  return (
    <div className="post-form">
      <div className="lineup">
        {roleSelectorElements}
        <div className="add-role">
          <select id="add-role-selector" className="add-role-selector">
            <option>select a role</option>
            {roleOptions}
          </select>
          <button
            className="add-role-button"
            onClick={() => addRoleOption(document.getElementById("add-role-selector").value)}
          >
            Add
          </button>
        </div>
      </div>

      <div className="songs">
        <label>Song 1: </label>
        <input onChange={temp} />
        <label>Song 2: </label>
        <input onChange={temp} />
        <label>Song 3: </label>
        <input onChange={temp} />
        <label>Song 4: </label>
        <input onChange={temp} />
      </div>

      <button className="submit-post-button" onClick={handleSubmitPost}>
        Post Lineup
      </button>
    </div>
  );
};

export default PostForm;
