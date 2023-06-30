'use client';
import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Welcome() {
  return (
    <div className="mx-40 3xl:mx-40 xl:mx-28 lg:mx-20 mdlg:mx-18 md:mx-14 xs:mx-10 xxs:mx-8">
      <ul className="grid content-center justify-between grid-cols-3 gap-x-6 min-h-[40vh] mdlg:grid-cols-3 xxs:grid-cols-1 w-full xxs:w-auto">
        {cards.map(card => (
          <motion.div
            key={card.id}
            className="grid grid-cols w-auto h-auto mx-auto xxs:w-auto mdlg:mx-auto md:mx-32 sm:mx-28 xsxxs:mx-20 xs:mx-14 xxs:mx-10 px-0 mdlg:px-0 md:px-[88px] sm:px-[72px] xs:px-[64px] xxs:px-[0px]"
            animate={{opacity: 1, scale: 1}}
            initial={{opacity: 0, scale: 0.5}}
            transition={{
              duration: 1.8,
              delay: card.delay,
              ease: [0, 0.71, 0.2, 1.01],
            }}>
            <li className={style.liStyle + card.borderStyle}>
              <Link href={card.direccion} className="">
                <div className="h-[200px] w-auto 3xl:h-[200px] xl:h-auto lg:h-[180px] mdlg:h-[132px] xxs:h-[100px] flex justify-center px-4 py-4 xl:py-4 lg:py-6 mdlg:py-3 md:py-2 xs:py-1 xxs:py-0 ">
                  <Image
                    className="justify-self-center"
                    src={card.pathLogo}
                    alt={card.alt}
                    width={1000}
                    height={250}
                    priority={true}
                  />
                </div>

                <div className={style.cardStyle + card.style}>
                  <Image
                    className="justify-self-center md:h-auto xxs:h-[32px] h-auto w-full lg:w-full md:w-[364px] xs:w-[300px] xxs:w-[200px]"
                    src={card.pathBanner}
                    alt={card.alt}
                    width={1000}
                    height={150}
                    priority={true}
                  />
                </div>
              </Link>
            </li>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

const cards = [
  {
    id: 1,
    title: 'Personas con Discapacidad',
    direccion: '/discapacidad',
    pathLogo: '/assets/discapacidad/LOGO CPY2023 01.png',
    pathBanner: '/assets/discapacidad/NAME 01.png',
    alt: 'Discapacidad-logo',
    style: 'bg-disca-75',
    borderStyle: 'border-disca-75',
    delay: 0.4,
  },
  {
    id: 2,
    title: 'Personas Indigenas y Afromexicanas',
    direccion: '/indigena',
    pathLogo: '/assets/i&a/LOGO CPY2023 02.png',
    pathBanner: '/assets/i&a/NAME-02.png',
    alt: 'i&a-logo',
    style: 'bg-ianda-100',
    borderStyle: 'border-ianda-100',
    delay: 0.6,
  },
  {
    id: 3,
    title: 'Grupos Prioritarios',
    direccion: '/circulos',
    pathLogo: '/assets/prioritario/LOGO CPY2023 03.png',
    pathBanner: '/assets/prioritario/NAME 03.png',
    alt: 'prioritario-logo',
    style: 'bg-prior-75',
    borderStyle: 'border-prior-75',
    delay: 0.8,
  },
];

const style = {
  cardStyle:
    'py-2 rounded-b-lg h-[100px] 2xl:h-[100px] lg:h-[86px] md:h-[64px] xxs:h-auto w-full md:w-full xxs:w-auto flex flex-row justify-end items-center  ',
  liStyle:
    'bg-white border-2 3xl:my-10 xl:my-8 md:lg-[28px] md:my-2 sm:my-4 xxs:my-2 rounded-xl hover:opacity-80 hover:scale-[1.05]  ',
};

export default Welcome;
