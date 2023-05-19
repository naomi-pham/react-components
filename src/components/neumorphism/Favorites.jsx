import React from 'react'
import { IconSiren, IconCoupon, IconGift } from '../common/Icons'

const Favorites = () => {
  const list = [
    {
      id: 0,
      icon: <IconSiren />,
      label: 'Siren Order',
    },
    {
      id: 1,
      icon: <IconGift />,
      label: 'Gift shop',
    },
    {
      id: 2,
      icon: <IconCoupon />,
      label: 'e-Coupon',
    },
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-title-3 font-semibold text-light-neutral-800">
        Favorites
      </h3>
      <div className="flex gap-5 overflow-x-auto px-1 pb-4">
        {list.map((item) => (
          <div
            key={item.id}
            className="flex min-w-[120px] flex-col gap-5 rounded-[10px] bg-light-neutral-50 p-4 shadow-custom-sm"
          >
            <div className="border-gradient-linear flex aspect-square w-9 items-center justify-center rounded-full shadow-custom-sm">
              <i>{item.icon}</i>
            </div>

            <p className="text-body-2 font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
