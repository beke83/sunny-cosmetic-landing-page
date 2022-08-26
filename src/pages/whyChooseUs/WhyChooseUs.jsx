import React from 'react';
import './whyChooseUs.css';
import PHScale from '../../assets/ph-scale.svg'
import ProductUse from '../../assets/product-use.svg'
import LearnMoreButton from '../../assets/preview-btn.svg'
import { Flip, Rotate, Slide } from 'react-reveal';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';

const WhyChooseUs = () => {
  return (
    <>
      <div className="whyChooseUs chooseUs-padding">
        <Flip>
          <p>Why choose us?</p>
        </Flip>
        <div className="whyChooseUs-header">
          <Slide right>
            <h3>How to use ? learn more details.</h3>
          </Slide>
          <div className="ph-info">
            <Rotate bottom right>
              <img src={PHScale} alt="phscale" />
            </Rotate>
            <Jello>
              <div className="ph-info-details">
                <span>Dose not contain alcohol.</span>
                <span>PH 3.5</span>
              </div>
            </Jello>
          </div>

        </div>
        <div className='how-to-use'>
          <div className="how-to-use-img">
            <Flip right>
              <img src={ProductUse} alt="use-product-img" />
            </Flip>
          </div>
          <div className="how-to-use-description">
            <Slide right>
              <h5>Apply & Ingredients</h5>
            </Slide>
            <Slide left>
              <p>Give your face that gorgeous sun-kissed look with high-quality bronzers! Makeup city is a house to international brands that sell natural-looking bronzers. Bronzing is about giving your face the perfect dimension and warmth. </p>
            </Slide>
            <Slide top>
              <p>If you are looking for ways to warm up your pale skin, apply bronzer, and see the difference. Bronzer face seems the smart way to add glamour to your otherwise simplistic look.</p>
            </Slide>
            <RubberBand>
              <img src={LearnMoreButton} alt="learn-more-button" />
            </RubberBand>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
