import React from 'react';
//import icons
import {BiChat, BiHomeAlt, BiUser} from 'react-icons/bi';
import {BiClipboard, BiBriefcase} from 'react-icons/bi';
//link
import { Link } from 'react-scroll';


const Nav = () => {
  return <nav className='fixed bottom-2 lg:botton-8 w-full overflow-hidden z50'>
    <div className='container mx-auto'>
      {/* nav inner */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 items-center
      rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50'>
        <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'>
        <BiHomeAlt />
        </Link>
        <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'>
        <BiUser />
        </Link>
        <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'>
        <BiClipboard />
        </Link>
        <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'>
        <BiBriefcase />
        </Link>
        <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center 
        justify-center'>
        <BiChat />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
