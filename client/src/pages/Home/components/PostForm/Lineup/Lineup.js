import React from "react";

import AssignmentSelectors from "./AssignmentSelectors/AssignmentSelectors";
import RoleAdder from "./RoleAdder/RoleAdder";
import "./styles.css";

const Lineup = ({ assignments, setAssignments, members, postAttempt }) => {
  return (
    <div className="lineup">
      <h3 className="title">Lineup:</h3>
      <AssignmentSelectors
        assignments={assignments}
        setAssignments={setAssignments}
        members={members}
        postAttempt={postAttempt}
      />
      <RoleAdder assignments={assignments} setAssignments={setAssignments} />
    </div>
  );
};
export default Lineup;
