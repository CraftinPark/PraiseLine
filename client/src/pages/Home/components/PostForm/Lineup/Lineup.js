import React from "react";

import AssignmentSelector from "./AssignmentSelector/AssignmentSelector";
import RoleAdder from "./RoleAdder/RoleAdder";
import "./styles.css";

const Lineup = ({ assignments, setAssignments, members, postAttempt }) => {
  return (
    <div className="lineup">
      <h3 className="title">Lineup:</h3>
      {/* ROLE SELECTORS */}
      {assignments.map((assignment, i) => {
        return (
          <div key={assignment.role}>
            {assignment.members.map((member, j) => {
              return (
                <AssignmentSelector
                  assignments={assignments}
                  setAssignments={setAssignments}
                  members={members}
                  assignment={assignment}
                  aIndex={i}
                  member={member}
                  mIndex={j}
                />
              );
            })}
          </div>
        );
      })}
      <RoleAdder assignments={assignments} setAssignments={setAssignments} />
    </div>
  );
};
export default Lineup;
