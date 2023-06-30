import React from 'react';
import Image from 'next/image';

function NavbarChange({colorDiv, NavbarList, modal, imgSrc, imgAlt, groupSrc, groupAlt}) {
  return (
    <div className={styles.fatherDiv + colorDiv}>
      <nav
        className="grid items-center h-full grid-cols-2 gap-x-8 md:gap-x-8 xxs:gap-x-4"
        aria-label="Global">
        <div className="flex flex-row w-full">
          <Image
            className=" p-3 cursor-pointer hover:opacity-50 hover:scale-[1.1] w-[84px] h-[84px] lg:h-[84px] lg:w-[84px] mdlg:h-[72px] mdlg:w-[72px] md:h-[72px] md:w-[72px] xxs:h-12 xxs:w-12 xxs:p-1 md:p-1.5 mdlg:p-2 lg:p-3"
            src={imgSrc}
            alt={imgAlt}
            width={224}
            height={224}
            priority={true}
          />
          <Image
            className="h-[84px] lg:h-[84px] mdlg:h-[72px] md:h-[72px] xxs:h-12 w-auto"
            src={groupSrc}
            alt={groupAlt}
            width={2973}
            height={1801}
            priority={true}
          />
        </div>

        <div className="hidden text-center md:flex">
          <ul className="flex flex-row">
            <li className="grid grid-cols-4 gap-y-2 gap-x-3 place-items-center">{NavbarList}</li>
          </ul>
        </div>

        {/* Nabvar Superior para screen md- button */}
        {modal}
      </nav>
    </div>
  );
}

const styles = {
  fatherDiv: 'sticky inset-x-0 top-0 z-50 w-full px-2 select-none h-28 2xl:h-28 md:h-24 xxs:h-14 ',
};

export default NavbarChange;
