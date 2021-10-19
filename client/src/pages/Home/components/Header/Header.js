import { useSpring, animated } from "react-spring";

import "./styles.css";

const Header = () => {
  const titleEntryStyle = useSpring({
    from: { marginLeft: -500 },
    to: { marginLeft: 5 },
  });

  return (
    <nav>
      <animated.h1 style={titleEntryStyle} className="main-title">
        PRAISELINE
      </animated.h1>
    </nav>
  );
};

export default Header;
