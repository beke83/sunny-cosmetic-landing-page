import React from 'react';
import './cta.css';

import CTAImage from '../../assets/cta-img.svg';

const CTA = () => {

  return (
    <div className="cta-banner">
      <div className="cta-text">
        <h3>Enough talk, let's make you look beautiful</h3>
        <p>There are many variations of to this product and you will love it all.</p>
      </div>
      <div className="cta-img">
        <img src={CTAImage} alt="product-image" />
      </div>
      <div className="cta-button">
        <button>Get started</button>
      </div>
    </div>
  )
}

export default CTA
