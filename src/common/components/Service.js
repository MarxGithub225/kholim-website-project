import React, { Component } from 'react'
import img6 from '../../assets/images/jeunes.jpg';
export default class Service extends Component {
    render() {
        return (
            <div id="services" class="our-services section">
                <div class="container">
                <div class="row">
                    <div class="col-lg-6 align-self-center  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div class="left-image">
                        <img src={img6} alt="" />
                    </div>
                    </div>
                    <div class="col-lg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div class="section-heading">
                        <h2>Vos besoins en formation sont <em>inédits, </em> <span>spécifiques</span> &amp; exigent <em>un dispositif sur-mesure, </em> ?</h2>
                        <p>KHOLIM GROUP se distingue par sa forte
                        compétitivité dans l’identification, la préparation et la
                        mise en œuvre de programmes de formation sur-
                        mesure adaptés aux réalités et caractéristiques des
                        organisations dans une perspective de gestion axée
                        sur les résultats.
                        <br/>
                        Il s’appuie dans ses prestations, sur une expertise
                        propre en ingénierie de formation faisant des
                        bénéficiaires les architectes de leur propre
                        développement dans le cadre d’une démarche
                        favorisant la concertation et la participation.
                        </p>
                    </div>
                    {/* <div class="row">
                        <div class="col-lg-12">
                        <div class="first-bar progress-skill-bar">
                            <h4>Website Analysis</h4>
                            <span>84%</span>
                            <div class="filled-bar"></div>
                            <div class="full-bar"></div>
                        </div>
                        </div>
                        <div class="col-lg-12">
                        <div class="second-bar progress-skill-bar">
                            <h4>SEO Reports</h4>
                            <span>88%</span>
                            <div class="filled-bar"></div>
                            <div class="full-bar"></div>
                        </div>
                        </div>
                        <div class="col-lg-12">
                        <div class="third-bar progress-skill-bar">
                            <h4>Page Optimizations</h4>
                            <span>94%</span>
                            <div class="filled-bar"></div>
                            <div class="full-bar"></div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                </div>
            </div>

        )
    }
}
