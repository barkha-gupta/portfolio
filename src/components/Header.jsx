import React, {useContext} from 'react';
import {Context} from "../Context";

export default function Header() {
  const {handleNavToggle, navToggle}= useContext(Context);
  return (
    <header id="header" className={ navToggle ? "nav-open": "" }>
        <div className='logo'>
          <i className="fa-solid fa-laptop-code"><span style={{"fontSize": "1rem"}}>barkhagupta</span></i>
        </div>
        <button 
          className="nav-toggle" 
                aria-label="toggle navigation"
                onClick={()=> handleNavToggle()}>
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item" onClick={()=> handleNavToggle()}>
                      <a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item" onClick={()=> handleNavToggle()}>
                      <a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item" onClick={()=> handleNavToggle()}>
                      <a href="#about" className="nav__link">About me</a></li>
                    <li className="nav__item" onClick={()=> handleNavToggle()}>
                      <a href="#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
    </header>
  )
}
