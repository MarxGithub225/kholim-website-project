import React, { Component } from 'react'
import Header2 from '../../common/components/Header2';
import Contact from '../../common/components/Contact';

import './style.scss';

import food from '../../assets/images/avantages/av3.png';
import gadget from '../../assets/images/avantages/av6.png';
import medical from '../../assets/images/avantages/av5.png';
import touristique from '../../assets/images/avantages/av4.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const Modules = [
    {
        title : 'Management des systèmes & Qualification des auditeurs internationaux',
        images: medical,
        courses : [
            'Leadership et management des organisations',
            'Lead auditeur ISO 9001',
            'Lead auditeur ISO 14001',
            'Lead auditeur ISO 45001',
            'Lead auditeur ISO 22000',
            'Lead auditeur ISO 27001',
            'Lead auditeur ISO 26000',
            'Lead implementer QSE & SDA & Sociétale',
            'Lead Management project ISO 21500',
            'Evaluation risques professionnels',
            'Gestion de crises'
        ]
    },
    {   title : 'Management du secteur Public',
        images: touristique,
        courses : [
            'Santé Publique',
            'Finance publique',
            'Passation des',
            'Développement local',
            'Modernisation de l’administration Publique',
            'Infrastructure',
            'Water, Sanitation et Hygiène',
            'Egalité des genres',
            'Agriculture, Nutrition et sécurité alimentaire',
            'Projet et programme de developpement',
            'Education'
        ]
    },
    {   title : 'Formation sectorielle & Formation à la carte',
        images: gadget,
        courses : [
            'Formation certifiante en agriculture et sécurité alimentaire',
            'Changement climatique',
            'Sécretariat bureautique',
            'Developpement social'
        ]
    },
    {   title : 'Formation Sécurité incendie & Santé Sécurité au travail',
        images: food,
        courses : [
            'Formation syndicales',
            'Comprendre et appliquer la reglementation SST',
            'Le comité SST',
            'Etude d’un poste de travail',
            'Aptitude médicale au poste de travail',
            'Analyse des incidents et accidents de travail',
            'Savoir construire l’arbre des causes et plan d’action',
            'Gestion du stress',
            'Equipier de 1er intervention ',
            'Equipier de 2nd intervention',
            'Elaboration et mise en œuvre POI',
            'Sauveteur et secouriste au travail',
            'Habilitation électrique du personnel',
            'Evaluation risques professionnels'

        ]
    }
]
export default class LearningDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
          images: [
          ],
          photoIndex: 0,
          isOpen: false,

          selected : {
            title: null,
            images: null,
            courses: []
          }
        };
      }


      zoom = (image) => {
        this.setState({images: [image], isOpen: true})
      }

      handleShow = () => this.setState({show: false});
      replace = (text) => {
            const a = text.split(' ').join('-');

            const b = a.replace("é", "e");

            const c = b.replace("è", "e");

            const d = c.replace("à", "a");

            return d.toLowerCase();
      }

      componentDidMount () {
          
          const parameter = this.props.location.pathname.split('/formations/').join('');
          

          Modules.forEach(m => {
              if(this.replace(m.title) == parameter) {
                
                  this.setState({selected : m})
              }
          })
      }

    render() {
        return (
            <>
                <Header2/>
                <div className = "LearningDetails header-text">
                    <div className = "topSide">
                        <div className = "title">
                        <i class="fa fa-graduation-cap"></i> {this.state.selected.title}
                        </div>
                    </div>
                    <div className = "bottomSide">

                        <div className="header"><div className="round"><div className="round-content"></div></div><div className="header-title"> Les modules </div><div className="vertical-line"></div></div>
                        <div className = "courses">
                            {this.state.selected.courses.map((c,i) => {
                                return (
                                    <div className = "courseItem" key = {i}>
                                        <i class="fa fa-graduation-cap"></i> 
                                        <div className = "label">
                                        {c}

                                        <p>
                                            <a
                                            onClick = {() => {this.setState({show: true})}}
                                            class="color-link">S'inscrire</a>
                                            <i class="fa fa-long-arrow-right"></i>
                                        </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>


                <Contact/>
                <Modal show={this.state.show} onHide={() => {this.handleShow()}}>
                    <Modal.Header closeButton>
                    <Modal.Title>Inscription en ligne</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Formulaire d'inscription ici...
                    </Modal.Body>
                    {/* <Modal.Footer>
                    <Button variant="secondary" onClick={() => {this.handleShow()}}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {this.handleShow()}}>
                        Save Changes
                    </Button>
                    </Modal.Footer> */}
                </Modal>
            </>
        )
    }
}
