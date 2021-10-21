import React, { useState } from "react";

import "./styles.css";

const ROLES = ["Leader", "Vocal", "Acoustic Guitar", "Keyboard", "Bass", "Drummer", "Electric Guitar"];

const RoleAdder = ({ assignments, setAssignments }) => {
  const [addRoleAttempt, setAddRoleAttempt] = useState(false);

  const roleOptions = ROLES.map((role) => {
    return (
      <option key={role} value={role}>
        {role}
      </option>
    );
  });

  // // change assignment according to selector
  // const updateAssignment = (e) => {
  //   let newState = [...assignments];
  //   newState[aIndex].members[mIndex] = e.target.value;
  //   setAssignments(newState);
  // };

  const addRoleOption = (role) => {
    setAddRoleAttempt(true);
    if (role) {
      let newState = [...assignments];
      let match = newState.find((assignment) => assignment.role === role);
      if (match)
        //existing property, add member selector as second
        match.members.push("");
      //new property, create property
      else newState.push({ role: role, members: [""] });
      setAssignments(newState);
    }
  };

  const renderError = () => {
    if (document.getElementById("lineup-new-role-selector"))
      if (!document.getElementById("lineup-new-role-selector").value && addRoleAttempt)
        return (
          <div className="postform__lineup__role-adder__empty-error">
            <div className="postform__lineup__role-adder__empty-error__arrow"></div>
            <div className="postform__lineup__role-adder__empty-error__pane">
              <label className="postform__lineup__role-adder__empty-error__label">Please select a role</label>
            </div>
          </div>
        );
  };

  return (
    <div className="postform__lineup__role-adder">
      <select className="postform__lineup__role-adder__selector" id="lineup-new-role-selector">
        <option value="">select a role</option>
        {roleOptions}
      </select>
      <button
        className="postform__lineup__role-adder__submit"
        onClick={() => addRoleOption(document.getElementById("lineup-new-role-selector").value)}
      >
        Add New Role
      </button>
      {renderError()}
    </div>
  );
};
export default RoleAdder;
