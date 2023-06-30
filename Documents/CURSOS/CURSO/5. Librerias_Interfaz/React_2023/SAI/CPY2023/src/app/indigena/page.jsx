import React from 'react';
import IandA from 'view/I&A';
import Navbar from 'components/nabvar/Navbar';
import BannerSection from 'components/common/BannerSection';

function IandAPage() {
  return (
    <div className="select-none">
      <Navbar imgAlt={png[1].alt} imgSrc={png[1].src} groupAlt={png[2].alt} groupSrc={png[2].src} />
      <IandA />
      <BannerSection bgColor={'bg-ianda-100'} src={png[0].src} alt={png[0].alt} />
    </div>
  );
}

const png = [
  {
    id: 0,
    element: 'banner',
    src: '/assets/i&a/BANNER-LOGO-CONSULTAS-PREVIAS-2023-02-0.png',
    alt: 'banner-IandA',
  },
  {
    id: 1,
    element: 'icon',
    src: '/assets/i&a/ICON IW.png',
    alt: 'icon-IandA',
  },
  {
    id: 2,
    element: 'img-group',
    src: '/assets/i&a/PERSONAJES I.png',
    alt: 'personajes-IandA',
  },
];

export default IandAPage;
