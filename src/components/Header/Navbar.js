import React, { Component } from "react"
// import Portrait from '../../img/circleportrait2.png'
import Resume from '../../pdf/Ye_Victor_Resume.pdf'

export default class Navbar extends Component{
  render() {
    return (
      <div className= "main-menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-nav navbar_fixed"> {/* bg-light*/}
          <a className="navbar-brand" href="/">{/*<img src={logo} alt="logo"/>*/}VICTOR</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-collapse" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
              <a href={Resume} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:getvictorye@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    )
  }
}
