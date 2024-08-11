import React from 'react'
import Container from '../Container'

const Youtube = () => {
    return (
        <section className='bg-portBG'>
            <Container className={'max-w-aboutContainer'}>
                <div className="bg-textHover py-9 px-16 flex justify-between">
                    <div className="w-1/2 items-center">
                    <p className='font-bold text-[40px] font-Volkorn text-white'>Subscribe to our Youtube!</p>
                    <p className=' text-lg font-jost text-white mt-2 leading-6 mr-20'>Please like and subscribe to my channel and press the bell icon to get new video updates.</p>
                    </div>
                    <div className="w-1/2 mt-8 ml-24">
                    <input type="text" placeholder='Enter your email' className='bg-textHover border border-white text-white placeholder-white py-7 px-5 font-jost w-[290px] mr-4'/>
                    <button className='px-14 py-7 bg-white text-lg font-medium border-spacing-2 text-textHover dborder Nbtn align-middle'>Download CV</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Youtube