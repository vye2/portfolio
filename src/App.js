import React, { Component } from 'react';

import './App.css';
import './css/all.min.css';
import './css/responsive.css';
import "animate.css/animate.min.css";


import Navbar from './components/Header/Navbar.js';
import Projects from './components/Projects/Projects.js'
import ListBars from './components/Skills/ListBars.js';
import Portrait from './img/Portrait.png';
import UpdatedPortrait from './img/newportrait.JPG'


class App extends Component {
  
  render() {
    
    return (
      <div>

        {/* ============================= Header Start ============================*/}
        <header className="header_area">
          <div className= "main-menu">
            <Navbar />
          </div>
        </header>
        {/* ============================= Header End ============================*/}


        <main className="site-main">


          {/* ============================= Banner Start ============================*/}
          <section className="site-banner">
            <div className="container">
              <div className="row">
                {/* col-lg6 for website, md-12 for mobile*/}
                <div className="col-lg-6 col-md-12 site-title">
                  <h3 className="title-text">Hi</h3>
                  <h1 className="title-text text-uppercase">I'm Victor</h1>
                  <h4 className="title-text text-uppercase">Class of 2020 New Grad</h4>
                  <div className="site-buttons">
                    <div className="d-flex flex-row flex-wrap">
                      <button type="button" className="btn button primary-button mr-4 text-uppercase">Hire Me</button>
                      {/*<button type="button" className="btn button secondary-button text-uppercase">Get CV</button>*/}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 banner-image">
                  <img
                    src={UpdatedPortrait}
                    alt="banner-img"
                    className="img-fluid"
                    />
                </div>
              </div>
            </div>
          </section>
          {/* ============================= Banner End ============================*/}


          {/* ============================= About Start ============================*/}
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
          {/* ============================= About End ============================*/}



          {/* ============================= Services Start ============================*/}

          <ListBars />
          {/* <section className="services-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center services-title">
                  <h1 className="text-uppercase title-text">Skills</h1>
                </div>
              </div>
              <div className="container skills-list">
                
                <Bar name="Python" percent="80%"></Bar>
                <Bar name="Java" percent="80%"></Bar>
                <Bar name="Javascript" percent="80%"></Bar>
                <Bar name="HTML" percent="70%"></Bar>
                <Bar name="C/C++" percent="70%"></Bar>
                <Bar name="Swift" percent="70%"></Bar>
                <Bar name="CSS" percent="65%"></Bar>
                <Bar name="React" percent="55%"></Bar>
                
              </div>
            </div>
            
          </section> */}


        {/* ============================= Services End ============================*/}


        {/* ============================= Project Start ============================*/}
        <Projects />
        {/* ============================= Project End ============================*/}


        </main>

        <footer className="footer-area">
          <div className="container">
            <div className="">
              <div className="site-logo text-center py-4">
                {/*<a href="/"><img src="" alt="logo"/></a>*/}
              </div>
              <div className="social text-center">
                <h5 className="text-uppercase">Follow Me At:</h5>
                <a href="https://www.linkedin.com/in/victor-y-b63a40107/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/vye2"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/victhor.y/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </footer>


      </div>
    );
  }
}
export default App;
