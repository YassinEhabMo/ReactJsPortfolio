import React from 'react';
// images
import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='containter mx-auto'>
      <div className='flex justify-around items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
