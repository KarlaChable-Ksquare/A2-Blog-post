'use client';
import ButtonNavbar from 'components/common/ButtonNavbar';
import Link from 'next/link';
import React, {useState} from 'react';
import {usePathname} from 'next/navigation';

function ModalMenu() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const pathName = usePathname();
  const isDiscaActive = pathName?.includes('/discapacidad');
  const isIandAActive = pathName?.includes('/indigena');
  const isPriorActive = pathName?.includes('/circulos');

  const NavbarList = [
    {id: 1, title: 'Inicio', direccion: '/'},
    {
      id: 2,
      title: 'Personas con Discapacidad',
      direccion: '/discapacidad',
      active: isDiscaActive,
    },
    {
      id: 3,
      title: 'Personas Indigenas y Afromexicanas',
      direccion: '/indigena',
      active: isIandAActive,
    },
    {id: 4, title: 'Circulos de Diálogo', direccion: '/circulos', active: isPriorActive},
  ];

  return (
    <div className="grid grid-cols-1">
      <div className="flex flex-row-reverse">
        {showModal === false ? (
          <ButtonNavbar onClick={() => setShowModal(true)}></ButtonNavbar>
        ) : (
          <ButtonNavbar onClick={closeModal}></ButtonNavbar>
        )}
      </div>

      <div>
        {showModal ? (
          <div className="relative w-auto">
            <div className="absolute -ml-[50vw]">
              <div className="sticky z-50 outline-none select-none focus:outline-none bg-lighter mx-4">
                <div className="mt-[14px]">
                  <ul className="border-[1px] border-global-75 rounded-lg py-2">
                    <li className="grid grid-cols-4 gap-3 place-items-center">
                      {NavbarList.map(link => (
                        <Link
                          key={link.id}
                          href={link.direccion}
                          className={
                            link.active ? styles.navMenu + styles.navMenuActive : styles.navMenu
                          }
                          onClick={closeModal}>
                          <p className="px-2 text-center">{link.title}</p>
                        </Link>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const styles = {
  navMenu:
    'px-1.5 py-1 text-sm leading-6 rounded-md text-global-200 hover:rounded-md hover:font-bold xs:text-xs xsxss:text-xsxxs xxs:text-xxs  ',
  navMenuActive: 'font-bold ',
};

export default ModalMenu;
