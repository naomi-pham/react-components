import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useState } from 'react'

const ToggleNeumorphism = () => {
  const [isNight, setIsNight] = useState(false)

  const handleSetNight = () => {
    setIsNight(true)
  }

  const handleSetDay = () => {
    setIsNight(false)
  }

  return (
    <MotionConfig>
      <AnimatePresence>
        <div className="h-[42px] w-[80px] rounded-full bg-light-neutral-50 p-1 shadow-custom-button">
          <div className="flex h-full w-full items-center rounded-full bg-light-neutral-300 shadow-custom-inner-sm">
            {/* Button */}
            <motion.button
              type="button"
              initial={false}
              onClick={isNight ? handleSetDay : handleSetNight}
              animate={{ x: isNight ? 44 : 6 }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.6,
                ease: 'easeInOut',
              }}
              className="aspect-square w-6 rounded-full bg-light-neutral-50 shadow-custom-button"
            />
          </div>
        </div>
      </AnimatePresence>
    </MotionConfig>
  )
}

export default ToggleNeumorphism
