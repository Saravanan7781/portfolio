import React from 'react'
import react from '../assets/skillLogos/react.png'
import mongo from '../assets/skillLogos/mongo.png'
import c from '../assets/skillLogos/c.png'
import css from '../assets/skillLogos/CSS.png'
import html from '../assets/skillLogos/HTML.png'
import mysql from '../assets/skillLogos/mySQL.png'
import node from '../assets/skillLogos/node.png'
import java from '../assets/skillLogos/java.jpeg'
import express from '../assets/skillLogos/express.png'

function ElaborationOfStack() {
  return (
      <div className="elaborationOfTheStackSelected">
          <h1>Specialization</h1>
          <div className="specializationOfStack">
                   <div className="stackSelected">
              <img src={ react} alt="" />
            </div>
            <div className="detailsOfTheSelectedStack">
                  <div className="skillSelectedForStack expertiseOfTheStackSelected">
                      <p>Expertise </p>  
                      <div className="progressBarOfTheStackSelected"></div>
                  </div>
                  <div className="skillSelectedForStack practiceOfTheSkillSelected">
                      <p>Practice</p>
                      <div className="progressBarOfTheStackSelected"></div>
                  </div>
                  <div className="skillSelectedForStack problemSolvingOfTheSkillSelected">
                      <p>Problem Solving</p>
                      <div className="progressBarOfTheStackSelected"></div>
                  </div>
                  <div className="skillSelectedForStack debugOfTheSkillSelected">
                      <p>Debug</p>
                      <div className="progressBarOfTheStackSelected"></div>
                  </div>
            </div>
              </div>
        </div>
  )
}

export default ElaborationOfStack;