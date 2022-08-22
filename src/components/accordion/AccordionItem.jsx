import React from 'react';
import './accordionItem.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccordionItem = ({ariaExpanded,onClick}) => {
    return (
        <>
            <div className='accordion-container'>
                <div className="accordion-item-container-groupA">
                    <div className="accordion-item-card" ariaExpanded={ariaExpanded}>
                        <div className='accordion-button'>
                            <button
                            aria-expanded={ariaExpanded}
                             onClick={onClick}>
                            <FontAwesomeIcon icon={faPlus} size='2x' />
                            </button>
                        </div>
                        <div className='accordion-question'>
                            How long until we deliver your product.
                        </div>
                        <p
                        className='show-desc'
                        >
                            lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum
                            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                        </p>
                    </div>
                    <div className="accordion-item-card">
                        <div className='accordion-button'>
                            <FontAwesomeIcon icon={faPlus} size='2x' />
                        </div>
                        <div className='accordion-question'>
                            How long until we deliver your product.
                        </div>
                    </div>
                </div>

                <div className="accordion-item-container-groupB">
                    <div className="accordion-item-card">
                        <div className='accordion-button'>
                            <FontAwesomeIcon icon={faPlus} size='2x' />
                        </div>
                        <div className='accordion-question'>
                            How long until we deliver your product.
                        </div>
                    </div>
                    <div className="accordion-item-card">
                        <div className='accordion-button'>
                            <FontAwesomeIcon icon={faPlus} size='2x' />
                        </div>
                        <div className='accordion-question'>
                            How long until we deliver your product.
                        </div>
                    </div>
                    <div className="accordion-item-card">
                        <div className='accordion-button'>
                            <FontAwesomeIcon icon={faPlus} size='2x' />
                        </div>
                        <div className='accordion-question'>
                            How long until we deliver your product.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionItem
