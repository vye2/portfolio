import React, { Component } from "react"
import Portrait from '../../img/Portrait.png';


export default class About extends Component{

  render(){
    return (
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 about-image">
              <img
                src={Portrait}
                alt="About"
                className="img-fluid"
                />
            </div>
            <div className="col-lg-6 col-md-12 about-title">
              <h2 className="text-uppercase pt-5">
                <span>About Me</span>

              </h2>

              <div className="paragraph py-4 w-75">
                <p className="para">                      
                  I am a recent Computer Science graduate from the University of California, Santa Cruz. I enjoy exploring different possibilities and scenarios on how to best design
                  an effective and intuitive user experience. I have experience working in small groups as well as leading projects, and have created and contributed
                  practical, effortless-to-use software solutions.
                </p>
                <p className="para">                  
                  When I'm not outdoors woodworking or hiking, I'm investigating new ways to improve my design discipline. I'm seeking an entry level software engineer position 
                  where I can apply my honed knowledge to create impressive and scalable software that solves real world problems.
                </p>
              </div>

              <button type="button" className="btn button primary-button text-uppercase">Download CV</button>

            </div>
          </div>
        </div>
      </section>
    )
  }

}