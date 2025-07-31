import React from 'react'
import '../../../../scss/components/pages/Plan/_hero.scss'
import { planData } from '../../../../assets'

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="wrapper page-plan">
                <div className="hero__text-content">
                <h1>{planData.title}</h1>
                <p>{planData.para}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero