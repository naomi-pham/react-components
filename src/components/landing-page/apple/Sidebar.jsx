import React from 'react'
import logo from 'public/images/landing-page/apple/humac.png'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  const list = [
    {
      id: 0,
      label: 'Mac',
      link: '/mac',
    },
    {
      id: 1,
      label: 'iPhone',
      link: '/iPhone',
    },
    {
      id: 2,
      label: 'iPad',
      link: '/iPad',
    },
    {
      id: 3,
      label: 'Watch',
      link: '/watch',
    },
    {
      id: 4,
      label: 'SALE',
      link: '/sALE',
    },
    {
      id: 5,
      label: 'Service',
      link: '/service',
    },
  ]

  return (
    <div className="space-y-[69px] p-[60px] min-w-[330px] bg-light-linear-blue shadow-2xl rounded-[40px] min-h-screen">
      <Image src={logo} alt="brand logo" width={90} height={23} className='object-cover' />

      <ul className='flex flex-col gap-6'>
        {list.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
