import React from 'react';
import './css/bootstrap.min.css'
import './App.css';

import Portrait from './img/Portrait.jpg';
import Project1 from './img/Project1.png';
import temp1 from './img/temp1.png';
import temp2 from './img/temp2.png';
import temp3 from './img/temp3.png';
import temp4 from './img/temp4.png';

function App() {
  return (
    <div>

      {/* ============================= Header Start ============================*/}
      <header className="header_area">
        <div className= "main-menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">Victor Ye</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mr-auto">
              </div>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
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
                <h3 className="title-text">Hey</h3>
                <h1 className="title-text text-uppercase">I am Victor</h1>
                <h4 className="title-text text-uppercase">Class of 2020 New Grad</h4>
                <div className="site-buttons">
                  <div className="d-flex flex-row flex-wrap">
                    <button type="button" className="btn button primary-button mr-4 text-uppercase">Hire Me</button>
                    <button type="button" className="btn button secondary-button text-uppercase">Get CV</button>
                  </div>
                </div>
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
        {/* ============================= Banner End ============================*/}


        {/* ============================= About Start ============================*/}
        <section className="about-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <img
                  src={Portrait}
                  alt="About"
                  className="img-fluid"
                  />
              </div>
              <div className="col-lg-6 col-md-12 about-title">
                <h2 className="text-uppercase pt-5">
                  <span>Let me </span>
                  <span>introduce </span>
                  <span>myself</span>
                </h2>

                <div className="paragraph py-4 w-75">
                  <p className="para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </p>
                  <p className="para">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 text-center services-title">
                <h1 className="text-uppercase title-text">Skills</h1>
                <p className="para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
              </div>
            </div>
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
          </div>
        </section>


      {/* ============================= Services End ============================*/}


      {/* ============================= Project Start ============================*/}

      <section className="project-area">
        <div className="container">
          <div className="project-title pb-5">
            <h1 className="text-uppercase title-h1">Recently Done Projects</h1>
          </div>

          <div className="button-group">
            <button type="button" className="active">All</button>
            <button type="button">Popular</button>
            <button type="button">Latest</button>
          </div>

          <div className="row grid">

            <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
              <div className="our-project">
                <div className="img">
                  <img src={Project1} alt="project1"/>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Fridge Buddy</h4>
                  <span className="text-secondary">Latest, Portfolio</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
              <div className="our-project">
                <div className="img">
                  <img src={Project1} alt="project1"/>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Nutrient Plus</h4>
                  <span className="text-secondary">Latest, Portfolio</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
              <div className="our-project">
                <div className="img">
                  <img src={Project1} alt="project1"/>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Consumer Health App</h4>
                  <span className="text-secondary">Latest, Portfolio</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================= Project End ============================*/}


      




      </main>


    </div>
  );
}

export default App;
