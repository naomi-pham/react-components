import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import useMeasure from "react-use-measure";

const ExitAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  let [ref, { height }] = useMeasure();

  const variants = {
    start: {
      opacity: 0,
      scale: 0.5,
      x: 0,
    },
    middle: {
      opacity: 1,
      scale: 1,
      x: 100,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="space-y-6">
      <button
        type="button"
        className="rounded-md bg-rose-300 px-4 py-2 font-semibold text-white"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle show
      </button>

      <AnimatePresence
        transition={{ duration: 0.5, damping: 100, mass: 0.5, stiffness: 50 }}
      >
        {isVisible && (
          <motion.div
            initial="start"
            animate="middle"
            exit="exit"
            variants={variants}
            className="aspect-square w-40 rounded-full bg-red-400"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExitAnimation;
