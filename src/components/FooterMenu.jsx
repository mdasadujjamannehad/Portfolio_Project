import React from 'react'

const FooterMenu =({FooterMenus,className}) => {
    return (
      <p className={`font-jost cursor-pointer  text-base text-FooterP ${className}`}>
          {FooterMenus}
      </p>
  )
}

export default FooterMenu