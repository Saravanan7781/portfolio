import React, { useRef } from 'react'
import '../Styles/Profile.css'
import skateboard from '../assets/skateboard.png';
import cat from '../assets/cat.png'
import myLogo from '../assets/myLogo.png'
import tv from '../assets/tv.png'
import react from '../assets/skillLogos/react.png'
import mongo from '../assets/skillLogos/mongo.png'
import c from '../assets/skillLogos/c.png'
import css from '../assets/skillLogos/CSS.png'
import node from '../assets/skillLogos/node.png'
import mysql from '../assets/skillLogos/mySQL.png'
import UseCatAnimation from './customAnimations/UseCatAnimation';

const orbitingSkills = [
  { src: react, alt: 'React' },
  { src: mongo, alt: 'MongoDB' },
  { src: node, alt: 'Node.js' },
  { src: css, alt: 'CSS' },
  { src: c, alt: 'C' },
  { src: mysql, alt: 'MySQL' },
]

function Profile() {
  const profileRef = useRef(null);

  UseCatAnimation(profileRef);

  return (
    <section className="mainProfileContainer" aria-labelledby="aboutHeading">
      <div className='profile'>
        <div className="catWithSkate">
          <img src={cat} alt="" className='cat' height={115} width={300} />
          <img src={skateboard} alt="" height={70} width={300} className='skateboard' />
        </div>
      </div>
      <div className="aboutIntro">
        <h2 id="aboutHeading">Hi, I'm Saravanan</h2>
        <p>
          Computer Science and Business Systems graduate (CGPA 8.42) and MERN stack developer, currently interning at TLX Tech Solutions,
          an Aptean subsidiary, building LLM workflows with Langflow and MCP. I team-lead end-to-end projects, from a placement portal
          to a hostel grievance tracker, and I teach Java and web basics to juniors.
        </p>
      </div>
      <div className="subProfileContainer">
        <div className="avatar" ref={profileRef}>
          <img src={tv} alt="" className="tv" />
          <img src={myLogo} alt="Cartoon avatar of Saravanan" className="myLogo" />
          {orbitingSkills.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} height={100} className="skillLogos" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Profile
