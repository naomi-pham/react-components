import React from 'react'
import ToggleDayNight from './ToggleDayNight'

const ToggleList = () => {
  const list = [
    {
      id: 0,
      label: 'Day night switcher',
      component: <ToggleDayNight />,
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

export default ToggleList
