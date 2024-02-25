import React from 'react';
import Link from 'next/link';

type Props = {
    isOpen: boolean;
}

const NavLinks = ({ isOpen}:Props) => {
  const linkClass = isOpen ? 'block' : 'hidden';

  return (
    <ul className={`text-center ${linkClass}`}>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/planes">Planes</Link>
      </li>
      <li>
        <Link href="/prueba-gratis">Prueba Gratis</Link>
      </li>
      <li>
        <Link href="/descargas">Descargas</Link>
      </li>
      <li>
        <Link href="/webplayer">Webplayer</Link>
      </li>
      <li>
        <Link href="/contactanos">Contáctanos</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
