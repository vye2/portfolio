import React from "react"
import logo from "../../img/name_logo.png"

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light navbar_fixed">
    <a className="navbar-brand" href="/"><img src={logo} alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
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
  
)
export default Navbar