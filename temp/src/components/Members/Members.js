import React, { useState, useEffect } from "react";
import axios from "axios"


const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/members").then((response) => {
      setMembers(response.data);
    });
  }, []);

  return (
    <div className="members">
      <div className="memberList">
        Member List:
        {members.map((member) => {
          return <div key={"list"+member._id} className="member">{member.firstName}</div>;
        })}
      </div>
      <div className="memberInfo"></div>
    </div>
  );
};

export default Members;
