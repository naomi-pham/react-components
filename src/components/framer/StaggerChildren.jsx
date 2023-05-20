import { motion } from 'framer-motion'
import React from 'react'

const StaggerChildren = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 1,
        staggerDirection: 1, // stagger from last to first
        // repeat: Infinity,
        // repeat: 1,
        duration: 1,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={container}
      className="inline-flex gap-4"
    >
      <motion.li variants={item}>
        <button
          type="button"
          className="rounded-full px-4 py-2 shadow-button-lg"
        >
          Item 1
        </button>
      </motion.li>
      <motion.li variants={item}>
        <button
          type="button"
          className="rounded-full px-4 py-2 shadow-button-lg"
        >
          Item 2
        </button>
      </motion.li>
    </motion.ul>
  )
}

export default StaggerChildren
