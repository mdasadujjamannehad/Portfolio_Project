import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Portfolio from '../../assets/Portfolio.png'
import mainImg from '../../assets/image.png'
import Shape from '../../assets/shape.png'

const Banner = () => {
    return (
        <div className='bg-NavBG pt-[200px] pb-[250px]'>
            <Container className={'flex '}>
                <div className="w-[60%]">
                    <p className='uppercase text-subTitle font-Volkorn mb-7 font-medium'>UI/UX Designer</p>
                    <Heading headingText={'Steven Product'} className={'text-text font-bold font-Volkorn text-[120px]  leading-none'} />
                    <img src={Portfolio} alt="Portfolio" />
                    <p className='text-text font-jost text-xl mt-7 mr-52'>You can find me on Dribble, Instagram, LinkedIn, Behance or Facebook. I'm working at User interface or User experience.</p>
                    <p className='text-gmail border-b-[3px] border-gmail text-[40px] font-semibold w-[340px] mt-8'>Steven@gmai.com</p>
                </div>
                <div className="w-[40%] ">
                    <img src={Shape} alt="shape" className='absolute -mt-32 ml-10' />
                    <img src={mainImg} alt="mainImage" className='absolute -mt-32 ml-10 '/>
                </div>
            </Container>
        </div>
    )
}

export default Banner