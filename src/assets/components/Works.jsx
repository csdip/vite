import React from 'react';
import '../scss/components/_works.scss';
import { worksData } from '../assets';
import { NavLink } from 'react-router-dom';

function Works() {
  return (
    <section id="works" className="works">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="sec-title works-title">
                        <h2>How it works</h2>
                        <div className='line'>
                            <span className='circle1'></span>
                            <span className='circle2'></span>
                            <span className='circle3'></span>
                        </div>
                    </div>
                        <div className="works__wrapper">
                            {worksData.map((works, index)=>(
                                <div className="works__single" key={index}>
                                    <strong>{works.no}</strong>
                                    <h4>{works.title}</h4>
                                    <p>{works.des}</p>
                                </div>
                            ))}
                        </div>
                        <div className="works__btn">
                            <NavLink to="/vite/plan" className="btn">Create your plan</NavLink>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works