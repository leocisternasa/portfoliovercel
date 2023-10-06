import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedTitle = () => {
  const word1Animation = useSpring({
    from: { transform: "translateX(-50%)" },
    to: { transform: "translateX(-100%)" },
    config: { duration: 2000 },
  });

  const word2Animation = useSpring({
    from: { transform: "translateX(50%)" },
    to: { transform: "translateX(80%)" },
    config: { duration: 2000 },
  });

  const fallingAnimation = useSpring({
    from: { transform: "translateY(-700%)" },
    to: { transform: "translateY(0%)" },
    config: { duration: 2000 },
  });

  return (
    <div className="flex justify-center align-middle">
      <animated.div
        className="absolute left-[43%] translate-x-[-70%] font-bold text-3xl sm:text-5xl md:text-6xl text-gray-700"
        style={word1Animation}
      >
        A Front-End
      </animated.div>
      <animated.div
        className="absolute left-[44%] translate-x-[-50%] text-4xl sm:text-5xl md:text-6xl text-gray-700 font-bold"
        style={fallingAnimation}
      >
        / Full-Stack
      </animated.div>
      <animated.div
        className="absolute left-[44%] translate-x-[70%] text-4xl sm:text-5xl md:text-6xl text-gray-700 font-bold"
        style={word2Animation}
      >
        Web Developer
      </animated.div>
    </div>
  );
};

export default AnimatedTitle;

{
  /* <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1> */
}