import React from 'react'
import '../Styles/Intro.css'
import compLogo from '../assets/compLogo.jpg'


function Intro() {
    return (
      <div className="subMainContainer">
      <div className="intro">
        <h1>Yo!!!</h1>
      <img src={compLogo} alt="compLogo" height={ `400px`} />
      </div>
      </div>
          
  )
}

export default Intro