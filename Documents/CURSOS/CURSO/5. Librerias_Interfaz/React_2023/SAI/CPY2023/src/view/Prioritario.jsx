import React from 'react';
import Infografia from 'components/common/Infografia';
import Documentos from 'components/prioritarios/Documentos';

function Prioritario() {
  return (
    <section className="w-full bg-white">
      <div id="Prioritarios" className="pt-4 2xl:pt-4 md:pt-2 xxs:pt-1">
        <span className="sr-only">CONSULTAS A GRUPOS PRIORITARIOS</span>
      </div>
      <div className="flex flex-col pb-8 mx-40 2xl:mx-40 lg:mx-28 md:mx-24 xs:mx-10 xxs:mx-4">
        <h2 className="text-xl font-semibold sr-only 3xl:pt-6 xxs:pt-4 md:pt-5 xl:text-3xl lg:text-2xl md:text-xl sm:text-md xs:text-md xxs:text-md text-fourth-75 drop-shadow-xl">
          CONSULTAS A GRUPOS PRIORITARIOS
        </h2>

        <div className="flex flex-col items-center mx-12 xl:mx-12 lg:mx-0 xxs:mx-0">
          <Infografia src1={png[1].src} alt1={png[1].alt} src2={png[2].src} alt2={png[2].src} />
          {/* <Formato />
          <Folleto /> */}
          <Documentos />
        </div>
      </div>
    </section>
  );
}

const png = [
  {
    id: 0,
    element: 'banner',
    src: '/assets/prioritario/BANNER-LOGO-CONSULTAS-PREVIAS-2023-03.png',
    alt: 'banner-prioritario',
  },
  {
    id: 1,
    element: 'infografia',
    src: '/assets/prioritario/infografia/Infografía 1_Círculos-de-diálogo.png',
    alt: 'prioritario-infografia-1',
  },
  {
    id: 2,
    src: '/assets/prioritario/infografia/Infografía 2_Círculos-de-diálogo.png',
    alt: 'i&a-infografia-2',
  },
];

export default Prioritario;
