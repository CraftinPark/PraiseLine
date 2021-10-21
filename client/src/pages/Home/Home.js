import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header/Header";
import PostForm from "./PostForm/PostForm";
import Members from "./Members/Members";
import Posts from "./Posts/Posts";
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
      <section className="homepage__header-area">
        <Header />
      </section>
      <section className="homepage__left-main">
        <PostForm members={members} />
      </section>
      <section className="homepage__middle-main">
        <Posts />
      </section>
      <section className="homepage__right-main">
        <Members members={members} />
      </section>
    </main>
  );
}
export default Home;
