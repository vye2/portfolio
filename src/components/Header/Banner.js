import React, { Component } from "react"
// import Portrait from '../../img/Portrait1.jpg';
import Portrait from '../../img/circleportrait2.png'

export default class Banner extends Component{

  render() {
    return (
      <section className="site-banner">
        <div className="container">
          <div className="row">
            {/* col-lg6 for website, md-12 for mobile*/}
            <div className="col-lg-6 col-md-12 site-title">
              <h3 className="title-text">What's Up!</h3>
              <h1 className="title-text text-uppercase">I'm Victor</h1>
              <h4 className="title-text text-uppercase">Class of 2020 New Grad</h4>
              
              <div className="site-buttons">
                <div className="d-flex flex-row flex-wrap">
                  <button type="button" className="btn button primary-button mr-4 text-uppercase">Say Hi</button>
                  {/*<button type="button" className="btn button secondary-button text-uppercase">Get CV</button>*/}
                </div>
              </div>

              {/* <div className="container">
                <div className="">
                  <div className="site-logo text-center py-4">
                    <a href="/"><img src="" alt="logo"/></a>
                  </div>
                  
                </div>
              </div> */}
            </div>
            

            <div className="col-lg-6 col-md-12 banner-image">
              <img
                src={Portrait}
                alt="banner-img"
                className="img-fluid"
                />
            </div>
          </div>
        </div>
      </section>
    )
  }

}