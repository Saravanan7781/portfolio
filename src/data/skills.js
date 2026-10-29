import react from '../assets/skillLogos/react.png'
import mongo from '../assets/skillLogos/mongo.png'
import c from '../assets/skillLogos/c.png'
import css from '../assets/skillLogos/CSS.png'
import html from '../assets/skillLogos/HTML.png'
import mysql from '../assets/skillLogos/mySQL.png'
import node from '../assets/skillLogos/node.png'
import java from '../assets/skillLogos/java.jpeg'
import express from '../assets/skillLogos/express.png'

// percentages are plain numbers; the bars render them as widths
export const skillGroups = [
  {
    group: 'Programming',
    className: 'stacksProgramming',
    skills: [
      { name: 'Java', img: java, expertise: 70, practice: 81, problemSolving: 69, debug: 83, color: '#E62E2E' },
      { name: 'C', img: c, expertise: 50, practice: 70, problemSolving: 60, debug: 70, color: '#00599D' },
    ],
  },
  {
    group: 'Frontend',
    className: 'stacksFrontend',
    skills: [
      { name: 'HTML', img: html, expertise: 80, practice: 80, problemSolving: 90, debug: 90, color: '#E95829' },
      { name: 'CSS', img: css, expertise: 80, practice: 80, problemSolving: 80, debug: 90, color: '#3D9AD9' },
      { name: 'React', img: react, expertise: 70, practice: 80, problemSolving: 70, debug: 80, color: '#01D8FC' },
    ],
  },
  {
    group: 'Backend',
    className: 'stacksBackend',
    skills: [
      { name: 'Express', img: express, expertise: 60, practice: 70, problemSolving: 70, debug: 80, color: '#394854' },
      { name: 'Node.js', img: node, expertise: 70, practice: 80, problemSolving: 70, debug: 80, color: '#4E9443' },
    ],
  },
  {
    group: 'Database',
    className: 'stacksDatabase',
    skills: [
      { name: 'MySQL', img: mysql, expertise: 70, practice: 75, problemSolving: 69, debug: 80, color: '#025368' },
      { name: 'MongoDB', img: mongo, expertise: 80, practice: 85, problemSolving: 90, debug: 87, color: '#429A34' },
    ],
  },
]
