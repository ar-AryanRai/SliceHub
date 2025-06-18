import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const containerVarients = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      mass: 0.4, // lower mass means faster movement and higher mass means slower movement
      damping: 6, // higher damping means less oscillation and 0 means non-stop (infinite) oscillation
      when: "beforeChildren", // Ensures children animations start after parent
      staggerChildren: 0.6, // Stagger (delays) children animations by 0.4 seconds
    },
  },
  exit: {
    x: "-100vw",
  }
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
