import React, { Component } from "react"

export default class Contacts extends Component{

  render() {
    return (
      <div className="container">
        <div className="">
          <div className="social text-center">
            <h5 className="text-uppercase">Follow Me At:</h5>
            <a href="https://www.linkedin.com/in/victor-y-b63a40107/"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/vye2"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/victhor.y/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    )
  }

}