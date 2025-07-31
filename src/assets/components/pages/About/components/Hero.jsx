import React from 'react'
import '../../../../scss/components/pages/About/_hero.scss'
import { aboutData } from '../../../../assets'


function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="wrapper page-about">
                <div className="hero__text-content">
                <h1>{aboutData.title}</h1>
                <p>{aboutData.para}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero