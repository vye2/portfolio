import React, { Component } from "react"
import circlePortrait from '../../img/circleportrait.png'
import clipart from '../../img/clipart.png'

export default class About extends Component{

  render(){
    const p1 = "I am a recent Computer Science graduate from the University of California, Santa Cruz. I enjoy exploring different possibilities and scenarios on how to best design an effective and intuitive user experience. I have experience working in small groups as well as leading projects, and have created and contributed practical, effortless-to-use software solutions."
    const p2 = "When I'm not outdoors woodworking or hiking, I'm investigating new ways to improve my design discipline. I'm seeking an entry level software engineer position where I can apply my honed knowledge to create impressive and scalable software that solves real world problems."


    return (
      <section className="about-area">
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

              <button type="button" className="btn button primary-button text-uppercase">Resume</button>

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