import React, { useState } from 'react'
import { flatAccordionData } from 'src/data/accordionData'
import FlatAccordion from './FlatAccordion'

const AccordionMenu = () => {
  const [openKey, setOpenKey] = useState(0)

  const handleToggle = (key) => () => {
    setOpenKey(openKey !== key ? key : null)
  }

  return (
    <div>
      {flatAccordionData.map((item) => (
        <FlatAccordion
          key={item.id}
          item={item}
          handleToggle={handleToggle}
          open={openKey === item.id}
        />
      ))}
    </div>
  )
}

export default AccordionMenu
