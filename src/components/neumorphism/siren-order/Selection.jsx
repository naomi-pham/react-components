import Counter from 'components/common/Counter'
import { IconCart, IconCheck, IconFire, IconIce } from 'components/common/Icons'
import { useCallback, useState } from 'react'

const Selection = () => {

  const [count, setCount] = useState(1)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])

  return (
    <section className="flex flex-col gap-5">
      {/* Price */}
      <div className="flex justify-between">
        <p className="flex items-start gap-2">
          <span>$</span>
          <span className="leading-0 text-title-1 font-semibold text-light-neutral-800">
           {( count * 4.65).toFixed(2)}
          </span>
        </p>
        <Counter count={count} increment={increment} decrement={decrement} />
      </div>

      {/* Hot or cold */}
      <div className="border-linear-gradient flex rounded-full p-1 shadow-custom-inner-sm">
        <button
          type="button"
          className="flex w-1/2 items-center justify-center gap-[6px] rounded-full p-4 text-body-2 font-semibold text-light-error-400 shadow-custom-button"
        >
          <i>
            <IconFire />
          </i>
          Hot
        </button>
        <button
          type="button"
          className="flex w-1/2 items-center justify-center gap-[6px] rounded-full p-4 text-body-2 font-semibold text-light-neutral-600"
        >
          <i>
            <IconIce />
          </i>
          Cold
        </button>
      </div>

      {/* Size */}
      <div className="border-linear-gradient grid grid-cols-4 rounded-full p-1 shadow-custom-inner-sm">
        <button
          type="button"
          className="flex items-center justify-center gap-[6px] rounded-full p-4 text-body-2 font-semibold text-light-neutral-600"
        >
          Short
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-[6px] rounded-full p-4 text-body-2 font-semibold text-light-neutral-800 shadow-custom-button"
        >
          Tall
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-[6px] rounded-full p-4 text-body-2 font-semibold text-light-neutral-600"
        >
          Grande
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-[6px] rounded-full p-4 text-body-2 font-semibold text-light-neutral-600"
        >
          Venti
        </button>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 divide-x-2 divide-light-neutral-25/50 shadow-custom-sm rounded-full mt-2.5">
      <button type="button" className="py-5 font-semibold flex justify-center items-center gap-1">
          <i>
            <IconCart />
          </i>
          Add to cart
        </button>
        <button type="button" className="py-5 font-semibold text-light-success-500 flex justify-center items-center gap-1">
          <i>
            <IconCheck />
          </i>
          Order now
        </button>
      </div>
    </section>
  )
}

export default Selection
