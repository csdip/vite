import React from 'react';
import '../scss/components/_footer.scss';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets';

function Footer() {
  return (
    <footer id="footer" className="footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="footer__wrapper d-flex align-center justify-between">
                        <NavLink to="/vite" className="logo"><img src={assets.logoLight} alt="logo" /></NavLink>
                        <ul className="footer__menu d-flex align-center">
                            <li><NavLink to="/vite">home</NavLink></li>
                            <li><NavLink to="/vite/about">about us</NavLink></li>
                            <li><NavLink to="/vite/plan">create your plane</NavLink></li>
                        </ul>
                        <ul className="footer__socials d-flex align-center">
                            <li><a href="#"><i className="ri-twitter-x-line"></i></a></li>
                            <li><a href="#"><i className="ri-facebook-circle-line"></i></a></li>
                            <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer