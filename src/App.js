import React, { Component } from 'react';

import './App.css';
import './css/all.min.css';
import './css/responsive.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


import Navbar from './components/Header/Navbar.js';
import Bar from './components/Skills/Bar.js';

import Portrait from './img/Portrait.png';
import Project1 from './img/project1.jpg';
import Project2 from './img/project2.jpg';
import Project3 from './img/project3.jpg';
import Project4 from './img/project4.jpg';
import UpdatedPortrait from './img/newportrait.JPG'
/*import temp1 from './img/temp1.png';
import temp2 from './img/temp2.png';
import temp3 from './img/temp3.png';
import temp4 from './img/temp4.png';*/

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

          <section className="services-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center services-title">
                  <h1 className="text-uppercase title-text">Skills</h1>
                </div>
              </div>
              {/* <ScrollAnimation animateIn="fadeIn"> */}

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
              {/* </ScrollAnimation> */}

            {/*
              <div className="container services-list">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="services">
                      <div className="services-img text-center py-4">
                        <img src={temp1} alt="skill1"/>
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title text-uppercase">React</h5>
                        <p className="card-text text-secondary">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="services">
                      <div className="services-img text-center py-4">
                        <img src={temp2} alt="skill1"/>
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title text-uppercase">React</h5>
                        <p className="card-text text-secondary">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="services">
                      <div className="services-img text-center py-4">
                        <img src={temp3} alt="skill1"/>
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title text-uppercase">React</h5>
                        <p className="card-text text-secondary">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="services">
                      <div className="services-img text-center py-4">
                        <img src={temp4} alt="skill1"/>
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title text-uppercase">React</h5>
                        <p className="card-text text-secondary">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              */}
            </div>
            
          </section>


        {/* ============================= Services End ============================*/}


        {/* ============================= Project Start ============================*/}

        <section className="project-area">
          <div className="container">
            <div className="project-title pb-5">
              <h1 className="text-uppercase title-h1">Recently Done Projects</h1>
            </div>

  {/*
              <div className="button-group">
              <button type="button" className="active">All</button>
              <button type="button">Popular</button>
              <button type="button">Latest</button>
            </div>
  */}

            <div className="row grid">

              <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                <div className="our-project">
                  <div className="img">
                    <img className="img-img img-fluid" src={Project1} alt="project1"/>
                    <div className="img-description-layer">
                      <p className="img-description">Consumer Health Portal is a web app that tackles the problem of healthtech clutter by collating a user's authenticated health care data into one place.</p>
                      <div className="img-button">          
                        <button type="button" className="btn button project-button text-uppercase">Github</button>         
                      </div>
                    </div>
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Consumer Health App</h4>
                    <span>React, Node.js, DynamoDB</span>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                <div className="our-project">
                  <div className="img">
                    <img className="img-img" src={Project2} alt="project1"/>
                    <div className="img-description-layer">
                      <p className="img-description">FridgeBuddy is a mobile app that helps users manage their food inventory and generates recipes based on their currently stored items.</p>
                    </div>
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Fridge Buddy</h4>
                    <span>Android, Java</span>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                <div className="our-project">
                  <div className="img">
                    <img className="img-img" src={Project3} alt="project1"/>
                    <div className="img-description-layer">
                      <p className="img-description">NutrientPlus is a nutrition tracker app that recommends users optimal food choices to reach daily nutrient goals.</p>
                    </div>
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Nutrient Plus</h4>
                    <span>iOS, Swift</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                <div className="our-project">
                  <div className="img">
                    <img className="img-img" src={Project4} alt="project1"/>
                    <div className="img-description-layer">
                      <p className="img-description">A neural network trained on EEG data gathered from 5 categories of visual stimuli (abstract, waterfalls, faces, Rube Goldberg mechanisms, and speed)</p>
                    </div>
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">Visual Stimuli Classification</h4>
                    <span>Python, Tensorflow</span>
                  </div>
                </div>
              </div>


 

            </div>

          </div>
        </section>

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
