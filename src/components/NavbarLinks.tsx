// NavbarLinks.tsx
import React from 'react';
import Link from 'next/link';

interface NavbarLinksProps {
  isOpen: boolean;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ isOpen }) => {
  const links = [
    { id: 1, text: 'Inicio', href: '/' },
    { id: 2, text: 'Series', href: '/series' },
    { id: 3, text: 'Prueba gratis', href: '/free-test' },
    { id: 4, text: 'Descargas', href: '/services' },
    { id: 5, text: 'Web Players', href: '/contact' },
    { id: 6, text: 'Contactanos', href: '/contact' },
  ];

  return (
    <ul className={`nav-links ${isOpen ? 'block' : 'hidden md:flex'} flex gap-10 pr-8 justify-center items-center`}>
      {links.map((link) => (
        <li key={link.id} className="relative">
          <Link href={link.href}>
            <p className="hover:text-blue-500">{link.text}</p>
          </Link>
          <div className="before-line"></div>
        </li>
      ))}
      <li>
        <button className="login-button border border-white rounded-full px-4 py-2 ml-2 text-sm">
          Login
        </button>
      </li>
      <li>
        <button className="join-button bg-blue-500 border border-blue-500 rounded-full px-4 py-2 ml-2 text-sm">
          Join
        </button>
      </li>
    </ul>
  );
};

export default NavbarLinks;
