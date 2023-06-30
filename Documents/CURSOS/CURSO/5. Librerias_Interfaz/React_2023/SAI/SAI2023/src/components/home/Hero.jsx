import React from 'react';
import Carousel from './Carousel.jsx';

import '../../stylesheets/home/hero.css';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className="z-10 flex items-center w-full text-lg md:pt-[40px] sm:pt-[100px] xs:pt-[96px] xxs:pt-[6rem] lg:justify-center md:justify-center ">
        <div className="flex justify-center visible xl:w-1/2 lg:w-1/2 md:w-1/2 xl:visible lg:visible place-items-center hero-welcome "></div>
        <div className="flex flex-col justify-center text-center bg-white border select-none xxs:p-4 xs:p-4 sm:p-8 xl:w-1/2 lg:w-1/2 md:w-1/2 rounded-xl shadow-nude border-primary-50 lg:static lg:rounded-l lg:border lg:p-6 lg:ml-6 md:ml-3 md:p-4 lg:mr-12 md:mt-6 lg:dark:bg-black dark:border-neutral-25 dark:bg-black-75 dark:shadow-green">
          <p className="text-black cursor-default">
            Bienvenido al servidor de aplicaciones del Instituto Electoral y de Participacion
            Ciudadana de Yucatán (IEPAC)
          </p>
          <br />
          <p className="text-black cursor-default">
            Aqui podras encontrar las aplicaciones que se encuentran en desarrollo por el Instituto.
          </p>
        </div>
      </div>

      <Carousel />
    </div>
  );
}

const styles = {
  heroContainer:
    'min-h-screen flex flex-col lg:items-center justify-between px-12 md:items-start bg-backgroundHero bg-cover bg-no-repeat dark:bg-backgroundHeroDark',
};
