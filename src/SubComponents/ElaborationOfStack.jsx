import '../Styles/PercentageOfStack.css'

const metrics = [
  { key: 'expertise', label: 'Expertise' },
  { key: 'practice', label: 'Practice' },
  { key: 'problemSolving', label: 'Problem Solving' },
  { key: 'debug', label: 'Debug' },
]

function ElaborationOfStack({ skill }) {
  const { name, img, color } = skill;
  return (
    <div className="elaborationOfTheStackSelected" aria-live="polite" style={{ "--accent": color }}>
      <h3>Specialization</h3>
      <p className="selectedStackName">{name}</p>
      <div className="specializationOfStack">
        <div className="stackSelected">
          <img src={img} alt={name} />
        </div>
        <div className="detailsOfTheSelectedStack">
          {metrics.map(({ key, label }) => (
            <div className="skillSelectedForStack" key={key}>
              <p>{label} <span>{skill[key]}%</span></p>
              <div className="progressTrack">
                <div
                  className="progressBarOfTheStackSelected"
                  role="progressbar"
                  aria-label={`${name} ${label}`}
                  aria-valuenow={skill[key]}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: `${skill[key]}%`, backgroundColor: color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ElaborationOfStack;
