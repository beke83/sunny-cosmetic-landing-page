import React from 'react';
import './whyChooseUs.css';
import PHScale from '../../assets/ph-scale.svg'
import ProductUse from '../../assets/product-use.svg'
import LearnMoreButton from '../../assets/preview-btn.svg'

const WhyChooseUs = () => {
  return (
    <>
      <div className="whyChooseUs chooseUs-padding">
        <p>Why choose us?</p>
        <div className="whyChooseUs-header">
          <h3>How to use ? learn more details.</h3>
          <div className="ph-info">
            <img src={PHScale} alt="phscale" />
            <div className="ph-info-details">
              <span>Dose not contain alcohol.</span>
              <span>PH 3.5</span>
            </div>
          </div>
        </div>
        <div className='how-to-use'>
          <div className="how-to-use-img">
            <img src={ProductUse} alt="use-product-img" />
          </div>
          <div className="how-to-use-description">
            <h5>Apply & Ingredients</h5>
            <p>Give your face that gorgeous sun-kissed look with high-quality bronzers! Makeup city is a house to international brands that sell natural-looking bronzers. Bronzing is about giving your face the perfect dimension and warmth. </p>
            <p>If you are looking for ways to warm up your pale skin, apply bronzer, and see the difference. Bronzer face seems the smart way to add glamour to your otherwise simplistic look.</p>
            <img src={LearnMoreButton} alt="learn-more-button" />
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
