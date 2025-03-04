import React from 'react'
import '../Styles/PercentageOfStack.css'
import react from '../assets/skillLogos/react.png'
import mongo from '../assets/skillLogos/mongo.png'
import c from '../assets/skillLogos/c.png'
import css from '../assets/skillLogos/CSS.png'
import html from '../assets/skillLogos/HTML.png'
import mysql from '../assets/skillLogos/mySQL.png'
import node from '../assets/skillLogos/node.png'
import java from '../assets/skillLogos/java.jpeg'
import express from '../assets/skillLogos/express.png'

function PercentageOfStack() {
  return (
    <div className="percentageOfStack">
        <h1>How much I know</h1>
      
      <div className="stackSpaceForStacks">
        <div className="stacksIknowTab">
              <h1>Programming Language</h1>
              <div className="stacksProgramming">
            <div className="programmingLogos">
              <img src={java} alt="" />
              {/* <p>java</p> */}
                    </div>
            <div className="programmingLogos">
              <img src={c} alt="" />
                    </div>
                </div>
          <div className="stacksFrontend">
            <div className="frontendSkills">
              <img src={html} alt="" /></div>
            <div className="frontendSkills">
              <img src={css} alt="" /></div>
            <div className="frontendSkills">
              <img src={react} alt="" /></div>
              </div>
          <div className="stacksBackend">
            <div className="backendSkills">
              <img src={ express} alt="" /></div>
            <div className="backendSkills">
              <img src={ node} alt="" /></div>
                </div>
          <div className="stacksDatabase">
            <div className="dbSkills">
              <img src={mysql} alt="" /></div>
            <div className="dbSkills">
              <img src={mongo} alt="" /></div>
                </div>
        </div>
        <div className="elaborationOfTheStackSelected">
          <h1>Specialization</h1>
          <div className="specializationOfStack">
                   <div className="stackSelected">
              <img src={ react} alt="" />
            </div>
            <div className="detailsOfTheSelectedStack">

            </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default PercentageOfStack