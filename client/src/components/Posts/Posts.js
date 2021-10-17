import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container } from "@mui/material"

import Post from "./Post";
import "./styles.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setPosts(response.data);
    });

    axios.get("http://localhost:5000/members").then((response) => {
      setMembers(response.data);
      console.log("successfully retrieved members from database...");
    });
  }, []);

  return (
    <Container className="posts">
      <h3>Posts:</h3>
      {posts.map((post) => {
        return <Post key={post._id} post={post} members={members}/>;
      })}
    </Container>
  );
};

export default Posts;
