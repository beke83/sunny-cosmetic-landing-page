import React, { useState } from 'react'
import AccordionItem from './AccordionItem';
import { questions } from './data';
import './accordion.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderedFaq = questions.map((item, index) => {
    const showDescription = index === activeIndex ? "accordion-item-card-active" : "accordion-item-card";
    return (
      <AccordionItem
        showDescription={showDescription}
        activeIndex={activeIndex}
        index={index}
        item={item}
        onClick={() => setActiveIndex(index)}
      />
    );
  });

  return (
    <div className="accordion-container">
      <div className="accordion-container-group">
        {renderedFaq}
      </div>
    </div>
  )
}

export default Accordion
