import React from "react";

import Member from "./Member/Member";
import "./styles.css";

const Members = ({ members }) => {
  return (
    <div className="members">
      <h2 className="members__label">Member List:</h2>
      {members.map((member) => {
        return <Member member={member}/>;
      })}
    </div>
  );
};

export default Members;
