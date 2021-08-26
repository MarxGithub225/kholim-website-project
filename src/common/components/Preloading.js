import React, { Component } from 'react'

export default class Preloading extends Component {
    render() {
        return (
            <div id="js-preloader" class="js-preloader">
                <div class="preloader-inner">
                <span class="dot"></span>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
            </div>
        )
    }
}
