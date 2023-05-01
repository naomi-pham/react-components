import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import React, { useState } from "react";
import CarouselCard from "../@ui/CarouselCard";
import { slides } from "../data/carouselData";
import { IconChevron } from "../icons/Icons";

const FramerCarousel = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState();

  const carouselVariants = {
    enter: (direction) => ({
      x: `${100 * direction}%`,
      opacity: 0,
      scale: 1.2,
    }),
    middle: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: `-${100 * direction}%`,
      opacity: 0.2,
      scale: 1,
    }),
  };

  const moveToRight = () => {
    enableAnimation();

    if (step === slides.length - 1) {
      setStep(0);
    } else setStep(step + 1);
    setDirection(1);
  };

  const moveToLeft = () => {
    enableAnimation();

    if (step === 0) {
      setStep(slides.length - 1);
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

  return (
    <div className="relative max-w-3xl">
      <MotionConfig
        transition={{ duration: 1, ease: [0.56, 0.03, 0.12, 1.04] }}
      >
        <div className="z-0 mx-16 overflow-hidden">
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
            >
              <CarouselCard item={slides[step]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionConfig>

      <button
        className="absolute top-1/2 left-0 z-20 h-full w-10 -translate-y-1/2 rotate-180 px-2 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={moveToLeft}
      >
        <IconChevron />
      </button>

      <button
        className="absolute top-1/2 right-0 z-20 h-full w-10 -translate-y-1/2 px-2 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={moveToRight}
      >
        <IconChevron />
      </button>
    </div>
  );
};

export default FramerCarousel;
