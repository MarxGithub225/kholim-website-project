import React, { Component } from 'react'
import Header2 from '../../common/components/Header2';
import Contact from '../../common/components/Contact';

import './style.scss';

import clim from '../../assets/img/tech/Climatisation/climatisation.jpg';
import clim2 from '../../assets/img/tech/Climatisation/climatisation-2.jpg';
import clim3 from '../../assets/img/tech/Climatisation/clim1.jpg';

import split from '../../assets/img/tech/split/split.jpg';

import vrv from '../../assets/img/tech/vrv/vrv.jpg';
import vrv2 from '../../assets/img/tech/vrv/vrv-2.jpg';
import vrv3 from '../../assets/img/tech/vrv/vrv-3.png';


import froid from '../../assets/img/tech/Froid/froid.jpg';
import froid2 from '../../assets/img/tech/Froid/froid-2.jpg';
import froid3 from '../../assets/img/tech/Froid/froid-3.jpg';


import tunnel from '../../assets/img/tech/tunnel/tunnel.jpg';
import tunnel2 from '../../assets/img/tech/tunnel/tunnel-2.jpg';

import gag from '../../assets/img/tech/GAG/gag.gif';
import glace from '../../assets/img/tech/glace/glace.jpg';

import zoom from '../../assets/images/zoom.png';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Modules = [
    {label : ''}
];

const climatisation = [
    {
        label : 'CLIMATISEUR',
        images : [
            clim,
            clim2,
            clim3
        ]
    },
    {
        label : 'SPLIT ARMOIRE',
        images : [
            split
        ]
    },
    {
        label : 'CLIMATISATION CENTRALE VRV',
        images : [
            vrv,
            vrv2,
            vrv3
        ]
    },
]


const froidIndustriel = [
    {
        label : 'CHAMBRE FROIDE',
        images : [
            froid,
            froid2,
            froid3
        ]
    },
    {
        label : 'TUNNEL CONGELATION',
        images : [
            tunnel,
            tunnel2
        ]
    },
    {
        label : 'GROUPE A EAU GLACEE',
        images : [
            gag
        ]
    },{
        label : 'FABRIQUE DE GLACE',
        images : [
            glace
        ]
    }
]    
export default class Technique extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
            ],
            photoIndex: 0,
            isOpen: false,
        };
      }


      


    render() {
        return (
            <>
                <Header2/>
                <div className = "LearningDetails header-text">
                    <div className = "topSide">
                        <div className = "title">
                            FROID ET CLIMATISATION
                        </div>
                    </div>
                    <div className = "bottomSide">
                        <div className="header"><div className="round"><div className="round-content"></div></div><div className="header-title"> CLIMATISATION  </div><div className="vertical-line"></div></div>
                        <div class="title-1"> NOS PRESTATIONS EN CLIMATISATION (SPLITS SYSTEME, MONOBLOCS, VRV) : </div>
                        

                        <div className ="avantagesList">
                            <div className = "avantagesListItem">
                                    <ul>
                                        <li >Etude, dimensionnement et sélection des équipements;</li>
                                        <li >Installation neuve ou Montage des équipements frigorifiques;</li>
                                        
                                    </ul>
                            </div>

                            <div className = "avantagesListItem">
                                    <ul>
                                        <li >Réhabilitation, rénovation ou remise en état des installations ;</li>
                                        <li >Maintenance curative et préventive (Dépannage, réparation, détartrage des échangeurs thermiques, nettoyage circuit frigorifique …);</li>
                                        
                                    </ul>
                            </div>
                        </div>

                        {climatisation.map((c, i) => {
                            return (
                                <div className = "tools">
                                    <div className = "toolTitle">
                                        {c.label}
                                    </div>

                                    <div className = "toolImages">
                                        {c.images.map ((img, i) => {
                                            return (
                                                <div className ={"itemIllustration"} 
                                                
                                                key = {i}
                                                style = {{backgroundImage : `url(${img})`}}
                                                onClick = {() => this.setState({images: c.images, isOpen: true})}
                                                >
                                                    <div className = "hoverBlack">
                                                            <img src = {zoom} alt = ""/>
                                                    </div>
                                                    
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        }) }
                    </div>

                    <div className = "bottomSide-2">
                        <div className="header"><div className="round"><div className="round-content"></div></div><div className="header-title"> FROID INDUSTRIEL  </div><div className="vertical-line"></div></div>
                        <div class="title-1"> NOS PRESTATIONS EN FROID INDUSTRIEL (CHAMBRE FROIDE, TUNNEL DE CONGELATION, PONDEUSE A GLACE, GROUPE A EAU GLACEE)  : </div>
                        

                        <div className ="avantagesList">
                            <div className = "avantagesListItem">
                                    <ul>
                                        <li >Etude, dimensionnement et sélection des équipements;</li>
                                        <li >Installation neuve ou Montage des équipements frigorifiques;</li>
                                        
                                    </ul>
                            </div>

                            <div className = "avantagesListItem">
                                    <ul>
                                        <li >Réhabilitation, rénovation ou remise en état des installations ;</li>
                                        <li >Maintenance curative et préventive (Dépannage, réparation, détartrage des échangeurs thermiques, nettoyage circuit frigorifique …);</li>
                                        
                                    </ul>
                            </div>
                        </div>

                        {froidIndustriel.map((c, i) => {
                            return (
                                <div className = "tools">
                                    <div className = "toolTitle">
                                        {c.label}
                                    </div>

                                    <div className = "toolImages">
                                        {c.images.map ((img, i) => {
                                            return (
                                                <div className ={"itemIllustration"} 
                                                
                                                key = {i}
                                                style = {{backgroundImage : `url(${img})`}}
                                                onClick = {() => this.setState({images: c.images, isOpen: true})}
                                                >
                                                    <div className = "hoverBlack">
                                                            <img src = {zoom} alt = ""/>
                                                    </div>
                                                    
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                </div>

                {this.state.isOpen && (
                <Lightbox
                    mainSrc={this.state.images[this.state.photoIndex]}
                    nextSrc={this.state.images[(this.state.photoIndex + 1) % this.state.images.length]}
                    prevSrc={this.state.images[(this.state.photoIndex + this.state.images.length - 1) % this.state.images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (this.state.photoIndex + this.state.images.length - 1) % this.state.images.length,
                    })
                    }
                    onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (this.state.photoIndex + 1) % this.state.images.length,
                    })
                    }
                />
                )}

                <Contact/>

                
            </>
        )
    }
}
