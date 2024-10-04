import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 1.5, duration: 1.5 },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      className="home container"
      initial="initial"
      animate="visible"
      exit="ease"
    >
      <motion.h2>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
