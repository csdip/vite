import React, { useState } from 'react';
import '../scss/components/_header.scss';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets';

function Header() {


  const [isActive, setisActive] = useState(false);


  const handleClick = () =>{
    setisActive(!isActive)
  }
 



  return (
    <>
    <div onClick={()=>handleClick()} className={`overlay ${isActive ? "active" : ""}`}></div>
     <header className='header' id='header'>
      <div className="container">
        <div className="row">
          <div className="col d-flex align-center justify-between">
            <NavLink to="/vite" className="header__logo"><img src={assets.logo} alt="logo" /></NavLink>
              <ul onClick={()=>handleClick()} className={`header__main-menu ${isActive ? "active" : ""}`}>
                <li><NavLink to="/vite" className={({isActive})=>`${isActive ? "active" : ""}`}>home</NavLink></li>
                <li><NavLink to="/vite/about" className={({isActive})=>`${isActive ? "active" : ""}`}>about us</NavLink></li>
                <li><NavLink to="/vite/plan" className={({isActive})=>`${isActive ? "active" : ""}`}>create your plane</NavLink></li>
              </ul>
            <div onClick={()=>handleClick()} className={`header__nav-btn ${isActive ? "active" : ""}`}></div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header