import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Item1 from '../../assets/item1.png'
import Item2 from '../../assets/item2.png'
import Item3 from '../../assets/item3.png'

const Blog = () => {
  return (
   <section className='bg-portBG py-32'>
    <Container className={'max-w-aboutContainer'}>
    <p className='uppercase text-subTitle font-Volkorn mb-5 text-lg'>Our blog</p>
    <Heading headingText={'The Future of AI in Digital Marketing'} className={'text-text font-medium font-Volkorn text-[50px] w-[457px] leading-[60px]'} />
    <img src={Item1} alt="Item1" className='my-8'/>
    <img src={Item2} alt="Item2" className='mb-8'/>
    <img src={Item3} alt="Item3" />
    
    </Container>
   </section>
  )
}

export default Blog