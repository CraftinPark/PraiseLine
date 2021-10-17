import React from "react";
import "./styles.css";

const LineUpForm = ({ assignments, setAssignments, memberOptions, roleOptions }) => {
  const roleSelectorElements = assignments.map((assignment, i) => {
    const memberElements = assignment.members.map((member, j) => {
      return (
        <div className="role-selector" key={assignment.role + ":" + j}>
          <label>
            {assignment.members.length === 1 ? assignment.role + ": " : assignment.role + " #" + (j + 1) + ": "}
          </label>
          <select
            className="member-selector"
            onChange={(e) => {
              let newState = [...assignments];
              newState[i].members[j] = e.target.value;
              setAssignments(newState);
            }}
          >
            <option>select a member</option>
            {memberOptions}
          </select>
          <button>remove</button>
        </div>
      );
    });
    return <div key={assignment.role}>{memberElements}</div>;
  });

  const addRoleOption = (role) => {
    let newState = [...assignments];
    let match = newState.find((assignment) => assignment.role === role);
    if (match)
      //existing property, add member selector as second
      match.members.push("");
    //new property, create property
    else newState.push({ role: role, members: [""] });
    setAssignments(newState);
  };

  return (
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
  );
};

export default LineUpForm;
