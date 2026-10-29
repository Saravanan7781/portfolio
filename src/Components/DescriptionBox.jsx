import React from 'react'

function DescriptionBox({ description: { title, desc, img }, style }) {
  return (
    <figure className="descriptionBoxForMe" style={style}>
      <div className="descriptionBoxFiller">
        <div className="descriptonboxIMG">
          <img src={img} alt={title} />
        </div>
        <figcaption>{title}</figcaption>
      </div>
    </figure>
  )
}

export default DescriptionBox
