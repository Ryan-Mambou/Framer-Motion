import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Modal({ showModal, setShowModal }) {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modal = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: "200px",
      transition: { type: "spring", delay: 0.5 },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div variants={modal} className="modal">
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button className="button">Start again!</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
