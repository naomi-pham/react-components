import { memo } from 'react'
import { IconAdd, IconMinus } from './Icons'

const Counter = ({increment, decrement, count}) => {

  // console.log("counter rendered")

  return (
    <div className="border-linear-gradient flex items-center justify-between rounded-full bg-light-neutral-50 p-1 shadow-custom-inner-sm">
      <button
        type="button"
        className="border-linear-gradient flex aspect-square w-[42px] items-center justify-center rounded-full bg-light-neutral-50 text-light-neutral-600 shadow-custom-button disabled:opacity-50"
        onClick={decrement}
        disabled={count === 0}
      >
        <IconMinus />
      </button>
      <span className="px-[27.5px] text-body-2 text-light-neutral-800">
        {count}
      </span>
      <button
        type="button"
        className="border-linear-gradient flex aspect-square w-[42px] items-center justify-center rounded-full bg-light-neutral-50 text-light-neutral-600 shadow-custom-button disabled:opacity-50"
        onClick={increment}
        disabled={count === 20}
      >
        <IconAdd />
      </button>
    </div>
  )
}

export default memo(Counter)