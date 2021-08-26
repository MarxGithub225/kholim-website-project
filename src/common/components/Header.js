import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/kholimLogo.png'
export default class Header extends Component {
    render() {
        return (
            <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div class="container">
                <div class="row">
                    <div class="col-12">
                    <nav class="main-nav">
                        <a href="index.html" class="logo">
                        <img src ={Logo} alt = "" style = {{width: 150}} />
                        </a>
                        
                        <ul class="nav">
                        <li class="scroll-to-section"><a href="#top" class="active">Accueil</a></li>
                        <li class="scroll-to-section"><Link to = 'formations'>Pôle formations</Link> </li>
                        <li class="scroll-to-section"><Link to = 'techniques'>Pôle technique</Link></li>
                        <li class="scroll-to-section"><a href="#blog">Nos actualités</a></li> 
                        <li class="scroll-to-section"><div class="main-red-button"><a href="#contact">Contactez Nous</a></div></li> 
                        </ul>        
                        <a class='menu-trigger'>
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
