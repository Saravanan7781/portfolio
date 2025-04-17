import React from 'react'
import { useState} from 'react'
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

import ElaborationOfStack from '../SubComponents/ElaborationOfStack'

function PercentageOfStack() {
  const [skill, setSkill] = useState({
      img: java,
      expertise:"70%",
      practice:"81%",
      problemSolving:"61%",
    Debug: "83%",
    color:"#E62E2E"
  });

  function changeSkill(img, expertise, practice, problemSolving, Debug,color) {
    setSkill({
      img:img,
      expertise,
      practice,
      problemSolving,
      Debug,
      color
    })
  }  

  return (
    <div className="percentageOfStack">
        <h1>How much I know</h1>
      <div className="stackSpaceForStacks">
        <div className="stacksIknowTab">
              <div className="stacksProgramming">
            <div className="programmingLogos" onClick={ ()=>changeSkill(java,"70%","81%","69%","83%","#E62E2E")}>
              <img src={java} alt="" />
              </div>
            <div className="programmingLogos"  onClick={ ()=>changeSkill(c,"50%","70%","60%","70%","#00599D")}>
              <img src={c} alt="" />
                    </div>
                </div>
          <div className="stacksFrontend">
            <div className="frontendSkills" onClick={() => changeSkill(html, "80%", "80%", "90%", "90%","#E95829")}>
              <img src={html} alt="" /></div>
            <div className="frontendSkills" onClick={() => changeSkill(css, "80%", "80%", "80%", "90%","#3D9AD9")}>
              <img src={css} alt="" /></div>
            <div className="frontendSkills" onClick={ ()=>changeSkill(react,"70%","80%","70%","80%","#01D8FC")}>
              <img src={react} alt="" /></div>
              </div>
          <div className="stacksBackend">
            <div className="backendSkills" onClick={ ()=>changeSkill(express,"60%","70%","70%","80%","#394854")}>
              <img src={ express} alt="" /></div>
            <div className="backendSkills" onClick={ ()=>changeSkill(node,"70%","80%","70%","80%","#4E9443")}>
              <img src={ node} alt="" /></div>
                </div>
          <div className="stacksDatabase">
            <div className="dbSkills"
            onClick={ ()=>changeSkill(mysql,"70%","75%","69%","80%","#025368")}>
              <img src={mysql} alt="" /></div>
            <div className="dbSkills" onClick={ ()=>changeSkill(mongo,"80%","85%","90%","87%","#429A34")}>
              <img src={mongo} alt="" /></div>
                </div>
        </div>
        <ElaborationOfStack skill={ skill} />
        </div>
    </div>
  )
}

export default PercentageOfStack