import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1], // this is known as keyframes and it animates the property(scale here) in the sequence given in the array
    scale: 1.1,
    textShadow: "0px 0px 8px white",
    boxShadow: "0px 0px 8px white",
    transition: {
      duration: 0.4,
      yoyo: Infinity, // this will make the animation repeat infinitely (or you can enter whole number which shows number of keyframes.)
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.5,
    },
  },
  exit: {
    x: "-100vw",
  },
};

const Home = () => {
  return (
    //  default type of this type of animation is tween. (for opacity -- tween and for x or y axis -- spring)
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to SliceHub</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
