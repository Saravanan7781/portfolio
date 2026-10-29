import React from 'react'
import '../Styles/ProjectContainer.css'
import Projects from './Projects'
import { projects } from '../data/projects'

function ProjectContainer() {
  return (
    <section className="projectsSection" id="projects">
      <h2>Things I've built</h2>
      <p className="projectsSub">Real apps, built for real problems. Each card links to the code.</p>
      <div className="PostsStyling">
        {projects.map((project) => (
          <Projects data={project} key={project.name} />
        ))}
      </div>
    </section>
  )
}

export default ProjectContainer
