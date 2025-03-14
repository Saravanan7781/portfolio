import React from 'react'
import '../Styles/Profile.css'
import skateboard from '../assets/skateboard.png';
import cat from '../assets/cat.png'
import myLogo from '../assets/myLogo.png'
import tv from '../assets/tv.png'
//skill logos
import react from '../assets/skillLogos/react.png'
import mongo from '../assets/skillLogos/mongo.png'
import c from '../assets/skillLogos/c.png'
import css from '../assets/skillLogos/CSS.png'
import html from '../assets/skillLogos/HTML.png'
import mysql from '../assets/skillLogos/mySQL.png'
import node from '../assets/skillLogos/node.png'


import { useState,useRef} from 'react'
import UseCatAnimation from './customAnimations/UseCatAnimation';



function Profile() {
  const profileRef = useRef();
  const [hovered, setHovered] = useState(0);

  function skillLogosHovered() {
    setHovered(1);
  }
  
  function skillLogosLeave() {
    setHovered(0);
  }

  UseCatAnimation(profileRef);


  return (
    <div className="mainProfileContainer">
      <div className='profile' >
        <div className="catWithSkate">
          <img src={cat} alt="" className='cat' height={ `115px`} width={ `300px`}/>
          <img src={skateboard} alt="" height={`70px`} width={ `300px`} className='skateboard'/>
        </div>
      </div>
      <div className="subProfileContainer">
        <div className="avatar" ref={profileRef}>
          <img src={tv } alt=""className="tv" />
          <img onMouseEnter={skillLogosHovered} 
            onMouseLeave={skillLogosLeave}
            src={myLogo} alt="" className="myLogo" />
          
          <img src={react} alt="react" height={`100px`} className={`skillLogos`} />
          <img src={mongo} alt="mongo" height={`100px`} className={`skillLogos`}/>
          {/* <img src={html} alt="html" height={`100px`} className="skillLogos originalPos3"/> */}
          <img src={node} alt="node" height={`100px`} className={`skillLogos  `}/>
          <img src={css} alt="css" height={`100px`} className={`skillLogos  `}/>
          <img src={c} alt="c" height={`100px`} className={`skillLogos  `}/>
          <img src={mysql} alt="mysql" height={`100px`} className={`skillLogos  `}/>

          </div>
      </div>

    </div>
  )
}

export default Profile