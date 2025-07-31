import React, { useState } from 'react'
import '../../../../scss/components/pages/Plan/_faq.scss'
import { faqData } from '../../../../assets'
import { NavLink } from 'react-router-dom'

function Faq() {

    const [isActive, setisActive] = useState(false);




    const handleClick = () =>{
        setisActive(!isActive);
    }

  return (
    <section id="faq" className="faq">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <ul className='heading-list'>
                        <li>01 Preferences</li>
                        <li>02 Bean type</li>
                        <li>03 Quantity</li>
                        <li>04 Grind option</li>
                        <li>05 Deliveries</li>
                    </ul>
                </div>
                <div className="col-8">
                    <div className='faq__single'>
                        <h4 onClick={()=>handleClick()} className={`faq__single--qsn ${isActive ? "active" : ""}`}>{faqData.qsn1}</h4>
                        <div onClick={()=>handleClick()} className={`row row-wrapper fix ${isActive ? "active" : ""}`}>
                            <div className="col-4">
                                <ul className="faq__single--ans-wrapper">
                                    <li className='heading'>{faqData.heading1}</li>
                                    <li className='ans'>{faqData.ans1}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading2}</li>
                                    <li className='ans'>{faqData.ans2}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading3}</li>
                                    <li className='ans'>{faqData.ans3}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='faq__single'>
                        <h4 className={`faq__single--qsn ${isActive ? "active" : ""}`}>{faqData.qsn2}</h4>
                        <div className={`row row-wrapper fix ${isActive ? "active" : ""}`}>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading21}</li>
                                    <li className='ans'>{faqData.ans21}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading22}</li>
                                    <li className='ans'>{faqData.ans22}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading23}</li>
                                    <li className='ans'>{faqData.ans23}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='faq__single'>
                        <h4 className={`faq__single--qsn ${isActive ? "active" : ""}`}>{faqData.qsn3}</h4>
                        <div className={`row row-wrapper fix ${isActive ? "active" : ""}`}>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading31}</li>
                                    <li className='ans'>{faqData.ans31}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading32}</li>
                                    <li className='ans'>{faqData.ans32}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading33}</li>
                                    <li className='ans'>{faqData.ans33}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='faq__single'>
                        <h4 className={`faq__single--qsn ${isActive ? "active" : ""}`}>{faqData.qsn4}</h4>
                        <div className={`row row-wrapper fix ${isActive ? "active" : ""}`}>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading41}</li>
                                    <li className='ans'>{faqData.ans41}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading42}</li>
                                    <li className='ans'>{faqData.ans42}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading43}</li>
                                    <li className='ans'>{faqData.ans43}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='faq__single'>
                        <h4 className={`faq__single--qsn ${isActive ? "active" : ""}`}>{faqData.qsn5}</h4>
                        <div className={`row row-wrapper fix ${isActive ? "active" : ""}`}>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading51}</li>
                                    <li className='ans'>{faqData.ans51}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading52}</li>
                                    <li className='ans'>{faqData.ans52}</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className='faq__single--ans-wrapper'>
                                    <li className='heading'>{faqData.heading53}</li>
                                    <li className='ans'>{faqData.ans53}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="summery">
                        <span>order summary</span>
                        <h5>“I drink my coffee as <strong>Filter</strong>, with a <strong>Decaf</strong> type of bean. <strong>250g</strong> ground ala <strong>Cafetiere</strong>, sent to me <strong>Every Week</strong>.”</h5>
                    </div>
                    <div className="faq__btn">
                        <NavLink to="/vite/plan" className="btn">Create your plan</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq