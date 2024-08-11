
import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Aboutme from '../../assets/image2.png'

const AboutMe = () => {
    return (
        <section className='gradiant py-28'>
            <Container className={'max-w-aboutContainer flex'}>
                <div className="w-2/3">
                    <p className='uppercase text-subTitle font-Volkorn mb-7 font-medium text-lg'>About me</p>
                    <Heading headingText={'At The Heart of Design is An Opportunity to Problem Solve.'} className={'text-text font-bold font-Volkorn text-[50px]'} />
                    <img src={Aboutme} alt="Aboutme" />
                </div>
                <div className="w-1/3">
                    <p className='text-text font-jost text-lg mt-[236px] '>Solvency based award-winning design director and UI/UX design expert with 10 years of experience in design and management.</p>
                    <p className='text-text font-jost text-lg mt-7 '>Internum various sit a met mattes ululate denim. Orcin asellus celestas tells rut rum tells pelletised eu. Nunc pulvinar supine et ligula albacore.</p>

                    <button className='px-10 py-5 bg-textHover text-lg font-medium border-spacing-2 text-NavBG dborder mt-7'>Download CV</button>
                </div>
            </Container>
        </section>
    )
}

export default AboutMe