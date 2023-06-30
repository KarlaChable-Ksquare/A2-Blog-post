import React from 'react';
import Documentos from 'components/discapacidad/Documentos';
import Infografia from 'components/common/Infografia';
import Registro from 'components/discapacidad/Registro';
import Observador from 'components/discapacidad/Observador';

function Discapacidad() {
  return (
    <section className="w-full bg-white">
      <div id="Discapacidad" className="pt-4 2xl:pt-4 md:pt-2 xxs:pt-1">
        <span className="sr-only">CONSULTA A PERSONAS CON DISCAPACIDAD</span>
      </div>
      <div className="flex flex-col pb-8 mx-40 2xl:mx-40 lg:mx-28 md:mx-24 xs:mx-10 xxs:mx-4">
        <h2 className="text-xl font-semibold sr-only 3xl:pt-6 xxs:pt-4 md:pt-5 xl:text-3xl lg:text-2xl md:text-xl sm:text-md xs:text-md xxs:text-md text-disca-200 drop-shadow-xl">
          CONSULTA A PERSONAS CON DISCAPACIDAD
        </h2>

        <div className="flex flex-col items-center mx-12 xl:mx-12 lg:mx-0 xxs:mx-0">
          <Infografia src1={png[1].src} alt1={png[1].alt} src2={png[2].src} alt2={png[2].src} />
          {/* <Video /> */}
          <Infografia src1={png[3].src} alt1={png[3].alt} src2={png[4].src} alt2={png[4].src} />
          {/* <Carousel /> */}
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
    src: '/assets/discapacidad/BANNER-LOGO-CONSULTAS-PREVIAS-2023-01.png',
    alt: 'banner-discapacidad',
  },
  {
    id: 1,
    element: 'infografia',
    src: '/assets/discapacidad/infografia/Infografía 1_Consulta-discapacidad.png',
    alt: 'discapacidad-infografia-1',
  },
  {
    id: 2,
    src: '/assets/discapacidad/infografia/Infografía 2_Consulta-discapacidad.png',
    alt: 'discapacidad-infografia-2',
  },
  {
    id: 3,
    element: 'infografia',
    src: '/assets/discapacidad/infografia/Infografía 3_Consulta-discapacidad.png',
    alt: 'discapacidad-infografia-3',
  },
  {
    id: 4,
    element: 'infografia',
    src: '/assets/discapacidad/BANNERS-CONSULTAS-PREVIAS-2023-V7-TODO-POR-SEPARADO-LOGOS-T01.png',
    alt: 'discapacidad-logo',
  },
];

export default Discapacidad;
