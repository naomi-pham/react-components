import Image from "next/image";
import React, { useEffect, useState } from "react";
import frontCloud from "/public/images/toggle/front-cloud.png";
import backCloud from "/public/images/toggle/back-cloud.png";
import moon from "/public/images/toggle/moon.png";
import sun from "/public/images/toggle/sun.png";
import day from "/public/images/toggle/day.png";
import night from "/public/images/toggle/night.png";
import plane from "/public/images/toggle/plane.png";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const Toggle = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState({ x: 0, y: 0 });
  const [isNight, setIsNight] = useState(false);

  const handleSetNight = () => {
    setX(70);
    setY(100);
    setZ({ x: -150, y: -50 });
    setIsNight(true);
  };

  const handleSetDay = () => {
    setX(0);
    setY(0);
    setZ({ x: 0, y: 0 });
    setIsNight(false);
  };

  const bgVariants = {
    night: { opacity: [0.4, 1], scale: [2, 1] },
    day: { opacity: [0.4, 1], scale: [2, 1] },
  };

  const toggleIconVariants = {
    sun: { x: 0, opacity: [1, 0.95, 1] },
    moon: { x: 70, opacity: [1, 0.95, 1] },
  };

  return (
    <MotionConfig>
      <AnimatePresence>
        <motion.div className="relative h-[64px] w-[140px] overflow-hidden rounded-full border bg-gradient-to-r from-[#94B8FF] to-[#548EFE]">
          <motion.div
            initial={false}
            animate={isNight ? "night" : "day"}
            variants={bgVariants}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <Image
              src={isNight ? night : day}
              alt="toggle-icon"
              width={140}
              height={64}
              className="rounded-full object-cover"
            />
          </motion.div>

          {/* Back cloud */}
          <motion.div
            initial={false}
            animate={{ y }}
            transition={{ type: "spring", duration: 1.2, delay: 0.01 }}
            className="absolute -right-4 -bottom-7 z-10 h-[83px] w-[143px]"
          >
            <Image src={backCloud} alt="backCloud" fill />
          </motion.div>

          {/* Front cloud */}
          <motion.div
            initial={false}
            animate={{ y }}
            transition={{ type: "spring", duration: 1.2 }}
            className="absolute -right-6 -bottom-8 z-30 h-[83px] w-[143px]"
          >
            <Image src={frontCloud} alt="frontCloud" fill />
          </motion.div>

          {/* Sun */}
          <div className="absolute top-1/2 left-2 z-20 h-[52px] w-[52px] -translate-y-1/2 ">
            <motion.div
              initial={false}
              animate={isNight ? "moon" : "sun"}
              variants={toggleIconVariants}
              transition={{
                bounce: 0,
                duration: 0.7,
                ease: "easeInOut",
              }}
              // className="rounded-full bg-gradient-to-r from-[#FFD338] to-[#FF9D42]"
            >
              <Image
                src={isNight ? moon : sun}
                alt="toggle-icon"
                width={52}
                height={52}
              />
            </motion.div>
          </div>

          {/* Plane */}
          <div className="absolute right-0.5 bottom-1 z-30 h-[36px] w-[55px]">
            <motion.div
              initial={false}
              animate={{ x: z.x, y: z.y }}
              transition={{
                bounce: 0,
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <Image src={plane} alt="toggle-icon" width={55} height={36} />
            </motion.div>
          </div>

          {/* Toggle button hidden */}
          <motion.button
            onClick={isNight ? handleSetDay : handleSetNight}
            className="absolute left-2 top-1 z-50 h-[52px] w-[52px] rounded-full bg-transparent focus:outline-none"
            initial={false}
            animate={{ x }}
            transition={{ type: "spring", duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Toggle;
