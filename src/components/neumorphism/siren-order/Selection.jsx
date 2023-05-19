import { IconAdd, IconMinus } from 'components/common/Icons'
import React from 'react'

const Selection = () => {
  return (
    <section>
      {/* Price */}
      <div className="flex justify-between">
        <p className="flex gap-2 items-start">
          <span>$</span>
          <span className="leading-0 text-title-1 font-semibold text-light-neutral-800">
            4.65
          </span>
        </p>
        <div className="border-linear-gradient flex items-center justify-between rounded-full bg-light-neutral-50 p-1 shadow-inner-sm">
          <button
            type="button"
            className="border-linear-gradient shadow-custom-button flex aspect-square w-[42px] items-center justify-center rounded-full bg-light-neutral-50 text-light-neutral-600"
          >
            <IconMinus />
          </button>
          <span className="text-body-2 text-light-neutral-800 px-[27.5px]">1</span>
          <button
            type="button"
            className="border-linear-gradient shadow-custom-button flex aspect-square w-[42px] items-center justify-center rounded-full bg-light-neutral-50 text-light-neutral-600"
          >
            <IconAdd />
          </button>
        </div>
      </div>

      {/* Hot or cold */}

      {/* Size */}

      {/* Buttons */}
    </section>
  )
}

export default Selection
