import { IconBell, IconHamburger, IconLogo } from 'components/common/Icons'
import React from 'react'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="border-linear-gradient flex h-10 w-10 items-center justify-center rounded-full bg-light-neutral-50 text-light-neutral-600 shadow-custom-button">
        <i>
          <IconHamburger />
        </i>
      </div>
      <i>
        <IconLogo />
      </i>
      <div className="relative">
        <IconBell />
        <div className="absolute right-[2px] top-0 flex h-2 w-2 items-center justify-center rounded-full border-2 border-light-neutral-50">
          <div className="h-1 w-1 rounded-full bg-light-error-400"></div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
