import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={ `max-w-NavContainer mx-auto ${className}` } >{children}</div>
  )
}

export default Container