import React, { Component } from 'react'

import img9 from '../../assets/images/bigBlogThumb.jpg';

export default class Blog extends Component {
    render() {
        return (
            <div id="blog" class="our-blog section">
                <div class="container">
                <div class="row">
                    <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div class="section-heading">
                        <h2 style = {{marginBottom: 30}}><em>Nos</em> <span>Actualités</span></h2>
                    </div>
                    </div>
                    <div class="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
                    
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div class="left-image">
                        <a href="#"><img src={img9} alt="Workspace Desktop" /></a>
                        <div class="info">
                        <div class="inner-content">
                            <ul>
                            <li><i class="fa fa-calendar"></i> 26 Août 2021</li>
                            </ul>
                            <a href="#"><h4>Titre de l'actualité</h4></a>
                            <p>Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...</p>
                            <div class="main-blue-button">
                            <a href="#">Découvir plus</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
                    <div class="right-list">
                        <ul>
                        <li>
                            <div class="left-content align-self-center">
                            <span><i class="fa fa-calendar"></i> 26 Août 2021</span>
                            <a href="#"><h4>Titre de l'actualité</h4></a>
                            <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                            </div>
                            <div class="right-image">
                            <a href="#"><img src={img9} alt="" /></a>
                            </div>
                        </li>
                        <li>
                            <div class="left-content align-self-center">
                            <span><i class="fa fa-calendar"></i> 26 Août 2021</span>
                            <a href="#"><h4>Titre de l'actualité</h4></a>
                            <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                            </div>
                            <div class="right-image">
                            <a href="#"><img src={img9} alt="" /></a>
                            </div>
                        </li>
                        <li>
                            <div class="left-content align-self-center">
                            <span><i class="fa fa-calendar"></i> 26 Août 2021</span>
                            <a href="#"><h4>Titre de l'actualité</h4></a>
                            <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                            </div>
                            <div class="right-image">
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
