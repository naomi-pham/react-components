import { motion } from "framer-motion";
import React from "react";

const StaggerChildren = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.5,
        staggerDirection: -1, // stagger from last to first
        // repeat: Infinity,
        repeat: 1,
        duration: 2,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.ul initial="hidden" animate="show" variants={container}>
      <motion.li variants={item}>Item 1</motion.li>
      <motion.li variants={item}>Item 2</motion.li>
    </motion.ul>
  );
};

export default StaggerChildren;
