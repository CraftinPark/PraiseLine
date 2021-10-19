import React from "react";

import AssignmentSelector from "./AssignmentSelector/AssignmentSelector";
import "./styles.css";

const AssignmentSelectors = ({ assignments, setAssignments, members, postAttempt }) => {
  return (
    <div>
      {assignments.map((assignment, i) => {
        return (
          <div key={assignment.role}>
            {assignment.members.map((member, j) => {
              return (
                <AssignmentSelector
                  key={assignment.role + ":" + assignments[i].members[j]}
                  assignments={assignments}
                  setAssignments={setAssignments}
                  members={members}
                  aIndex={i}
                  mIndex={j}
                  postAttempt={postAttempt}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default AssignmentSelectors;
