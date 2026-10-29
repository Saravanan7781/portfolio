import React, { useRef } from 'react'
import '../Styles/Projects.css'
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import UseScrollAnimation from './customAnimations/UseScrollAnimation';

function Projects({ data }) {
  const { name, tagline, description, tags, repo, live, gradient } = data;
  const cardRef = useRef(null);

  UseScrollAnimation(cardRef);

  return (
    <article className="projectCard" ref={cardRef}>
      <div className="projectBanner" style={{ background: gradient }} aria-hidden="true">
        <span>{name.charAt(0)}</span>
      </div>
      <div className="projectBody">
        <h3>{name}</h3>
        <p className="projectTagline">{tagline}</p>
        <p className="projectDescription">{description}</p>
        <ul className="projectTags">
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="projectLinks">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> Code
          </a>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <FiExternalLink aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Projects
