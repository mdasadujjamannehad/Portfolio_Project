import React from 'react'

const FooterHead = ({FooterHeading,className}) => {
  return (
    <h4 className={`font-Volkorn font-bold text-xl  text-FooterP uppercase ${className}`}>
        {FooterHeading}
    </h4>
  )
}

export default FooterHead