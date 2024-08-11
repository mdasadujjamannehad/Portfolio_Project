import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Projects from '../../assets/Images.png'

const Portfolio = () => {
    return (
        <section className='bg-portBG  '>
            <Container className={'max-w-NavContainer'}>
            <Heading headingText={'My Working Portfolio'} className={'text-text font-bold font-Volkorn text-[50px] text-center mb-20'} />
            <img src={Projects} alt="Projects" />
            <p className='text-gmail border-b-[3px] border-gmail text-[40px] font-semibold w-[300px] mt-24 mx-auto '>View all Projects</p>
            </Container>
        </section>
    )
}

export default Portfolio