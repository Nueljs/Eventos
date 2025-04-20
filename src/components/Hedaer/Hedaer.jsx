import React, { useState } from 'react'
import './Hedaer.css'
import logo from '../../assets/img/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";

export const Hedaer = () => {
  const isAuth = true;
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
     <header className="d-flex justify-content-center justify-content-md-between p-3 flex-md-row flex-column">
      <div className="d-flex flex-md-row flex-column align-items-center gap-4">
        <img className="logo-header" src={logo} alt="Logo de la empresa" />

        <button 
          className='navbar-toggler d-md-none' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}
        >
          <GiHamburgerMenu/>
        </button>

        <nav className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
        
          <ul className="d-flex flex-column flex-md-row gap-4 mb-0 list-unstyled">

            <li><a href="home.php" className="nav-header">Home</a></li>
            <li><a href="catalog-events.html" className="nav-header">Events</a></li>
            <li><a href="about-us.html" className="nav-header">About us</a></li>
          </ul>
        </nav>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-center gap-4 mt-3 mt-md-0">
        <div className="search-box flex-grow-1">
          <input className="search-box-input" type="text" placeholder="Search..." />
          <button className="search-box-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="d-flex gap-3">
          <a href="carrito.php" className="icons"><i className="fa-solid fa-cart-shopping"></i></a>
          <a href="login.php" className="icons"><i className="fa-solid fa-user"></i></a>
          {isAuth &&(<a href="" className="icons"><i class="fa-solid fa-right-from-bracket"></i></a>)}
          
        </div>
      </div>
    </header>
  )
}
