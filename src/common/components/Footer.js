import React, { Component } from 'react'

export default class Footer extends Component {
  
    render() {
      const year = new Date().getFullYear()
        return (
            <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
                  <p>&copy; Copyright {year} Kholim. Tous droits réservés. 
                    <br/>
                    Conçu par: <a rel="nofollow" href="https://www.marx-nguessan.com/">N'Gessan Marx</a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}
