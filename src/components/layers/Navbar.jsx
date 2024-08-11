import React from 'react'
import Logo from '../../assets/logo.png'
import Container from '../Container';
import { CiSearch } from "react-icons/ci";
import { RxDividerVertical } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {

    const navLists = ["Home", "Projects", "Pages", "Blog", "Contact"];
    return (
        <header className='bg-NavBG py-5 border-b border-navBorder'>
            <Container >
                <nav className='flex '>
                    <img src={Logo} alt={'logo'} className='' />
                    <div className='flex flex-1  items-center justify-center'>
                        {navLists.map((nav) => (
                            <div key={nav} className='px-11 text-lg font-jost text-text cursor-pointer hover:text-textHover transition-all'>{nav}</div>
                        ))}</div>
                    <div className="flex gap-5 mt-2">
                        <CiSearch className='size-7'/> 
                        <RxDividerVertical className='size-7'/>
                        <CgMenuRight className='size-7'/>
                    </div>
                </nav>
            </Container>
        </header>

    )
}

export default Navbar