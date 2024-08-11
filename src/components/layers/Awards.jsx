import React from 'react'
import Container from '../Container'
import AwardsPic from '../../assets/awards.png'
const Awards = () => {
  return (
    <div className="bg-portBG">
        <Container className={'bg-portBG'}>
        <img src={AwardsPic} alt="Awards" />
    </Container>
    </div>
  )
}

export default Awards