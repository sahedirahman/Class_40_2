import React from 'react'

const Image = ({className,imgSrc,imgAlt}) => {
  return (
    <img src={imgSrc} alt={imgAlt} className={`${className}`} />
  )
}

export default Image
