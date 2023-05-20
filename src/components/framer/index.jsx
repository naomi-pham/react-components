import React from 'react'
import StaggerChildren from './StaggerChildren'
import FollowPointer from './FollowPointer'
import ExitAnimation from './ExitAnimation'
import Gestures from './Gestures'

const FramerList = () => {
  const list = [
    {
      id: 0,
      label: 'Stagger Children',
      component: <StaggerChildren />,
    },
    {
      id: 1,
      label: 'Follow Pointer',
      component: <FollowPointer />,
    },
    {
      id: 2,
      label: 'Exit animation',
      component: <ExitAnimation />,
    },
    {
      id: 3,
      label: 'Gestures',
      component: <Gestures />,
    },
  ]
  return (
    <div className="space-y-10">
      {list.map((item) => (
        <div key={item.id} className="space-y-6">
          <p className="text-title-2 font-semibold text-branding-secondary-500">
            {item.label}
          </p>
          <div>{item.component}</div>
        </div>
      ))}
    </div>
  )
}

export default FramerList
