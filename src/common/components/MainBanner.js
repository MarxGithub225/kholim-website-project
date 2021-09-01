import React, { Component } from 'react';

import banner from '../../assets/img/jeunes.jpg';
import banner2 from '../../assets/img/blogThumb03.jpg';
import banner3 from '../../assets/img/consulting.jpg';

const slides = [
    {
      city: 'Formation',
      country: 'Pôle',
      img: banner,
    },
    {
      city: 'Audit & Assitance aux entreprises',
      country: 'Pôle',
      img: banner3
    },
    {
      city: 'Technique',
      country: 'Pôle',
      img: banner2,
    }
    
  ];

export default class MainBanner extends Component {
    constructor(props) {
        super(props);
        
        this.IMAGE_PARTS = 4;
        
        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;
        
        this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
      }

      componentWillUnmount() {
        window.clearTimeout(this.changeTO);
      }
      
      componentDidMount() {
        this.runAutochangeTO();
        setTimeout(() => {
          this.setState({ activeSlide: 0, sliderReady: true });
        }, 0);
      }

      runAutochangeTO() {
        this.changeTO = setTimeout(() => {
          this.changeSlides(1);
          this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
      }
      
      changeSlides(change) {
        // window.clearTimeout(this.changeTO);
        const { length } = slides;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide });
      }
    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state;
        return (
            <div className={sliderReady ? 'slider s--ready' : 'slider'}>
            <div className="slider__slides header-text" >
            {slides.map((slide, index) => (
                <div
                className={activeSlide === index ? 'slider__slide s--active' : prevSlide === index ? 'slider__slide s--prev' : 'slider__slide'}
                key={slide.city}
                >
                <div className="slider__slide-content">
                    <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
                    <h2 className="slider__slide-heading">
                    {slide.city.split('').map((l, p) => <span key = {p}>{l}</span>)}
                    </h2>
                    <p className="slider__slide-readmore">Découvrir</p>
                </div>
                <div className="slider__slide-parts">
                    {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                        <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
            <div className="slider__control" onClick={() => this.changeSlides(-1)} />
            <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
        )
    }
}
