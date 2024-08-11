import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import DevIcon from '../icons/DevIcon'
import ContentIcon from '../icons/ContentIcon'
import DesignIcon from '../icons/DesignIcon'
import { IoIosArrowRoundForward } from "react-icons/io";
import Shape from '../../assets/Mask_group.png'


const Experience = () => {
    return (
        <section className='gradiant py-28'>
            <Container className={'max-w-aboutContainer'}>
                <div className="text-center">
                    <p className='uppercase text-subTitle text-lg font-Volkorn mb-5 font-medium'>Service</p>
                    <Heading headingText={'09+ Years Experience in This Field'} className={'text-text font-medium font-Volkorn text-[50px] w-[500px] mx-auto mb-12'} />
                </div>
                <div className="flex">
                    <div className="h-[446px] w-[410px] bg-white pt-12 pl-12 group hover:drop-shadow-2xl">
                        <DevIcon />
                        <Heading headingText={'Web & Development'} className={'text-text font-extrabold font-Volkorn text-2xl mt-14 '} />
                        <p className='font-jost text-base text-text mt-6 mr-9 leading-6' >Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
                        <div className="flex justify-between">
                            <IoIosArrowRoundForward className='size-16 mt-11 group-hover:text-textHover duration-150 ' />
                            <img src={Shape} alt="shape" />
                        </div>
                          
                    </div>
                    <div className="h-[446px] w-[410px] bg-white pt-12 pl-12 group hover:drop-shadow-2xl ml-8">
                        <ContentIcon />
                        <Heading headingText={'Graphic Design'} className={'text-text font-extrabold font-Volkorn text-2xl mt-14 '} />
                        <p className='font-jost text-base text-text mt-6 mr-9 leading-6' >Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
                        <div className="flex justify-between">
                            <IoIosArrowRoundForward className='size-16 mt-11 group-hover:text-textHover duration-150 ' />
                            <img src={Shape} alt="shape" />
                        </div>
                          
                    </div>
                    <div className="h-[446px] w-[410px] bg-white pt-12 pl-12 group hover:drop-shadow-2xl ml-8">
                        <DesignIcon />
                        <Heading headingText={'Writing and Marketing'} className={'text-text font-extrabold font-Volkorn text-2xl mt-14 '} />
                        <p className='font-jost text-base text-text mt-6 mr-9 leading-6' >Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
                        <div className="flex justify-between">
                            <IoIosArrowRoundForward className='size-16 mt-11 group-hover:text-textHover duration-150 ' />
                            <img src={Shape} alt="shape" />
                        </div>
                          
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Experience