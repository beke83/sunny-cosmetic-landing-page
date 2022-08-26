import React from 'react';
import './feature.css';
import ProductOne from '../../assets/product1.svg';
import ProductTwo from '../../assets/product2.svg';
import Product from '../../components/products/Product';
import { Fade, Slide, Zoom } from 'react-reveal';

const Feature = () => {
  return (
    <>
      <Fade left>
        <div className="feature-heading feature-padding" id="about">
          <h2>Best Cosmetic Products</h2>
          <p>Launched in 2002, Makeup City has brought renowned international personal care brands under one roof for the first time in Pakistan. from a journey of a few stores, we have grown significantly, by making our brands available to almost every where a person can think off.</p>
        </div>
      </Fade>
      <div className='feature product-padding'>
        <Zoom right>
          <div className="feature-product-image">
            <img src={ProductOne} alt="product-img" />
          </div>
        </Zoom>
        <Fade right>
          <div className="feature-product-details">
            <h3>GOS- Primer Plus 30 ML</h3>
            <p>GOSH COPENHAGEN offers a wide selection of products in different categories: Cosmetics, Fragrances, Hair Care, Face Care, Body Care. GOSH Cosmetics are available online. </p>
            <p>Load More</p>
          </div>
        </Fade>
      </div>
      <div className='feature product-padding reverse'>
        <Slide top>
          <div className="feature-product-image">
            <img src={ProductTwo} alt="product-img" />
          </div>
        </Slide>
        <Fade left>
          <div className="feature-product-details">
            <h3>HD Micro Foundation Matifying Liquid</h3>
            <p>HD Micro Foundation Matifying Liquid is a micronized and gently mattifying foundation with vitamin E for the most natural look. </p>
            <p>Load More</p>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Feature
