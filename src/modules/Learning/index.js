import React, { Component } from 'react'
import './style.scss';

import Slider from "react-slick";

import img2 from '../../assets/images/blogThumb02.jpg';
import img3 from '../../assets/images/blogThumb03.jpg';
import img4 from '../../assets/images/blogThumb04.jpg';


import SplitBack from '../../assets/images/tech/Split/backImage.jpg';
import VRVBack from '../../assets/images/tech/VRV/backImage.jpg';
import GAGBack from '../../assets/images/tech/GAG/backImage.jpg';
import Header2 from '../../common/components/Header2'
import Contact from '../../common/components/Contact';
const typeClim = [
  { label : 'Formation 1',
    backImage : SplitBack,
  },

  { label : 'Formation 1',
    backImage : VRVBack,
  },

  { label : 'Formation 3',
    backImage : GAGBack,
  }
]

const typeFroid = [
  { label : 'Formation 1',
    backImage : SplitBack,
  },

  { label : 'Formation 2',
    backImage : GAGBack,
  },

  { label : 'Formation 3',
    backImage : VRVBack,
  }
]


const formation = [
    { label : 'Secteur public',
        backImage : SplitBack,
    },
    { label : 'Secteur privé',
        backImage : SplitBack,
    }
]
export default class LearningPage extends Component {
    constructor (props) {
        super (props);

        this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    }

   
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }

    render() {
        
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          };

        return (
            <>
            <Header2/>
            <div className = "LearningPage">
              <div className = "bigTitle">
                Pôle Formation
              </div>

              <div className = "bannerSide">
                  <Slider ref={c => (this.slider = c)} {...settings}>
                    
                    <div className = "sliderItem">
                    <img src = {img2} alt = "" />
                    </div>
                    <div className = "sliderItem">
                    <img src = {img3} alt = "" />
                    </div>

                    <div className = "sliderItem">
                    <img src = {img4} alt = "" />
                    </div>
                    
                  </Slider>

                    <div className="buttonLeft" onClick={this.previous}>
                      <i className = "fa fa-caret-left"></i>
                    </div>
                    <div className="buttonRight" onClick={this.next}>
                    <i className = "fa fa-caret-right"></i>
                    </div>
              </div>
                <div className="header"><div className="round"><div className="round-content"></div></div><div className="header-title"> Formations </div><div className="vertical-line"></div></div>
                
                {formation.map(f => {
                    return (
                        <div className = "f-item">
                            <div className = "f-item-leftSide" style = {{backgroundImage : `url(${f.backImage})`}}>
                                <div className = "content">
                                    <div className = "itemTitle">
                                        {f.label}
                                    </div>
                                </div>
                            </div>

                            <div className = "f-item-rightSide">
                            <div className = "gal">
                            {typeClim.map(item => {
                            return (
                                <div className = "galItem">
                                    

                                    <div className = "itemIllustration" style = {{backgroundImage : `url(${item.backImage})`}}>
                                    
                                    </div>
                                    <div className = "itemTitle">
                                        {item.label}
                                    </div>
                                </div>
                            )
                            })}

                            </div>
                            </div>
                        </div>
                    )
                })}
                
                

                <div className="header"><div className="round"><div className="round-content"></div></div><div className="header-title"> Assistance des entreprises &amp; Audit système </div><div className="vertical-line"></div></div>
                <div className = "gallery">

                  {typeFroid.map(item => {
                    return (
                      <div className = "galleryItem">
                          

                          <div className = "itemIllustration" style = {{backgroundImage : `url(${item.backImage})`}}>
                              
                          </div>
                          <div className = "itemTitle">
                                {item.label}
                            </div>
                      </div>
                    )
                  })}
                  
                </div>
            </div>
            <Contact/>
            </>
        )
    }
}
