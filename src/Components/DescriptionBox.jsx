import React from 'react'
import react from '..//assets/skillLogos/react.png'

function DescriptionBox({ description: { title,desc} }) {
  
  return (
      <div className="descriptionBoxForMe">

      <div className="descriptionBoxFiller">
              <div className="descriptonboxIMG">

      <img src={ react} alt="" />
      </div>
      </div>
      
      {/* <p>{ desc}</p> */}
    </div>
  )
}

export default DescriptionBox