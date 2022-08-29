import React from 'react';
import './cta.css';

import CTAImage from '../../assets/cta-img.svg';
import { Fade, Slide, Zoom } from 'react-reveal';
import Wobble from 'react-reveal/Wobble';

const CTA = () => {

  return (
    <div className="cta-banner">
      <div className="cta-text">
        <Fade bottom>
          <h3>Enough talk, let's make you look beautiful</h3>
        </Fade>
        <Slide right>
          <p>There are many variations of to this product and you will love it all.</p>
        </Slide>
      </div>
      <Zoom>
        <div className="cta-img">
          <img src={CTAImage} alt="product-image" />
        </div>
      </Zoom>
      <Wobble>
        <div className="cta-button">
          <button>Get started</button>
        </div>
      </Wobble>
    </div>
  )
}

export default CTA
