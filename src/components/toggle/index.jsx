import React from 'react'
import ToggleDayNight from './ToggleDayNight'
import ToggleNeumorphism from './ToggleNeumorphism'

const ToggleList = () => {
  const list = [
    {
      id: 0,
      label: 'Day night toggle',
      component: <ToggleDayNight />,
    },
    {
      id: 1,
      label: 'Neumorphism toggle',
      component: <ToggleNeumorphism />,
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
