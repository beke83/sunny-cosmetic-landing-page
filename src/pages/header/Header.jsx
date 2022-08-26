import React from 'react';
import './header.css';
import DeliveryMan from '../../assets/delivery-man.svg';
import VideoButton from '../../assets/video-btn.svg';
import Vector from '../../assets/vector-curve.svg';
import ProductImage from '../../assets/product-image.svg';
import ProductDetails from '../../assets/product-details.svg';
import { Roll, Slide, Zoom } from 'react-reveal';
import Jump from 'react-reveal/Jump';

const Header = () => {
  return (
    <div className="header section-padding" id="home">
      <div className='curve'>
        <img src={Vector} alt="" />
      </div>
      <div className="header-content">
        <Jump>
          <p className="delivery">Free delivery worldwide
            <span>
              <img src={DeliveryMan} alt="delivery-man" />
            </span>
          </p>
        </Jump>
        <Roll left>
          <h1>Foundation Matte & Poreless</h1>
          <h4>Maybelline’s #1 foundation perfect for oily skin. No stickiness, no shine.</h4>
          <div className="header-button-container">
            <div className="header-button">
              <button>Add to cart</button>
            </div>
            <img src={VideoButton} alt="play-button" />
            <p>How It Works</p>
          </div>
        </Roll>
      </div>
      <Slide bottom>
      <div className="header-product-img">
        <img src={ProductImage} alt="product-image" />
      </div>
      </Slide>
      <Slide top>
      <div className='product-tag'>
        <img src={ProductDetails} alt="product-details" />
      </div>
      </Slide>
    </div>
  )
}

export default Header
