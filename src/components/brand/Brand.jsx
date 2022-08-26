import React from 'react';
import { Fade, LightSpeed, Rotate, Slide, Zoom } from 'react-reveal';
import './brand.css';
import { stripe, google, deloitte, accenture, samsung, ibm } from './imports';

const Brand = () => {
  return (
    <div className="brand brand-padding">
      <h4 className="brand-header">SOME OF OUR TRUSTED CLIENTS</h4>
      <div className="brand-logo-container scroll">
        <Slide right>
          <div>
            <img src={stripe} alt="google" />
          </div>
        </Slide>
        <Fade top>
          <div>
            <img src={google} alt="google" />
          </div>
        </Fade>
        <LightSpeed bottom>
          <div>
            <img src={deloitte} alt="google" />
          </div>
        </LightSpeed>
        <Rotate top>
          <div>
            <img src={ibm} alt="google" />
          </div>
        </Rotate>
        <Zoom>
          <div>
            <img src={accenture} alt="google" />
          </div>
        </Zoom>
        <Slide right>
          <div>
            <img src={samsung} alt="google" />
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Brand
