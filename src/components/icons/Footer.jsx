import React from 'react'
import Container from '../Container'
import Logo from '../../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterHead from '../FooterHead';
import FooterMenu from '../FooterMenu';

const Footer = () => {
    return (
        <footer className='bg-portBG py-24' >
            <Container className={'max-w-aboutContainer '}>
                <div className="flex justify-between">
                    <div className="w-72">
                        <img src={Logo} alt={'logo'} className='logo' />
                        <p className='mt-6 font-jost text-base text-FooterP leading-6'>
                            Design League is the world’s leading community have for creatives to share, grow, and learn. Design League is the world’s leading community.
                        </p>
                        <div className="flex">
                            <div className="relative h-10 w-10 hover:bg-textHover rounded-xl  mt-6  hover:text-white duration-150 cursor-pointer  mr-[5px]">
                                <FaFacebookF className=' absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-2xl ' />
                            </div>
                            <div className="relative h-10 w-10 hover:bg-textHover rounded-xl  mt-6  hover:text-white duration-150 cursor-pointer mr-[5px]">
                                <FaTwitter className=' absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-2xl ' />
                            </div>
                            <div className="relative h-10 w-10 hover:bg-textHover rounded-xl  mt-6  hover:text-white duration-150 cursor-pointer mr-[5px]">
                                <RiInstagramFill className=' absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-2xl ' />
                            </div>
                            <div className="relative h-10 w-10 hover:bg-textHover rounded-xl  mt-6  hover:text-white duration-150 cursor-pointer mr-[5px]">
                                <FaLinkedinIn className=' absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-2xl ' />
                            </div>
                            <div className="relative h-10 w-10 hover:bg-textHover rounded-xl  mt-6  hover:text-white duration-150 cursor-pointer ">
                                <FaYoutube className=' absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-2xl ' />
                            </div>


                        </div>
                    </div>
                    <div className="">
                        <FooterHead FooterHeading={'Product'} className={'mb-6'} />
                        <FooterMenu FooterMenus={'Features'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Pricing'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Case studies'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Reviews'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Updates'} className={'mb-3'} />
                        

                    </div>
                    <div className="">
                        <FooterHead FooterHeading={'Company'} className={'mb-6'} />
                        <FooterMenu FooterMenus={'About'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Contact us'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Careers'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Culture'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Blog'} className={'mb-3'} />
                    </div>
                    <div className="">
                        <FooterHead FooterHeading={'Support'} className={'mb-6'} />
                        <FooterMenu FooterMenus={'Getting started'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Help center'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Server status'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Report a bug'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Chat support'} className={'mb-3'} />
                    </div>
                    <div className="">
                        <FooterHead FooterHeading={'Downloads'} className={'mb-6'} />
                        <FooterMenu FooterMenus={'iOS'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Android'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Mac'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Windows'} className={'mb-3'} />
                        <FooterMenu FooterMenus={'Chrome'} className={'mb-3'} />
                    </div>
                </div>
                
                   <div className="border-b border-FooterBorder mt-20"></div>
<p className='font-jost text-xs text-center mt-10'>Copyright © 2023 Design By Estiak. All rights reserved.</p>
            </Container>
        </footer>
    )
}

export default Footer