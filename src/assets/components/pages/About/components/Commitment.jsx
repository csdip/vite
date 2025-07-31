import React from 'react'
import '../../../../scss/components/pages/About/_commitment.scss'
import { comitmentData } from '../../../../assets'

function Commitment() {
  return (
    <section id="commitment" className="commitment">
        <div className="container">
            <div className="row align-center">
                <div className="col-4">
                    <div className="commitment__img-content">
                        <img src={comitmentData.img} alt="commitment-Image" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="commitment__text-content">
                        <h2>{comitmentData.title}</h2>
                        <p>{comitmentData.para}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Commitment