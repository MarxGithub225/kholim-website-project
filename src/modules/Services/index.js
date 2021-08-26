import React, { Component } from 'react'
import './style.scss';
import Carousel from 'react-bootstrap/Carousel';

import Slider from "react-slick";

import img from '../../assets/images/blogThumb01.jpg'
import img2 from '../../assets/images/blogThumb02.jpg'
import img3 from '../../assets/images/blogThumb03.jpg'
export default class ServicesPage extends Component {
    constructor (props) {
        super (props);

        
    }

   
    render() {
        
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
            <div className = "ServicesPage">

<Slider {...settings}>
      <div>
        <img src = {img} alt = "" />
      </div>
      <div>
      <img src = {img2} alt = "" />
      </div>
      <div>
      <img src = {img3} alt = "" />
      </div>
      
    </Slider>
<div class="header"><div class="round"><div class="round-content"></div></div><div class="header-title"> Contactez-nous </div><div class="vertical-line"></div></div>
            </div>
        )
    }
}
