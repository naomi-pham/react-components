import { IconChevron } from 'components/common/Icons'
import Image from 'next/image'
import mac from 'public/images/landing-page/apple/mac-2.png'

const Main = () => {
  return (
    <div className="flex h-full">
      <div className='flex justify-between flex-col mt-24 px-2'>
        <div className="space-y-12">
          <div className="mb-2 space-y-[14px]">
            <p className="text-title-1 font-semibold">MacBook Pro</p>
            <h1 className="text-[96px] leading-[114px] font-bold">The best for the brightest.</h1>
          </div>
          <p className='text-body-1'>
            Designed for those who defy limits and change the world, the new
            MacBook Pro is by far the most powerful notebook we’ve ever made.
          </p>
          <button type="button" className="flex gap-2 bg-branding-secondary-200 shadow-box-sm py-3 px-8 rounded-2xl">
            See more
            <span>
              <i>
                <IconChevron />
              </i>
            </span>
          </button>
        </div>

        <div className="flex gap-4">
          <div className="aspect-square w-3 rounded-full shadow-button-md"></div>
          <div className="aspect-square w-3 rounded-full shadow-button-md"></div>
          <div className="aspect-square w-3 rounded-full shadow-button-md"></div>
        </div>
      </div>

      <div className="relative h-full w-[1024px] translate-x-[180px] outline rounded-2xl">
        <Image src={mac} alt="mac-1" fill className="object-fill inset-0 absolute rounded-2xl" />
      </div>
    </div>
  )
}

export default Main
