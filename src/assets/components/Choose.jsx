import React from 'react';
import '../scss/components/_choose.scss';
import { chooseData } from '../assets';

function Choose() {
  return (
    <section id="choose" className="choose">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="wrapper">
                         <div className="sec-title">
                            <h2>Why choose us ?</h2>
                            <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                         </div>
                        <div className="single-wrapper">
                        {chooseData.map((choose, index)=>(
                            <div className="single" key={index}>
                                <img src={choose.icon} alt="icon" />
                                <div className="text-content">
                                    <h3>{choose.title}</h3>
                                    <p>{choose.des}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Choose