import axios from "axios";
import React, { useEffect, useState } from "react";

import Post from "./Post/Post";
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
    <div className="posts">
      <h2 className="posts__title">Posts:</h2>
      {posts.map((post) => {
        return <Post key={post._id} post={post} members={members}/>;
      })}
    </div>
  );
};

export default Posts;
