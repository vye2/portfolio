import React from "react"
import { Component } from 'react';
import Bar from './Bar.js';


export default class ListSkills extends Component {
  render () {

    const skills = [
      {
        id: 1,
        name: "Python",
        percent: "80%"
      },
      {
        id: 2,
        name: "Java",
        percent: "80%"
      },
      {
        id: 3,
        name: "Javascript",
        percent: "80%"
      },
      {
        id: 4,
        name: "HTML",
        percent: "70%"
      },
      {
        id: 5,
        name: "C/C++",
        percent: "70%"
      },
      {
        id: 6,
        name: "Swift",
        percent: "70%"
      },
      {
        id: 7,
        name: "CSS",
        percent: "65%"
      },
      {
        id: 8,
        name: "React",
        percent: "55%"
      },
    ]

    return (
      <section className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center services-title">
              <h1 className="text-uppercase title-text">Skills</h1>
            </div>
          </div>
          <div className="skills-list">
            {skills.map(skill => (
              <Bar name={skill.name} percent={skill.percent}></Bar>
            ))}
          </div>
        </div>
        
      </section>
    )
  }
}