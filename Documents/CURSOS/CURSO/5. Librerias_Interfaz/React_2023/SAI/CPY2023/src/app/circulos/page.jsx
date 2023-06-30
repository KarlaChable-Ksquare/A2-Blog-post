import React from 'react';
import Prioritario from 'view/Prioritario';
import Navbar from 'components/nabvar/Navbar';
import BannerSection from 'components/common/BannerSection';

function PrioritarioPage() {
  return (
    <div className="select-none">
      <Navbar imgAlt={png[1].alt} imgSrc={png[1].src} groupAlt={png[2].alt} groupSrc={png[2].src} />
      <Prioritario />
      <BannerSection bgColor={'bg-prior-100'} src={png[0].src} alt={png[0].alt} />
    </div>
  );
}

const png = [
  {
    id: 0,
    element: 'banner',
    src: '/assets/prioritario/BANNER-LOGO-CONSULTAS-PREVIAS-2023-03-0.png',
    alt: 'banner-prioritario',
  },
  {
    id: 1,
    element: 'icon',
    src: '/assets/prioritario/ICON PW.png',
    alt: 'icon-prioritario',
  },
  {
    id: 2,
    element: 'img-group',
    src: '/assets/prioritario/PERSONAJES P.png',
    alt: 'personajes-prioritario',
  },
];

export default PrioritarioPage;
