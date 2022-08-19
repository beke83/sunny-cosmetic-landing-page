import React from 'react';
import './brand.css';
import { stripe, google, deloitte, accenture, samsung, ibm } from './imports';

const Brand = () => {
  return (
    <div className="brand brand-padding">
      <h4 className="brand-header">SOME OF OUR TRUSTED CLIENTS</h4>
      <div className="brand-logo-container scroll">
        <div>
          <img src={stripe} alt="google" />
        </div>
        <div>
          <img src={google} alt="google" />
        </div>
        <div>
          <img src={deloitte} alt="google" />
        </div>
        <div>
          <img src={ibm} alt="google" />
        </div>
        <div>
          <img src={accenture} alt="google" />
        </div>
        <div>
          <img src={samsung} alt="google" />
        </div>
      </div>
    </div>
  )
}

export default Brand
