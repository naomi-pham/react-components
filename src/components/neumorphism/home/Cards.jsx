import React from 'react'
import card from '/public/images/starbucks/card.png'
import Image from 'next/image'
import { IconArrow } from 'components/common/Icons'

const Cards = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-2 text-light-neutral-800">
        <h3 className="text-title-3 font-semibold">Cards</h3>
        <div className="rounded-xl bg-light-neutral-200 px-3 py-[2px] text-body-2">
          6
        </div>
      </div>

      <div className="flex items-center justify-between rounded-[10px] bg-light-neutral-50 p-5 shadow-custom-sm">
        <div className="flex gap-5">
          <div className="relative flex h-[62px] w-[100px] items-center gap-5">
            <Image
              src={card}
              alt="starbucks-card"
              className="absolute inset-0 rounded-[5px] object-cover"
            />
          </div>
          <div className="space-y-2">
            <p className="text-body-2">My first card</p>
            <p className="flex gap-2">
              <span>$</span>
              <span className="leading-0 text-title-1 font-semibold text-light-neutral-800">
                139.20
              </span>
            </p>
          </div>
        </div>

        <i className="-rotate-90 text-light-neutral-600">
          <IconArrow size={30} />
        </i>
      </div>
    </div>
  )
}

export default Cards
