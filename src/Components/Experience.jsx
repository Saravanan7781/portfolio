import React, { useRef } from 'react'
import '../Styles/Experience.css'
import UseScrollAnimation from './customAnimations/UseScrollAnimation'

const stats = [
  { value: '8.42', label: 'CGPA, B.Tech CSBS' },
  { value: '120+', label: 'Students trained' },
  { value: '36 hr', label: "BITHACKS'23 finalist" },
  { value: 'Reliance', label: 'Foundation Scholar' },
]

const experience = [
  {
    when: 'Aug 2026 - Present',
    title: 'Intern',
    place: 'TLX Tech Solutions (an Aptean subsidiary)',
    points: [
      'Building LLM workflows with Langflow, and developing custom skills and MCP servers that extend the Langflow platform.',
      'Working with T-SQL and Microsoft Fabric on the data side.',
    ],
    tags: ['Langflow', 'MCP', 'RAG', 'LLM', 'T-SQL', 'Microsoft Fabric', 'SSMS'],
  },
]

const education = [
  {
    when: '2022 - 2026',
    title: 'B.Tech Computer Science and Business Systems',
    place: 'Bannari Amman Institute of Technology',
    points: ['CGPA 8.42'],
  },
  {
    when: '2021 - 2022',
    title: 'Higher Secondary Certificate',
    place: 'Ponnu Matriculation Higher Secondary School',
    points: ['94%'],
  },
  {
    when: '2019 - 2020',
    title: 'Secondary School Certificate',
    place: 'Ponnu Matriculation Higher Secondary School',
    points: ['90%'],
  },
]

function Entry({ item }) {
  return (
    <li className="timelineItem">
      <span className="timelineWhen">{item.when}</span>
      <h4>{item.title}</h4>
      <p className="timelinePlace">{item.place}</p>
      {item.points.length > 0 && (
        <ul className="timelinePoints">
          {item.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      )}
      {item.tags && (
        <ul className="timelineTags">
          {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      )}
    </li>
  )
}

function Experience() {
  const ref = useRef(null)
  UseScrollAnimation(ref, 'experienceVisible')

  return (
    <section className="experienceSection" id="experience" ref={ref}>
      <h2>Experience &amp; education</h2>
      <ul className="statsRow">
        {stats.map(({ value, label }) => (
          <li key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </li>
        ))}
      </ul>
      <div className="experienceColumns">
        <div className="experienceColumn">
          <h3>Experience</h3>
          <ol className="timeline">
            {experience.map((item) => <Entry item={item} key={item.title} />)}
          </ol>
        </div>
        <div className="experienceColumn">
          <h3>Education</h3>
          <ol className="timeline">
            {education.map((item) => <Entry item={item} key={item.title} />)}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Experience
