import React from 'react';
import '../../App.css';


const Project = () => (
  <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
    <div className="our-project">
      <div className="img">
        <img className="img-img" src={Project1} alt="project1"/>
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
)

export default Project;