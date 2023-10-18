import React, { useState } from 'react'
import './services.css'

const Services = () => {

    const [toggleState,setToggleState]=useState(0);

    const toggleTab = (index)=>{
        setToggleState(index)
    }
  return (
    <section className="section services" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="service__container container grid">
            <div className="service__content">
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className="service__title"> Product <br/> Designer</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(1)}>View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? 'service__model active-modal' : 'service__model'}>
                    <div className="service__model-content">
                        <i className='uil uil-times service__model-close' onClick={()=>toggleTab(0)}></i>

                        <h3 className="service__model-title"> Product Designer</h3>
                        <p className="service__model-description">Service with more than 1 years of experience.Providing
                         quality work to clients .</p>

                         <ul className="services__modal-service grid">
                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">I develop the user interface</p>
                            </li>

                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">Web page development</p>
                            </li>

                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">I create ux element interactions</p>
                            </li>

                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">I position your company brand</p>
                            </li>


                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">Design and mockups of products for companies </p>
                            </li>


                         </ul>
                    </div>
                </div>
            </div>

            <div className="service__content">
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className="service__title">Web <br/> Developer </h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(2)}>View More
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? 'service__model active-modal' : 'service__model'}>
                    <div className="service__model-content">
                        <i className='uil uil-times service__model-close' onClick={()=>toggleTab(0)}></i>

                        <h3 className="service__model-title">Web Developer</h3>
                        <p className="service__model-description">Service with more than 1 years of experience.Providing
                         quality work to clients .</p>

                         <ul className="services__modal-service grid">
                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">I develop the user interface</p>
                            </li>

                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">Web Site development</p>
                            </li>

                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">I create Frontend element interactions</p>
                            </li>

                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">Design and mockups of products for companies </p>
                            </li>


                         </ul>
                    </div>
                </div>
            </div>

            <div className="service__content">
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className="service__title">Wordpress <br/> Developer</h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(3)}>View More
                    <i className='uil uil-arrow-right services__button-icon' ></i>
                </span>

                <div className={toggleState === 3 ? 'service__model active-modal' : 'service__model'}>
                    <div className="service__model-content">
                        <i className='uil uil-times service__model-close' onClick={()=>toggleTab(0)}></i>

                        <h3 className="service__model-title">Wordpress Developer</h3>
                        <p className="service__model-description">Service with more than 1 years of experience.Providing
                         quality work to clients and companies.</p>

                         <ul className="services__modal-service grid">
                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">I develop the user interface Using Wordpress</p>
                            </li>

                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">Web page development</p>
                            </li>

                            {/* <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">I create element interactions</p>
                            </li> */}

                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">I position your company brand</p>
                            </li>


                            <li className="service__model-service">
                                <i className='uil uil-check-circle services__model-icon'></i>
                                <p className="service__model-info">Design and mockups of products for companies </p>
                            </li>

                         </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services