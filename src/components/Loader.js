import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-40, 40],
    y: [0, -80],
    transition: {
      x: {
        duration: 0.5,
        yoyo: Infinity,
      },
      y: {
        duration: 0.25,
        ease: "easeOut",
        yoyo: Infinity,
      },
    },
  },

  animationTwo: {
    x: 0,
    y: [0, -80],
    transition: {
      y: {
        duration: 0.3,
        ease: "easeOut",
        yoyo: Infinity,
      },
    },
  },
};

const Loader = () => {
  // useCycle is a hook that allows you to cycle(change) through a set of animations
  // cycleAnimation is a function that will change the animation state to the next one in the list
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo"); // number of animations can be more than two

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <button className="cycle-button" onClick={() => cycleAnimation()}>
        Cycle Animation
      </button>
    </>
  );
};

export default Loader;
