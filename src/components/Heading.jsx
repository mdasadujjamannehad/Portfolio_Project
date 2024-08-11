import React from 'react'

const Heading = ({className,headingText}) => {
  return (
    <h3 className={` ${className}`}>{headingText}</h3>
  )
}

export default Heading