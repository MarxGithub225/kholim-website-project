import React, { Component } from 'react'

import img1 from '../../assets/images/aboutLeftImage.png';
import img2 from '../../assets/images/serviceIcon01.png';
import img3 from '../../assets/images/serviceIcon02.png';
import img4 from '../../assets/images/serviceIcon03.png';
import img5 from '../../assets/images/serviceIcon04.png';

export default class About extends Component {
    render() {
        return (
            <div id="about" className="about-us section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="left-image wow fadeIn"  data-wow-duration="1s" data-wow-delay="0.2s">
                        <img src={img1} alt="person graphic" />
                    </div>
                    </div>
                    <div className="col-lg-8 align-self-center">
                    <div className="services">
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div className="icon">
                                <img src={img2} alt="reporting" />
                            </div>
                            <div className="right-text">
                                <h4>Assistance aux entreprises</h4>
                                <p>Assistance en management en vue d’optimisation des ressources.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                            <div className="icon">
                                <img src={img3} alt="" />
                            </div>
                            <div className="right-text">
                                <h4>Audit système</h4>
                                <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                            <div className="icon">
                                <img src={img4} alt="" />
                            </div>
                            <div className="right-text">
                                <h4>Formations (public & privé)</h4>
                                <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                            <div className="icon">
                                <img src={img5} alt="" />
                            </div>
                            <div className="right-text">
                                <h4>Servies techniques</h4>
                                <p>Installation, maintenance des installations frigorifiques.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}
