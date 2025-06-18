import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: -250,
  },
  visible: {
    y: -10,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
  },
};

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        drag // it allows the logo to be draggable on the screen and if we only use drag then it will be draggable in all directions and stays at its final position
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // it will restrict the dragging to the area defined by these constraints that means that logo will be dragable in all directions but as soon as we release the click then logo will rest at its original position.
        dragElastic={0.8} // it will decide the easiness with which we can move the logo, 0 means no elasticity and 1 means full elasticity and higher the value more elastic the logo will be. Number can be higher than 1 as well.
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </motion.div>
      {/* default type is spring for this kind of animations */}
      {/* stiffness can only be added if type is spring: higher the value more fast and springy effect we will see  */}
      <motion.div
        className="title"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>SliceHub</h1>
      </motion.div>
    </header>
  );
};

export default Header;
