import axios from "axios";
import React, { useEffect, useState } from "react";

import Post from "./Post";
import "./styles.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="posts">
      <h3>Posts:</h3>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default Posts;
