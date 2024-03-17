'use client'

import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-50  bg-transparent py-2 flex flex-col justify-evenly items-start text-white md:flex-row md:items-center md:gap-0 md:justify-around ">
      <div className="drop-shadow-lg pl-6">
        <Image src="https://i.ibb.co/18bDXmt/creane-un-logo-para-una-empresa-de-streamen-que-2-removebg-preview.png" width={160} height={50} alt="Logo Image"/>
      </div>
      <div className="hamburger cursor-pointer" onClick={toggleNavbar}>
        <div className={`line1 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`line2 ${isOpen ? 'w-0' : ''}`}></div>
        <div className={`line3 ${isOpen ? 'rotate-[-45deg] -translate-y-2' : ''}`}></div>
      </div>
      <NavbarLinks isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
