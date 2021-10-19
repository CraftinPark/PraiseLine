import React from "react";

import "./styles.css";

const Members = ({ members }) => {
  return (
    <div className="members">
      <div className="member-list">
        Member List:
        {members.map((member) => {
          return (
            <div key={"list" + member._id} className="member-list-item">
              {member.firstName}
            </div>
          );
        })}
      </div>
      <div className="member-list"></div>
    </div>
  );
};

export default Members;
