import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/kholimLogo.png'

export default class Header2 extends Component {
    
    render() {
        return (
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <nav className="main-nav">
                        <a href="/" className="logo">
                        <img src ={Logo} alt = "" style = {{width: 150}} />
                        </a>
                        
                        <ul className="nav">
                        <li className="scroll-to-section"><Link to="/" >Accueil</Link></li>
                        <li className="scroll-to-section"><Link to = 'formations'>Pôle formations</Link> </li>
                        <li className="scroll-to-section"><Link to = 'techniques'>Pôle technique</Link></li>
                        <li className="scroll-to-section"><div className="main-red-button"><a href="#contact" >Contactez Nous</a></div></li> 
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                    </div>
                </div>
                </div>
            </header>
        )
    }
}
