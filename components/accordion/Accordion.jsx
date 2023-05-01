import { motion } from "framer-motion";
import { IconClose } from "../icons/Icons";
import React from "react";
import useMeasure from "react-use-measure";

const Accordion = ({ item, handleToggle, open }) => {
  let [ref, { height }] = useMeasure();

  const renderBackgroundById = (id) => {
    switch (id) {
      case 0:
        return "bg-amber-50 border-amber-400";
      case 1:
        return "bg-purple-50 border-purple-400";
      case 2:
        return "bg-rose-50 border-rose-400";
      default:
        return "bg-rose-50 border-rose-400";
    }
  };

  return (
    <div
      className={`min-w-[280px] max-w-2xl overflow-hidden border-l-4 shadow-sm ${renderBackgroundById(
        item.id
      )}`}
    >
      <button
        className="flex w-full items-center gap-4 p-4 text-2xl font-medium text-slate-700"
        onClick={handleToggle(item.id)}
      >
        <div className={`${!open && "-rotate-45"} transition-all duration-200`}>
          <i>
            <IconClose size={28} />
          </i>
        </div>
        <h3 className="">{item?.title}</h3>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? height : 0,
          opacity: open ? 1 : 0,
          marginTop: open ? 4 : 0,
        }}
      >
        <motion.div ref={ref}>
          <div className={`${open ? "block" : "hidden"} p-4 pt-0`}>
            <div>
              <p>{item?.content}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Accordion;
