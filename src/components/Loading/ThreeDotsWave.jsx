import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "3rem",
  height: "2rem",
  display: "flex",
  justifyContent: "space-around",
  gap: "5px"
};

const loadingCircle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "#f4ca40",
  borderRadius: "0.25rem"
};
const loadingCircle2 = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "#1b3764",
  borderRadius: "0.25rem"
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: "50%"
  },
  end: {
    y: "150%"
  }
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut"
};

export default function ThreeDotsWave() {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle2}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle2}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
}