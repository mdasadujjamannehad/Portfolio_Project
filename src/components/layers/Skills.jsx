import React from 'react'
import Container from '../Container'
import Heading from '../Heading'

const Skills = () => {
    return (
        <section className='bg-portBG py-36 '>
            <Container className={'max-w-aboutContainer '}>
                    <p className='uppercase text-subTitle font-Volkorn mb-5 text-lg'>OUR SKILLS</p>
               <div className="flex">
               <div className="w-1/2">
                    <Heading headingText={'Modern Digital Creative Agency'} className={'text-text font-medium font-Volkorn text-[50px] leading-[60px]'} />
                    <p className='text-text font-jost mt-8 text-lg mr-24 leading-6'>If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
                    <button className='px-10 py-5 bg-textHover text-lg font-medium border-spacing-2 text-NavBG dborder mt-10'>Download CV</button></div>
                <div className="w-1/2 font-Volkorn font-medium text-lg">
                    <div className="flex justify-between">
                        <p>Adobe Illustration</p>
                        <p>60%</p>
                    </div>
                    <div className="w-full h-[10px] bg-text">
                        <div className="h-full w-[60%] bg-textHover mt-4"></div>
                    </div>
                    <div className="flex justify-between mt-9">
                        <p>Adobe Photoshop</p>
                        <p>85%</p>
                    </div>
                    <div className="w-full h-[10px] bg-text">
                        <div className="h-full w-[85%] bg-textHover mt-4"></div>
                    </div>
                    <div className="flex justify-between mt-9">
                        <p>Figma</p>
                        <p>90%</p>
                    </div>
                    <div className="w-full h-[10px] bg-text">
                        <div className="h-full w-[90%] bg-textHover mt-4"></div>
                    </div>
                    <div className="flex justify-between mt-9 ">
                        <p>Adobe XD</p>
                        <p>70%</p>
                    </div>
                    <div className="w-full h-[10px] bg-text">
                        <div className="h-full w-[70%] bg-textHover mt-4"></div>
                    </div>
                </div>
               </div>
            </Container>


        </section>
    )
}

export default Skills