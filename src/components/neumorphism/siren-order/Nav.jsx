import { IconBack, IconStar } from 'components/common/Icons'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/neumorphism">
        <button
          type="button"
          className="border-linear-gradient flex h-10 w-10 items-center justify-center rounded-full bg-light-neutral-50 text-light-neutral-600 shadow-custom-button"
        >
          <i>
            <IconBack />
          </i>
        </button>
      </Link>
      <p className="text-title-3 font-bold text-light-neutral-800">
        Siren Order
      </p>
      <button
        type="button"
        className="border-linear-gradient relative flex h-10 w-10 items-center justify-center rounded-full bg-light-neutral-50 text-light-neutral-600 shadow-custom-button"
      >
        <i className='text-light-pending-400'>
          <IconStar />
        </i>
      </button>
    </nav>
  )
}

export default Nav
