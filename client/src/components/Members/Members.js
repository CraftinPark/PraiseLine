import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/members").then((response) => {
      setMembers(response.data);
    });
  }, []);

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
