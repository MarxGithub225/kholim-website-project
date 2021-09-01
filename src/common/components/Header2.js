import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/kholimLogo.png'

export default class Header2 extends Component {
    
    constructor(props) {
        super (props);

        this.state = {
            active : 0
        }
    }
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
                        <li className="scroll-to-section"><a href="/" className={this.state.active === 0 ? "active": ''} onClick = {() => {this.setState({active: 0})}}>Accueil</a></li>
                        <li className="scroll-to-section"><a href = '/formations'  className={this.state.active === 1 ? "active": ''} onClick = {() => {this.setState({active: 1})}}>Formations</a> </li>
                        <li className="scroll-to-section"><a href = '/audit&assistance'  className={this.state.active === 1 ? "active": ''} onClick = {() => {this.setState({active: 1})}}>Audit &amp; Assistance</a> </li>
                        <li className="scroll-to-section"><a href = '/techniques'  className={this.state.active === 2 ? "active": ''} onClick = {() => {this.setState({active: 2})}}>Technique</a></li>
                        <li className="scroll-to-section"><div className="main-red-button"><a href="#contact"  className={this.state.active === 4 ? "active": ''} onClick = {() => {this.setState({active: 4})}}>Contactez Nous</a></div></li> 
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
