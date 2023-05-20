import { IconCoupon, IconGift, IconSiren } from 'components/common/Icons'
import Link from 'next/link'
import React from 'react'

const Favorites = () => {
  const list = [
    {
      id: 0,
      icon: <IconSiren />,
      link: 'neumorphism/siren-order',
      label: 'Siren Order',
    },
    {
      id: 1,
      icon: <IconGift />,
      link: 'neumorphism/siren-order',
      label: 'Gift shop',
    },
    {
      id: 2,
      icon: <IconCoupon />,
      link: 'neumorphism/siren-order',
      label: 'e-Coupon',
    },
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-title-1 font-semibold text-light-neutral-800">
        Favorites
      </h3>
      <div className="flex gap-5 overflow-x-auto px-1 pb-4">
        {list.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="flex min-w-[120px] flex-col gap-5 rounded-[10px] bg-light-neutral-50 p-4 shadow-custom-sm"
          >
            <div className="border-gradient-linear flex aspect-square w-9 items-center justify-center rounded-full shadow-custom-sm">
              <i>{item.icon}</i>
            </div>

            <div className="text-body-2 font-semibold">{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Favorites
