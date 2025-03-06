import React from 'react'
import react from '..//assets/skillLogos/react.png'

function DescriptionBox({ description: { title,desc} }) {
  // const { }
  // const { title, desc } = props;
  // const {description } = props;
  // console.log(title)
  return (
      <div className="descriptionBoxForMe">
      {/* <h1>{title}</h1> */}

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