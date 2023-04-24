import React from 'react';
// images
import Logo from '../assets/logopic.png';

const Header = () => {
  const goToSection = (sectionId) => {
    window.location.hash = '';
    window.location.hash = sectionId;
  }
  return <header className='py-8'>
    <div className='containter mx-auto'>
      <div className='flex justify-around items-center'>
        {/* logo */}
        <div className='flex'>
        <a href='#'>
          <img src={Logo} width="25px" alt='' />
        </a>
        <h1 className=' h1 text-gradient text-[32px]'>
          Yassin <br />
        EHAB</h1>
        </div>
        {/* button */}
        <button type="" className="btn btn-sm" onClick={() => goToSection('contact')}>
      Work with me
    </button>
      </div>
    </div>
  </header>;
};

export default Header;
