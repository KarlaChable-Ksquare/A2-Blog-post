import React from 'react';
import Image from 'next/image';

export default function ElementCard({element}) {
  const {apellido1, apellido2, nombres, unidad, subunidad, correo, extension, img} = element;

  return (
    <div className="grid place-items-center grid-cols-2 m-2 py-1 px-1.5 bg-white dark:bg-neutral-15 border hover:scale-[1.025] rounded-lg border-primary-100 group hover:shadow-nude08 dark:hover:shadow-green08 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 overflow-hidden dark:border-secondary-75 ">
      <Image
        src={img}
        alt={`${nombres} ${apellido1} ${apellido2}`}
        width={100}
        height={100}
        className="m-1 border rounded-full  border-primary-100 dark:border-secondary-75 h-32 w-28 hover:opacity-50 object-cover"
        priority
      />
      <div className="gap-x-4 select-text">
        <h3 className={`mb-1 text-primary-100 font-bold md:text-center dark:text-secondary-50 `}>
          {`${apellido1} ${apellido2} ${nombres}`}
        </h3>
        <h4 className={`mb-1 text-primary-50 font-semibold md:text-center dark:text-secondary-25 `}>
          {correo}
        </h4>
        <p className={`mb-1 max-w-[30ch] text-neutral-100 opacity-80 md:text-center `}>
          {`${unidad} ${subunidad}`}
        </p>
        <p className={`mb-1 max-w-[30ch]  text-neutral-100 opacity-50 md:text-center`}>
          {extension ? `Extensión: ${extension} ` : ``}
        </p>
      </div>
    </div>
  );
}

//<div className="flex flex-row items-center justify-center"></div>
const style = {
  card: '',
};
