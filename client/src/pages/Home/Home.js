import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import PostForm from "./components/PostForm/PostForm";
import Members from "./components/Members/Members";
import Posts from "./components/Posts/Posts";
import "./styles.css";

function Home() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/members").then((response) => {
      setMembers(response.data);
    });
  }, []);

  return (
    <main className="homepage">
      <section className="header-area">
        <Header />
      </section>
      <section className="left-main">
        <PostForm members={members} />
      </section>
      <section className="middle-main">
        <Posts />
      </section>
      <section className="right-main">
        <Members members={members} />
      </section>
    </main>
  );
}
export default Home;
