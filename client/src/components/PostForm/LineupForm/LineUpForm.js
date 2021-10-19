import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import "./styles.css";

const LineUpForm = ({ assignments, setAssignments, memberOptions, roleOptions, postAttempt }) => {
  const [prop, api] = useSpring(() => ({ "margin-left": 0, opacity: 0 }));

  const roleSelectorElements = assignments.map((assignment, i) => {
    const memberElements = assignment.members.map((member, j) => {
      const renderError = () => {
        if (document.getElementById(assignment.role + ":member-selector:" + j)) {
          if (!document.getElementById(assignment.role + ":member-selector:" + j).value && postAttempt) {
            api.start({ "margin-left": 10, opacity: 1 });
            return (
              <animated.div style={prop} className="lineup-role-selector-empty-error">
                <div className="arrow"></div>
                <div className="pane">
                  <label>Please select a member</label>
                </div>
              </animated.div>
            );
          }
        }
      };

      return (
        <div className="lineup-role-selector" key={assignment.role + ":" + j}>
          <div className="lineup-role-selector-title">
            {assignment.members.length === 1 ? assignment.role + ": " : assignment.role + " #" + (j + 1) + ": "}
          </div>
          <div className="lineup-role-selector-members">
            <select
              id={assignment.role + ":member-selector:" + j}
              defaultValue=""
              size="small"
              onChange={(e) => {
                let newState = [...assignments];
                newState[i].members[j] = e.target.value;
                setAssignments(newState);
              }}
            >
              <option value="">select a member</option>
              {memberOptions}
            </select>
          </div>
          <div className="lineup-role-selector-remove">
            <button>remove</button>
          </div>
          {renderError()}
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
    <div className="lineup-form">
      <h3>Lineup:</h3>
      {roleSelectorElements}
      <div className="lineup-addrole">
        <div className="lineup-addrole-select">
          <select id="lineup-addrole-select">
            <option>select a role</option>
            {roleOptions}
          </select>
        </div>
        <div className="lineup-addrole-button">
          <button onClick={() => addRoleOption(document.getElementById("lineup-addrole-select").value)}>
            Add New Role
          </button>
        </div>
      </div>
    </div>
  );
};

export default LineUpForm;
