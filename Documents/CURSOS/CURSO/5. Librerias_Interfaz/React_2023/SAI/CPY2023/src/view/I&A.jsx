import React from 'react';
import Documentos from 'components/i&a/Documentos.jsx';
import Infografia from 'components/common/Infografia';
import Registro from 'components/i&a/Registro';
import Observador from 'components/i&a/Observador';

function IandA() {
  return (
    <section className="w-full bg-white">
      <div id="I&A" className="pt-4 2xl:pt-4 md:pt-2 xxs:pt-1">
        <span className="sr-only">CONSULTA A PERSONAS INDÍGENAS Y AFROMEXICANAS</span>
      </div>
      <div className="flex flex-col pb-8 mx-40 2xl:mx-40 lg:mx-28 md:mx-24 xs:mx-10 xxs:mx-4">
        <h2 className="text-xl font-semibold sr-only 3xl:pt-6 xxs:pt-4 md:pt-5 xl:text-3xl lg:text-2xl md:text-xl sm:text-md xs:text-md xxs:text-md text-secondary-100 drop-shadow-xl">
          CONSULTA A PERSONAS INDÍGENAS Y AFROMEXICANAS
        </h2>

        <div className="flex flex-col items-center mx-12 xl:mx-12 lg:mx-0 xxs:mx-0">
          <Infografia src1={png[1].src} alt1={png[1].alt} src2={png[2].src} alt2={png[2].src} />
          {/* <Carousel /> */}
          <Infografia src1={png[3].src} alt1={png[3].alt} src2={png[4].src} alt2={png[4].src} />
          <Registro />
          {/* <Folleto /> */}
          <Documentos />
          <Observador />
        </div>
      </div>
    </section>
  );
}

const png = [
  {
    id: 0,
    element: 'banner',
    src: '/assets/i&a/BANNER-LOGO-CONSULTAS-PREVIAS-2023-02.png',
    alt: 'banner-IandA',
  },
  {
    id: 1,
    element: 'infografia',
    src: '/assets/i&a/infografia/Infografía 1_Consulta-Indígena.png',
    alt: 'i&a-infografia-1',
  },
  {
    id: 2,
    src: '/assets/i&a/infografia/Infografía 2_Consulta-Indígena.png',
    alt: 'i&a-infografia-2',
  },
  {
    id: 3,
    element: 'infografia',
    src: '/assets/i&a/infografia/Infografía 3_Consulta-Indígena.png',
    alt: 'i&a-infografia-3',
  },
  {
    id: 4,
    src: '/assets/i&a/BANNERS-CONSULTAS-PREVIAS-2023-V7-TODO-POR-SEPARADO-LOGOS-T02.png',
    alt: 'i&a-logo',
  },
];

export default IandA;

/*
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
    hidden: {opacity: 0, scale: 0.5},
  };
 */
