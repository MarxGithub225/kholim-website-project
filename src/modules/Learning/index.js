import React, { Component } from 'react'
import Header2 from '../../common/components/Header2';
import Contact from '../../common/components/Contact';

import './style.scss';
import Carousel, {autoplayPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import carte from '../../assets/images/carte.png';
import certification from '../../assets/images/certification.png';
import laptop from '../../assets/images/laptop.png';
import voyage from '../../assets/images/voyage.png';

import room from '../../assets/images/avantages/av2.png';
import standing from '../../assets/images/avantages/av1.png';
import food from '../../assets/images/avantages/av3.png';
import gadget from '../../assets/images/avantages/av6.png';
import medical from '../../assets/images/avantages/av5.png';
import touristique from '../../assets/images/avantages/av4.png';

import zoom from '../../assets/images/zoom.png';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const Tools = [
    {
        icon : carte,
        title: 'Formation à la caret',
        description : 'Vous permettre de satisfaire vos besoins spécifiques en formation'
    },
    {
        icon : voyage,
        title: 'Voyage d\'étude',
        description : 'En partenariat avec des structures privées et publiques de l’Afrique du nord et subsaharienne, nous organisons des visites de benchmarking à la demande. '
    },
    {
        icon : laptop,
        title: 'Formations à distance en ligne',
        description : 'Nous adaptons en distanciel des formations présentielles.'
    },
    {
        icon : certification,
        title: 'Certifications',
        description : 'Certification pour les personnes, les systèmes de management et les produits sur un large éventail de normes internationales.'
    }
];


const Avantages = [
    {   title : 'Salles de formation modernes',
        images: room
    },
    {   title : 'Logements haut standing',
        images: standing
    },
    {   title : 'Restauration',
        images: food
    },
    {   title : 'Gadgets électroniques',
        images: gadget
    },
    {   title : 'Visites médicales',
        images: medical
    },
    {   title : 'Visites touristiques',
        images: touristique
    }
];

const Modules = [
    {
        title : 'Management des systèmes & Qualification des auditeurs internationaux',
        images: medical
    },
    {   title : 'Management du secteur Public',
        images: touristique
    },
    {   title : 'Formation sectorielle & Formation à la carte',
        images: gadget
    },
    {   title : 'Formation Sécurité incendie & Santé Sécurité au travail',
        images: food
    }
]
export default class Learning extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images: [
          ],
          photoIndex: 0,
          isOpen: false,
        };
      }


      zoom = (image) => {
        this.setState({images: [image], isOpen: true})
      }

      replace = (text) => {
            const a = text.split(' ').join('-');

            const b = a.replace("é", "e");

            const c = b.replace("è", "e");

            const d = c.replace("à", "a");

            return d.toLowerCase();
      }

    render() {
        return (
            <>
                <Header2/>
                <div className = "Learning header-text">
                    <div className = "topSide">
                        <div className = "Left">
                            <Carousel
                            
                            plugins={[
                                'infinite',
                                {
                                resolve: autoplayPlugin,
                                options: {
                                    interval: 2000,
                                }
                                },
                            ]}   
                            animationSpeed={1000}
                            
                            >
                                <img src= "https://source.unsplash.com/1024x768/?nature" />
                                <img src= "https://source.unsplash.com/1024x768/?nature" />
                                <img src= "https://source.unsplash.com/1024x768/?nature" />
                            </Carousel>
                        </div>


                        <div className = "Right wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                            {Tools.map((t,i) => {
                                return (
                                    <div className = "optionItem" key = {i}
                                    
                                    >
                                        <div className = "opt-icon">
                                            <img src = {t.icon} alt = "" />
                                        </div>

                                        <div className = "opt-label">
                                            {t.title}
                                        </div>
                                    </div>
                                );
                            })}                            
                        </div>
                    </div>
                    <div className = "avantages">
                        <div className="header"><div className="round"><div className="round-content"></div></div><div className="header-title"> Nos avantages </div><div className="vertical-line"></div></div>
                        
                        <div class="title-1"> Soucieux de vous apporter un service de qualité, nous offrons: </div>
                        <div className ="avantagesList">
                            <div className = "avantagesListItem">
                                    <ul>
                                        <li >Des salles de formation modernes, dotées de tout le matériel nécessaire;</li>
                                        <li >Des logements haut standing (hôtels ou résidences );</li>
                                        <li >Restauration adaptée à vos habitudes alimentaires;</li>
                                        
                                    </ul>
                            </div>

                            <div className = "avantagesListItem">
                                    <ul>
                                        <li >Gadgets électroniques (Téléphone, Ordinateur portable ou Tablette);</li>
                                        <li >Visites médicales;</li>
                                        <li >Visites touristiques;</li>
                                        
                                    </ul>
                            </div>
                        </div>

                        <div className = "avantagesImages">
                            
                                {Avantages.map ((a, i) => {
                                    return (
                                        <div className = "av-i-item wow bounce" key = {i} data-wow-duration="5s">
                                            <div className = "itemIllustration" style = {{backgroundImage : `url(${a.images})`}}>
                                                <div className = "itemTitle">
                                                        {a.title}
                                                </div>
                                            </div>
                                            
                                        </div>
                                    );
                                })}
                            
                        </div>
                    </div>

                    <div className ="modules">
                        <div className="header"><div className="round"><div className="round-content"></div></div><div className="header-title"> Nos formations </div><div className="vertical-line"></div></div>
                            
                        <div className = "moduleList">
                            {Modules.map ((m, i) => {
                                    return (
                                        <div className ={i === 0 || i=== 2 ?  "moduleItem wow fadeInLeft" : "moduleItem wow fadeInRight"} key = {i} data-wow-duration="1s" data-wow-delay="1s">
                                            <div className = "itemIllustration" style = {{backgroundImage : `url(${m.images})`}}
                                            onClick = {() => this.zoom(m.images)}
                                            >
                                                <div className = "hoverBlack">
                                                    <img src = {zoom} alt = ""/>
                                                </div>
                                            </div>

                                            <div className = "itemTitle"
                                            >
                                                   <a
                                                   href = {`/formations/${this.replace(m.title)}`}
                                                   >  {m.title}</a>
                                            </div>
                                            
                                        </div>
                                    );
                            })}
                        </div>
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
