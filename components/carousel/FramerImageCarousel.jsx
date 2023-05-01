import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import React, { useState } from "react";
import { slideImages } from "../data/carouselData";
import { IconArrow } from "../icons/Icons";

const FramerImageCarousel = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(null);

  const [isAnimating, setIsAnimating] = useState();

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.2,
    }),
    middle: { x: "0%", opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.5,
      scale: 1,
    }),
  };

  const moveToRight = () => {
    enableAnimation();

    if (step === slideImages.length - 1) {
      setStep(0);
    } else setStep(step + 1);
    setDirection(1);
  };

  const moveToLeft = () => {
    enableAnimation();

    if (step === 0) {
      setStep(slideImages.length - 1);
      setDirection(-1);
    } else setStep(step - 1);
    setDirection(-1);
  };

  const cancelAnimation = () => {
    setIsAnimating(false);
  };

  const enableAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };

  const handleDragEnd = (dragInfo) => {
    if (dragInfo?.offset?.x > 0) {
      moveToLeft();
    } else if (dragInfo?.offset?.x < 0) {
      moveToRight();
    }
  };

  return (
    <div className="group relative w-[640px]">
      <MotionConfig
        transition={{ duration: 1, ease: [0.56, 0.03, 0.12, 1.04] }}
      >
        <div className="relative mx-auto h-[426px] overflow-hidden">
          <AnimatePresence
            initial={false}
            mode="popLayout"
            onExitComplete={cancelAnimation}
            custom={direction}
          >
            <motion.div
              key={step}
              initial="enter"
              animate="middle"
              exit="exit"
              custom={direction}
              variants={carouselVariants}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={false}
              onDragEnd={(_, dragInfo) => handleDragEnd(dragInfo)}
              style={{
                backgroundImage: `url(${slideImages[step].image})`,
              }}
              className="absolute inset-0 bg-no-repeat object-cover"
            ></motion.div>
          </AnimatePresence>
        </div>
      </MotionConfig>

      <button
        className="absolute top-1/2 left-0 z-10 hidden h-full -translate-y-1/2 bg-slate-800/20 px-2 text-slate-200 disabled:cursor-not-allowed disabled:opacity-50 group-hover:block"
        onClick={moveToLeft}
      >
        <div className="rotate-90">
          <IconArrow size={64} />
        </div>
      </button>

      <button
        className="absolute top-1/2 right-0 z-10 hidden h-full -translate-y-1/2 bg-slate-800/20 px-2 text-slate-200 disabled:cursor-not-allowed disabled:opacity-50 group-hover:block"
        onClick={moveToRight}
      >
        <div className="-rotate-90">
          <IconArrow size={64} />
        </div>
      </button>
    </div>
  );
};

export default FramerImageCarousel;
