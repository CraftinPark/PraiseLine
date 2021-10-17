import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";

import "./styles.css";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/members").then((response) => {
      setMembers(response.data);
    });
  }, []);

  return (
    <Container className="members">
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
    </Container>
  );
};

export default Members;
