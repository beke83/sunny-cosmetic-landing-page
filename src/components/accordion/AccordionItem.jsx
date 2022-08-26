import React, { useState } from 'react';
import './accordionItem.css';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccordionItem = ({ onClick, index, item, showDescription, }) => {
    return (
        <>
                <div
                    id={`${index + 1}`}
                    className={`${showDescription}`}
                >
                    <div className="accordion-details">
                        <div className='accordion-button'>
                            <button
                                // aria-expanded={ariaExpanded}
                                aria-controls={`${index + 1}`}
                                onClick={onClick}
                            >
                                <FontAwesomeIcon icon={faPlus} size='2x' className='fa-minus-color' />
                            </button>
                        </div>
                        <div className='accordion-question'>
                            {item.question}
                        </div>
                    </div>
                    <p
                        className='accordion-item show-desc'>
                        {item.answer}
                    </p>
                </div>
        </>
    )
}

export default AccordionItem
