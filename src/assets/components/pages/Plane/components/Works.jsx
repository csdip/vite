import React from 'react'
import '../../../../scss/components/pages/Plan/_works.scss'
import { worksData } from '../../../../assets'

function Works() {
  return (
    <section id="works" className="works">
        <div className="container page-works-container">
            <div className="row">
                <div className="col">
                    <div className="bg-container">
                      <div className="sec-title works-title">
                          <div className='line'>
                              <span className='circle circle1'></span>
                              <span className='circle circle2'></span>
                              <span className='circle circle3'></span>
                          </div>
                      </div>
                          <div className="works__wrapper">
                              {worksData.map((works, index)=>(
                                  <div className="works__single page-choose" key={index}>
                                      <strong>{works.no}</strong>
                                      <h4>{works.title}</h4>
                                      <p>{works.des}</p>
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

export default Works