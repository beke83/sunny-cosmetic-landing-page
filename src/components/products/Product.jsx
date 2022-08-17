import React from 'react';
import './product.css';

const Product = ({image, productName, productDesc}) => {
  return (
      <div className="feature-product-details-container">
        <div className="feature-product-image">
          <img src={image} alt="product-img" />
        </div>
        <div className="feature-product-details">
          <h3>{productName}</h3>
          <p>{productDesc}</p>
          <p>Load More</p>
        </div>
      </div>
  )
}

export default Product
