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
  { label : 'Spits',
    backImage : SplitBack,
  },

  { label : 'VRV',
    backImage : VRVBack,
  },

  { label : 'Groupe d\'eau glacée',
    backImage : GAGBack,
  }
]

const typeFroid = [
  { label : 'Chambre froide',
    backImage : SplitBack,
  },

  { label : 'Groupe d\'eau glacée',
    backImage : GAGBack,
  },

  { label : 'VRV',
    backImage : VRVBack,
  }
]
export default class ServicesPage extends Component {
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
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          };

        return (
            <>
            <Header2/>
            <div className = "ServicesPage">
              <div className = "bigTitle">
                Pôle Technique
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
                <div className="header"><div className="round"><div className="round-content"></div></div><div className="header-title"> Climatisation </div><div className="vertical-line"></div></div>
                <div className = "gallery">

                  {typeClim.map(item => {
                    return (
                      <div className = "galleryItem">
                          

                          <div className = "itemIllustration" style = {{backgroundImage : `url(${item.backImage})`}}>
                              <div className = "content">
                                  <div className = "itemTitle">
                                      {item.label}
                                  </div>
                              </div>
                          </div>
                      </div>
                    )
                  })}
                  
                </div>

                <div className="header"><div className="round"><div className="round-content"></div></div><div className="header-title"> Froid industriel </div><div className="vertical-line"></div></div>
                <div className = "gallery">

                  {typeFroid.map(item => {
                    return (
                      <div className = "galleryItem">
                          

                          <div className = "itemIllustration" style = {{backgroundImage : `url(${item.backImage})`}}>
                              <div className = "content">
                                  <div className = "itemTitle">
                                      {item.label}
                                  </div>
                              </div>
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
