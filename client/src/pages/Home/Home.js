import { useSpring, animated } from "react-spring";

import PostForm from "../../components/PostForm/PostForm";
import Members from "../../components/Members/Members";
import Posts from "../../components/Posts/Posts";
import "./styles.css";

function Home() {
  const prop = useSpring({
    from: { "margin-left": -500 },
    to: { "margin-left": 5 },
  });

  return (
    <div className="home-page">
      <nav>
        <animated.h1 style={prop} className="main-title">
          PRAISELINE
        </animated.h1>
      </nav>
      <div className="left-main">
        <PostForm />
      </div>
      <div className="middle-main">
        <Posts />
      </div>
      <div className="right-main">
        <Members />
      </div>
    </div>
  );
}

export default Home;
