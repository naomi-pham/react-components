import { motion } from "framer-motion";
import React from "react";

const Gestures = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
      whileTap={{ scale: 0.9 }}
      className="rounded-md bg-red-300 px-4 py-2 font-semibold text-white"
    >
      Tap me
    </motion.button>
  );
};

export default Gestures;
