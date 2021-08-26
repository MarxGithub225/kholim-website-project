import React, { Component } from 'react'
import About from '../../common/components/About'
import Blog from '../../common/components/Blog'
import Contact from '../../common/components/Contact'
import Header from '../../common/components/Header'
import MainBanner from '../../common/components/MainBanner'
import Service from '../../common/components/Service'

export default class HomePage extends Component {
    render() {
        return (
            <>
            
      
                <Header/>
                <MainBanner/>
                <About/>
                <Service/>
                <Blog/>
                <Contact/>
            </>
        )
    }
}
