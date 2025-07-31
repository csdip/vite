import React from 'react'
import '../../../../scss/components/pages/About/_headquarters.scss'
import { headquartersData } from '../../../../assets'

function Headquarters() {
  return (
    <section id="headquarters" className="headquarters">
        <div className="container">
             <span>Our headquarters</span>
            <div className="row">
                        {headquartersData.map((headquarters, index)=>(
                            <div key={index} className='col-4'>
                                <div className="headquarters__single">
                                    <img src={headquarters.icon} alt="" className='icon'/>
                                    <div className="text-content">
                                        <h2>{headquarters.title}</h2>
                                        <p>{headquarters.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    </section>
  )
}

export default Headquarters