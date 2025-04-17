
import '../Styles/PercentageOfStack.css'

function ElaborationOfStack({ skill = {} } ) {
    const { img, expertise, practice, problemSolving,Debug,color } = skill;
  return (
      <div className="elaborationOfTheStackSelected">
          <h1>Specialization</h1>
          <div className="specializationOfStack">
                   <div className="stackSelected">
              <img src={ img} alt="" />
            </div>
            <div className="detailsOfTheSelectedStack">
                  <div className="skillSelectedForStack expertiseOfTheStackSelected">
                      <p>Expertise </p>  
                      <div className="progressBarOfTheStackSelected" style={{"width":expertise , "backgroundColor":color}}></div>
                  </div>
                  <div className="skillSelectedForStack practiceOfTheSkillSelected">
                      <p>Practice</p>
                      <div className="progressBarOfTheStackSelected" style={{width:practice, "backgroundColor":color} }></div>
                  </div>
                  <div className="skillSelectedForStack problemSolvingOfTheSkillSelected">
                      <p>Problem Solving</p>
                      <div className="progressBarOfTheStackSelected" style={{width:problemSolving, "backgroundColor":color}}></div>
                  </div>
                  <div className="skillSelectedForStack debugOfTheSkillSelected">
                      <p>Debug</p>
                      <div className="progressBarOfTheStackSelected" style={{width:Debug, "backgroundColor":color}}></div>
                  </div>
            </div>
              </div>
        </div>
  )
}

export default ElaborationOfStack;