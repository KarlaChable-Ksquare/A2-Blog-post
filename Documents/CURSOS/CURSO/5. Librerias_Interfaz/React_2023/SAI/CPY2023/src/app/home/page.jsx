import React from 'react';
import Inicio from 'view/Inicio';
import Footer from 'components/footer/Footer';
import Banner from 'components/common/Banner';

function HomePage() {
  return (
    <div className="flex flex-col justify-between select-none min-h-screen">
      <div className="bg-white">
        <Banner
          src="/assets/home/BANNER-LOGO-CONSULTAS-PREVIAS-2023-00-0.png"
          alt="banner-consultas"
          className="w-full justify-self-center mdlg:relative xxs:fixed xxs:top-0 xxs:z-50"
        />
        <div className="lg:mt-0 mdlg:mt-12 md:mt-48 sm:mt-[168px] xs:mt-36 xxs:mt-24 xsxxs:mt-28">
          <Inicio />
        </div>
      </div>
      {/* Tomar en cuenta footer */}
    </div>
  );
}

export default HomePage;
