import React, { Component } from "react"

export default class Navbar extends Component{
  render() {
    return (
      <div className= "main-menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar_fixed">
          <a className="navbar-brand" href="/">{/*<img src={logo} alt="logo"/>*/}VICTOR</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-light" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
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

    )
  }
}
