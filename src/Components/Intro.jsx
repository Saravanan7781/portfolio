import React from 'react'
import '../Styles/Intro.css'
import compLogo from '../assets/compLogo.jpg'


function Intro() {
    return (
      <div className="subMainContainer">
        <div className="intro">
          <div className="firstPart">

            <h1 style={{textAlign:"left "}}>Yo!!!<br /></h1>
            <h1 style={{textAlign:"right"}}>This is </h1>
            <h1 style={{textAlign:"left"}}>Saravanan</h1>
          </div>
      <img src={compLogo} alt="compLogo" height={ `400px`} />
      </div>
      </div>
          
  )
}

export default Intro