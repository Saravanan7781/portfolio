import React, { useState } from 'react'
import '../Styles/PercentageOfStack.css'
import { skillGroups } from '../data/skills'
import ElaborationOfStack from '../SubComponents/ElaborationOfStack'

function PercentageOfStack() {
  const [skill, setSkill] = useState(skillGroups[0].skills[0]);

  return (
    <section className="percentageOfStack" id="skills">
      <h2>How much I know</h2>
      <div className="stackSpaceForStacks">
        <div className="stacksIknowTab" role="group" aria-label="Pick a skill to see details">
          {skillGroups.map(({ group, className, skills }) => (
            <div className={className} key={group}>
              <span className="stackGroupLabel">{group}</span>
              <div className="skillsRow">
                {skills.map((s) => (
                  <button
                    type="button"
                    key={s.name}
                    className={`skillButton ${skill.name === s.name ? 'skillButtonActive' : ''}`}
                    aria-pressed={skill.name === s.name}
                    aria-label={s.name}
                    title={s.name}
                    style={{ '--accent': s.color }}
                    onClick={() => setSkill(s)}
                  >
                    <img src={s.img} alt="" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ElaborationOfStack skill={skill} />
      </div>
    </section>
  )
}

export default PercentageOfStack
