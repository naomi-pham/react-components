import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useFollowPointer } from "../@hooks/useFollowPointer";

const FollowPointer = () => {
  const ref = useRef(null);

  const { x, y } = useFollowPointer();

  return (
    <motion.div
      ref={ref}
      // animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 50, // Higher values will create more sudden movement, default is 100
        mass: 1, // mass of moving object
        damping: 10, // opposing force
        bounce: 0.25, // bounce is overridden if damping, stiffness, mass are set
        restSpeed: 0.01, // End animation if absolute speed drops below this value
        restDelta: 0.01, // End animation if distance is below this value
      }}
      className="aspect-square w-40 rounded-full bg-lime-400"
    />
  );
};

export default FollowPointer;
