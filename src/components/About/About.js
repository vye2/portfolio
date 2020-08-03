import React, { Component } from "react"
// import circlePortrait from '../../img/circleportrait.png'
import clipart from '../../img/clipart.png'
import Resume from '../../pdf/Ye_Victor_Resume.pdf'

export default class About extends Component{

  render(){
    const p1 = "I am a software engineer who recently graduated with a Computer Science degree at UC Santa Cruz. I enjoy designing and building exceptional software, websites, and everything in between. I have experience working in small groups as well as leading projects, and have created and contributed practical, effortless-to-use software."
    const p2 = "When I'm not coding, you can find me woodworking or hiking California trails. I'm seeking an entry level software engineering position where I can leverage my experiences to build interesting and impactful software."


    return (
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-6 col-md-12 about-title">
              <h2 className="text-uppercase pt-5">
                <span>About Me</span>
              </h2>

              <div className="paragraph py-4">
                <p className="para">{p1}</p>
                <p className="para">{p2}</p>
              </div>

              <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn button primary-button text-uppercase">Resume</a>

            </div>


            <div className="col-lg-6 col-md-12 about-image">
              <img
                src={clipart}
                alt="About"
                className="img-fluid"
                />
            </div>
          </div>
        </div>
      </section>
    )
  }

}