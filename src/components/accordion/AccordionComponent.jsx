import React, { useState } from 'react'
import accordionData from 'src/data/accordionData'
import Accordion from './Accordion'

const AccordionComponent = () => {
  const [openKey, setOpenKey] = useState(0)

  const handleToggle = (key) => () => {
    setOpenKey(openKey !== key ? key : null)
  }

  return (
    <div className="space-y-4">
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          item={item}
          handleToggle={handleToggle}
          open={openKey === item.id}
        />
      ))}
    </div>
  )
}

export default AccordionComponent
