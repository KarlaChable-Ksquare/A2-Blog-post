import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ModalMenu from 'view/modalMenu';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      {/* Nabvar Superior */}
      <nav className={styles.navContainer} aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="p-1 -m-1">
            <span className="sr-only">Sistema de Aplicaciones del IEPAC</span>
            <Image
              className={styles.imageLogo}
              src="https://www.iepac.mx/2019/assets/img/logo.png"
              alt="Iepac logo"
              width={240}
              height={240}
              priority
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className={styles.navMenu}>
            Home
          </Link>
          <a href="#" className={styles.navMenu}>
            Servicios
          </a>
          <Link href="/directorio" className={styles.navMenu}>
            Directorio
          </Link>
          <a href="#" className={styles.navMenu}>
            Profile
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className={styles.navMenu}>
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Nabvar Superior para screen md- button */}
        <div className="lg:hidden md:visible" role="dialog" aria-modal="true">
          <ModalMenu />
        </div>
      </nav>
    </div>
  );
}

const styles = {
  navbarContainer: 'fixed inset-x-0 top-0 z-50 bg-primary-50 dark:bg-secondary-50 select-none',
  navContainer: 'h-[72px] flex items-center justify-between p-4 lg:px-8',
  navMenu:
    'text-sm font-bold leading-6 text-white px-6 hover:text-black-100 hover:bg-primary-25  hover:rounded-lg dark:hover:bg-secondary-25 dark:hover:border-black-75 ',
  imageLogo: 'h-12 w-auto cursor-pointer hover:opacity-50',
  navSide:
    'fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-lighter px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black-900/10 dark:bg-neutral-50 dark:text-neutral-25',
  navMenuS:
    '-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black-100 hover:bg-primary-50 bg-opacity-80 dark:hover:bg-secondary-25 dark:text-white',
};
