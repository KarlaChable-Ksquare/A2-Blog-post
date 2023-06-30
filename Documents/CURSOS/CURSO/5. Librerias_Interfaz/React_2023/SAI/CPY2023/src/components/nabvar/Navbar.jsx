'use client';
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import ModalMenu from 'components/modal/ModalMenu';
import NavbarChange from 'components/common/NavbarChange';

function Navbar({imgSrc, imgAlt, groupAlt, groupSrc}) {
  const pathName = usePathname();
  const isDiscaActive = pathName?.includes('/discapacidad');
  const isIandAActive = pathName?.includes('/indigena');
  const isPriorActive = pathName?.includes('/circulos');

  const NavbarList = [
    {id: 1, title: 'Inicio', direccion: '/'},
    {id: 2, title: 'Personas con Discapacidad', direccion: '/discapacidad', active: isDiscaActive},
    {
      id: 3,
      title: 'Personas Indigenas y Afromexicanas',
      direccion: '/indigena',
      active: isIandAActive,
    },
    {id: 4, title: 'Circulos de Diálogo', direccion: '/circulos', active: isPriorActive},
  ];

  return (
    <NavbarChange
      colorDiv="bg-global-100"
      NavbarList={NavbarList.map(link => (
        <Link
          key={link.id}
          href={link.direccion}
          className={link.active ? styles.navMenuActive : styles.navMenu}>
          <p>{link.title}</p>
        </Link>
      ))}
      modal={
        <div className="md:hidden xs:visible" role="dialog" aria-modal="true">
          <ModalMenu />
        </div>
      }
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      groupSrc={groupSrc}
      groupAlt={groupAlt}
    />
  );
}

const styles = {
  imageLogo:
    'cursor-pointer hover:opacity-50 hover:scale-[1.1] md:h-[68px] xxs:h-[38px] md:w-[68px] xxs:w-[38px]',
  navMenu: 'text-sm font-semibold text-white p-2 hover:text-global-200 md:text-xs lg:text-sm',
  navMenuActive:
    'text-sm font-bold text-global-200 p-2 hover:text-global-200 md:text-xs lg:text-sm ',
};

export default Navbar;
