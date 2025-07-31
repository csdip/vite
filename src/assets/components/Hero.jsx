import React from 'react';
import '../scss/components/_hero.scss';
import { heroContent } from '../assets';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="wrapper">
                <div className="hero__text-content">
                <h1>{heroContent.title}</h1>
                <p>{heroContent.para}</p>
                <NavLink to="/vite/plan" className="btn">Create your plan</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero