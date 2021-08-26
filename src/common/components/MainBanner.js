import React, { Component } from 'react'

import banner from '../../assets/images/bannerRightImage.png';
export default class MainBanner extends Component {
    render() {
        return (
            <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                        <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                            <h6><span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[ "Bienvenue chez Kholim Group.", "Kholim Group : le professionnalisme.", "holim Group : la qualité" ]'></span></h6>
                            <h2><em>Des services</em> &amp; <span>Formations</span> de qualités.</h2>
                            <p>Notre politique privilégie un ratio compétitif du couple qualité/prix.</p>
                            
                            
                        </div>
                        </div>
                        <div class="col-lg-6">
                        <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                            <img src={banner} alt="team meeting" />
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
