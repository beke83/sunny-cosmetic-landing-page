import React from 'react';
import './footer.css';

import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='footer footer-padding'>
      <div className="footer-links">
        <div className="footer-links-logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 Alknjkcb, Pakistan</p>
        </div>
        <div className="footer-links-div">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Products</p>
          <p>Testimonial</p>
        </div>
        <div className="footer-links-div">
          <h4>Privacy</h4>
          <p>Privacy</p>
          <p>Policy</p>
          <p>Payment</p>
          <p>Terms</p>
        </div>
        <div className="footer-links-div">
          <h4>Contact</h4>
          <p>+02 345 969 22</p>
          <p>Crechterwoord K12 Alknjkcb, Pakistan</p>
          <p>benDdev@gmail.com</p>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>© Copyright2022 sunny (benDdev). All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
