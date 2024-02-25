'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks'; // Componente para la lista de enlaces
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=''>
      
      <div className=''>
        <Link href="/">
          
            <Image src={''} width={40} height={40} alt='Logo del proyecto'/>
          
        </Link>
      </div>

      
      <NavLinks isOpen={isMobileMenuOpen} />

      
      <div className=''>
        <div className=''>
          
        </div>
        <div className=''>
          
        </div>
        <div className=''>
          
        </div>
      </div>

      
      <div className='' onClick={toggleMobileMenu}>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
      </div>
    </nav>
  );
};

export default Navbar;
