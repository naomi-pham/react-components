import { Listbox } from '@headlessui/react'
import { IconArrow, IconCheck } from 'components/common/Icons'
import { useState } from 'react'
import selectData from 'src/data/selectData'

const Select = () => {
  const [selected, setSelected] = useState(selectData.deliveryStatus[0])
  return (
    <div>
      <div className="flex gap-4">
        <Listbox
          as="div"
          value={selected}
          onChange={setSelected}
          className="relative"
        >
          <Listbox.Button className="flex min-w-[300px] items-center justify-between rounded-lg border border-slate-300 px-3 py-2 text-slate-700 focus:outline-none focus:ring-1 focus:ring-rose-400">
            <span>{selected.label || 'Delivery status'}</span>
            <span>
              <i>
                <IconArrow />
              </i>
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute top-12 w-full space-y-2 rounded-lg border border-slate-200 bg-white p-2 shadow-md">
            {selectData.deliveryStatus.map((status) => (
              <Listbox.Option key={status.id} value={status}>
                {({ selected }) => (
                  <>
                    <div
                      className={`flex w-full justify-between rounded-lg px-2 py-3 text-slate-700 hover:cursor-pointer hover:bg-slate-100 ${
                        selected ? 'bg-slate-100' : 'bg-white'
                      }`}
                    >
                      {status.label}
                      {selected ? (
                        <span>
                          <IconCheck />
                        </span>
                      ) : null}
                    </div>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  )
}

export default Select
