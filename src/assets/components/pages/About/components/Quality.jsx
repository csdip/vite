import React from 'react'
import '../../../../scss/components/pages/About/_quality.scss'
import { qualityData } from '../../../../assets'

function Quality() {
  return (
    <section id="quality" className="quality">
        <div className="container">
            <div className="row">
                <div className="wrapper d-flex flex-wrap">
                    <div className="col-8">
                        <div className="quality__text-content">
                            <h2>{qualityData.title}</h2>
                            <p>{qualityData.para}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="quality__img-content">
                            <img src={qualityData.img} alt="quality-Image" />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quality