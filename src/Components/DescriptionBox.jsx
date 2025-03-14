import React from 'react'
import react from '..//assets/skillLogos/react.png'

function DescriptionBox({ description: { title,desc,img} }) {
  
  return (
      <div className="descriptionBoxForMe">

      <div className="descriptionBoxFiller">
              <div className="descriptonboxIMG">

                    <img src={ img} alt="" />
      </div>
      </div>
      
      {/* <p>{ desc}</p> */}
    </div>
  )
}

export default DescriptionBox