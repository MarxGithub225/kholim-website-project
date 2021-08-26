import React, { Component } from 'react'

import img9 from '../../assets/images/bigBlogThumb.jpg';

export default class Blog extends Component {
    render() {
        return (
            <div id="blog" className="our-blog section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div className="section-heading">
                        <h2 style = {{marginBottom: 30}}><em>Nos</em> <span>Actualités</span></h2>
                    </div>
                    </div>
                    <div className="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div className="left-image">
                        <a href="#"><img src={img9} alt="Workspace Desktop" /></a>
                        <div className="info">
                        <div className="inner-content">
                            <ul>
                            <li><i className="fa fa-calendar"></i> 26 Août 2021</li>
                            </ul>
                            <a href="#"><h4>Titre de l'actualité</h4></a>
                            <p>Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...</p>
                            <div className="main-blue-button">
                            <a href="#">Découvir plus</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div className="right-list">
                        <ul>
                        <li>
                            <div className="left-content align-self-center">
                            <span><i className="fa fa-calendar"></i> 26 Août 2021</span>
                            <a href="#"><h4>Titre de l'actualité</h4></a>
                            <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                            </div>
                            <div className="right-image">
                            <a href="#"><img src={img9} alt="" /></a>
                            </div>
                        </li>
                        <li>
                            <div className="left-content align-self-center">
                            <span><i className="fa fa-calendar"></i> 26 Août 2021</span>
                            <a href="#"><h4>Titre de l'actualité</h4></a>
                            <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                            </div>
                            <div className="right-image">
                            <a href="#"><img src={img9} alt="" /></a>
                            </div>
                        </li>
                        <li>
                            <div className="left-content align-self-center">
                            <span><i className="fa fa-calendar"></i> 26 Août 2021</span>
                            <a href="#"><h4>Titre de l'actualité</h4></a>
                            <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                            </div>
                            <div className="right-image">
                            <a href="#"><img src={img9} alt="" /></a>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>

     
        )
    }
}
