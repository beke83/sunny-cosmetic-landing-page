import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBasketShopping, faUser, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
    <>
      <p><a href="#home">Home <span><div className='rectangle' /></span></a></p>
      <p><a href='#about'>About Us</a></p>
      <p><a href="products">Products</a></p>
      <p><a href='#faq'>Faqs</a></p>
      <p><a href="contact">Contact Us</a></p>
    </>
  );
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='navbar-items'>
        <div className="navbar-links-container">
          <Menu />
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
      <div className="navbar-menu">
        {toggleMenu ? (
          <FontAwesomeIcon icon={faXmark} size='2x' onClick={() => setToggleMenu(false)}
            className='flip-scale-down-ver' />
        ) : (
          <FontAwesomeIcon icon={faBars} size='2x'
            onClick={() => setToggleMenu(true)}
            className='flip-scale-down-ver'
          />
        )}
        {
          toggleMenu && (
            <div className="navbar-menu-container scale-up-center">
              <div className="navbar-menu-container-links">
                <Menu />
              </div>
              <div className="navbar-menu-info">
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
      </div>
    </div>
  )
}

export default Navbar
