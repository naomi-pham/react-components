import React, { useState } from "react";
import Accordion from "./Accordion";
import accordionData from "../data/accordionData";

const AccordionComponent = () => {
  const [openKey, setOpenKey] = useState();

  const handleToggle = (key) => () => {
    setOpenKey(openKey !== key ? key : null);
  };
  

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
  );
};

export default AccordionComponent;
