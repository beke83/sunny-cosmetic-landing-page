import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBasketShopping, faUser, } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='navbar-items'>
        <div className="navbar-links-container">
          <p><a href="#home">Home <span><div className='rectangle' /></span></a></p>
          <p><a href='#about'>About Us</a></p>
          <p><a href="products">Products</a></p>
          <p><a href='#faq'>Faqs</a></p>
          <p><a href="contact">Contact Us</a></p>
        </div>
      </div>
      <div className="navbar-info">
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="basket-icon"><FontAwesomeIcon icon={faBasketShopping} />
          <span className="basket-item-qty">2</span>
        </div>
        <div><FontAwesomeIcon icon={faUser} /></div>
      </div>
    </div>
  )
}

export default Navbar
