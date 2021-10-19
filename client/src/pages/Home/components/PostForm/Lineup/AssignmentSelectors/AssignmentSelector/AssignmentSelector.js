import React, { useEffect } from "react";

import "./styles.css";

const AssignmentSelector = ({ assignments, setAssignments, members, aIndex, mIndex, postAttempt }) => {
  const memberOptions = members.map((member) => {
    return (
      <option key={member._id} value={member._id}>
        {member.firstName + " " + member.lastName}
      </option>
    );
  });

  // update selector in case assignments change
  useEffect(() => {
    let selector = document.getElementById(assignments[aIndex].role + ":member-selector:" + mIndex);
    let options = selector.options;
    for (let k = 0; k < options.length; k++) {
      if (options[k].value === assignments[aIndex].members[mIndex]) {
        selector.selectedIndex = k;
        break;
      }
    }
  }, [assignments, aIndex, mIndex]);

  // change assignment according to selector
  const updateAssignment = (e) => {
    let newState = [...assignments];
    newState[aIndex].members[mIndex] = e.target.value;
    setAssignments(newState);
  };

  // remove assignment
  const removeAssignment = () => {
    let newState = [...assignments];
    newState[aIndex].members.splice(mIndex, 1);
    setAssignments(newState);
  };

  // render Error upon submission attempt and empty selector
  const renderError = () => {
    if (document.getElementById(assignments[aIndex].role + ":member-selector:" + mIndex))
      if (!document.getElementById(assignments[aIndex].role + ":member-selector:" + mIndex).value && postAttempt)
        return (
          <div className="lineup-role-selector-empty-error">
            <div className="arrow"></div>
            <div className="pane">
              <label>Please select a member</label>
            </div>
          </div>
        );
  };

  return (
    <div className="selector" key={assignments[aIndex].role + ":" + mIndex}>
      {/* LABEL */}
      <label className="role-label">
        {assignments[aIndex].members.length === 1
          ? assignments[aIndex].role + ": "
          : assignments[aIndex].role + " #" + (mIndex + 1) + ": "}
      </label>
      {/* SELECTOR */}
      <select
        id={assignments[aIndex].role + ":member-selector:" + mIndex}
        className="member-select"
        defaultValue=""
        onChange={(e) => updateAssignment(e)}
      >
        <option value="">select a member</option>
        {memberOptions}
      </select>
      {/* REMOVE BUTTON */}
      <button className="remove" onClick={() => removeAssignment()}>
        remove
      </button>
      {/* CONDITIONAL ERROR MESSAGE */}
      {renderError()}
    </div>
  );
};
export default AssignmentSelector;
