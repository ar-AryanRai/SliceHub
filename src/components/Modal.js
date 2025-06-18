import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "30vh",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px black",
    boxShadow: "0px 0px 8px black",
    transition: {
      duration: 0.4,
      yoyo: Infinity, // makes the animation repeat infinitely
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another pizza</p>
            <Link to="">
              <motion.button variants={buttonVariants} whileHover="hover">
                Start Again
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
