import { IconCart } from 'components/common/Icons'
import Main from 'components/landing-page/apple/Main'
import Sidebar from 'components/landing-page/apple/Sidebar'
import React from 'react'

const AppleLandingPage = () => {
  return (
    <div className=" bg-light-linear-blue flex max-h-screen min-h-screen gap-[115px] text-branding-secondary-700">
      <Sidebar />
      <div className="flex w-full flex-1 flex-col overflow-x-hidden space-y-11 py-8">
        <div className="self-end pr-[42px]">
          <button
            type="button"
            className="flex aspect-square w-[60px] items-center justify-center rounded-2xl bg-branding-secondary-200 shadow-box-sm"
          >
            <IconCart size={24} />
          </button>
        </div>
        <Main />
      </div>
    </div>
  )
}

export default AppleLandingPage
