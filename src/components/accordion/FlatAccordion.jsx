import { IconChevron } from 'components/common/Icons'
import { motion } from 'framer-motion'
import React from 'react'
import useMeasure from 'react-use-measure'

const FlatAccordion = ({ item, handleToggle, open }) => {
  let [ref, { height }] = useMeasure()

  return (
    <div className="min-w-[100px] max-w-sm overflow-hidden bg-slate-700 text-slate-100 shadow-sm">
      <button
        type="button"
        className="text-xl flex w-full items-center justify-between gap-4 bg-rose-400 p-4  font-semibold"
        onClick={handleToggle(item?.id)}
      >
        <h3 className="">{item?.label}</h3>
        <div className={`${open && '-rotate-90'} transition-all duration-200`}>
          <i>
            <IconChevron />
          </i>
        </div>
      </button>

      {item?.dropdown && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : 0,
            opacity: open ? 1 : 0,
            marginTop: open ? 1 : 0,
          }}
        >
          <motion.div ref={ref}>
            <div className={`${open ? 'block' : 'hidden'} p-4`}>
              <ul className="text-lg list-disc space-y-2 font-medium">
                {item?.dropdown?.map((i, index) => (
                  <li key={index} className="ml-6">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default FlatAccordion
