import React from "react";

import "./styles.css";

const AssignmentSelector = ({ assignments, setAssignments, members, assignment, aIndex, member, mIndex }) => {
  const memberOptions = members.map((member) => {
    return (
      <option key={member._id} value={member._id}>
        {member.firstName + " " + member.lastName}
      </option>
    );
  });

  const updateAssignments = (e) => {
    let newState = [...assignments];
    newState[aIndex].members[mIndex] = e.target.value;
    setAssignments(newState);
  };

  return (
    <div className="selector" key={assignment.role + ":" + mIndex}>
      <label className="role-label">
        {assignment.members.length === 1 ? assignment.role + ": " : assignment.role + " #" + (mIndex + 1) + ": "}
      </label>
      <select
        id={assignment.role + ":member-selector:" + mIndex}
        className="member-select"
        defaultValue=""
        onChange={(e) => updateAssignments(e)}
      >
        <option value="">select a member</option>
        {memberOptions}
      </select>
      <button className="remove">remove</button>
      {/* {renderError()} */}
    </div>
  );
};
export default AssignmentSelector;
