import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const Accordion = () => {
    const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div>
      <AccordionItem
      ariaExpanded={true}
      onClick={() => setAccordionOpen(true)}
      />
    </div>
  )
}

export default Accordion
