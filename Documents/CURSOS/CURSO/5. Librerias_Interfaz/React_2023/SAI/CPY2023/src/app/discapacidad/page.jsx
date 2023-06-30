import React from 'react';
import Navbar from 'components/nabvar/Navbar';
import Discapacidad from 'view/Discapacidad';
import BannerSection from 'components/common/BannerSection';

function DiscapacidadPage() {
  return (
    <div className="select-none">
      <Navbar imgAlt={png[1].alt} imgSrc={png[1].src} groupAlt={png[2].alt} groupSrc={png[2].src} />
      <Discapacidad />
      <BannerSection bgColor={'bg-disca-100'} src={png[0].src} alt={png[0].alt} />
    </div>
  );
}

const png = [
  {
    id: 0,
    element: 'banner',
    src: '/assets/discapacidad/BANNER-LOGO-CONSULTAS-PREVIAS-2023-01-0.png',
    alt: 'banner-discapacidad',
  },

  {
    id: 1,
    element: 'icon',
    src: '/assets/discapacidad/ICON DW.png',
    alt: 'icon-discapacidad',
  },
  {
    id: 2,
    element: 'img-group',
    src: '/assets/discapacidad/PERSONAJES D.png',
    alt: 'personajes-discapacidad',
  },
];

export default DiscapacidadPage;
