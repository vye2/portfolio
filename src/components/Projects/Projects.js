import React from 'react';
import { Component } from 'react';
import Project1 from '../../img/project1.jpg';
import Project2 from '../../img/project2.jpg';
import Project3 from '../../img/project3.jpg';
import Project4 from '../../img/project4.jpg';

export default class Projects extends Component {

  

  render() {

    const projects = [
      {
        id: 1,
        image: Project1,
        alt: "Project1",
        description: "Consumer Health Portal is a web app that tackles the problem of healthtech clutter by collating a user's authenticated health care data into one place.",
        buttonText: "Read More",
        buttonRef: "",
        title: "Consumer Health App",
        languages: "React, Node.js, DynamoDB"
      },
      {
        id: 2,
        image: Project2,
        alt: "Project2",
        description: "FridgeBuddy is a mobile application that helps the user manage their refrigerator and pantry inventory. Users are able to quickly scan the barcodes of their groceries into the app and keep track of what food items are stored in their refrigerator for later use. Users are also able to generate recipes based on their currently stored food items, and prevent food waste by displaying what food items are near expiration.",
        buttonText: "Github",
        buttonRef: "https://github.com/vye2/FridgeBuddy",
        title: "Fridge Buddy",
        languages: "Android, Java"
      },
      {
        id: 3,
        image: Project3,
        alt: "Project3",
        description: "NutrientPlus is a nutrition tracker app that recommends users optimal food choices to reach daily nutrient goals.",
        buttonText: "Github",
        buttonRef: "https://github.com/vye2/nutrientplus",
        title: "Nutrient Plus",
        languages: "iOS, Swift"
        
      },
      {
        id: 4,
        image: Project4,
        alt: "Project4",
        description: "A neural network trained on EEG data gathered from 5 categories of visual stimuli (abstract, waterfalls, faces, Rube Goldberg mechanisms, and speed).",
        buttonText: "Github",
        buttonRef: "https://github.com/vye2/VideoStimuliClassification",
        title: "Visual Stimuli Classification",
        languages: "Python, Tensorflow"
      }
    ]

    return (
      <section className="project-area">
        <div className="container">
          <div className="project-title pb-5">
            <h1 className="text-uppercase title-h1">Recently Done Projects</h1>
          </div>
          <div className="row grid">
            {projects.map(project => (
              <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                <div className="our-project">
                  <div className="img">
                    <img className="img-img img-fluid" src={project.image} alt={project.alt}/>
                    <div className="img-description-layer">
                      <p className="img-description">{project.description}</p>
                      <div className="img-button">          
                        {/* <button type="button" className="btn button project-button text-uppercase">{project.buttonText}</button>          */}
                        <a href={project.buttonRef} target="_blank" rel="noopener noreferrer" className="btn button project-button text-uppercase">{project.buttonText}</a>
                      </div>
                    </div>
                  </div>
                  <div className="title py-4">
                    <h4 className="text-uppercase">{project.title}</h4>
                    <span>{project.languages}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

