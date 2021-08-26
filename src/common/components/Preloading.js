import React, { Component } from 'react'

export default class Preloading extends Component {
    render() {
        return (
            <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
            </div>
        )
    }
}
