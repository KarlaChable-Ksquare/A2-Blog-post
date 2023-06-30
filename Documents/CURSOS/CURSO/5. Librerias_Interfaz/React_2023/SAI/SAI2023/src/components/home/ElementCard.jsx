import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ElementCard({title, description, image, link}) {
  return (
    <div className="px-5 py-4 m-2 rounded-lg group lg:py-8 hover:scale-105 sm:m-6">
      <Link
        href={link}
        // target="_blank"
        // rel="noopener noreferrer"
        className="grid items-center text-left lg:grid-cols-2 md:grid-cols-1 md:place-items-center">
        <Image
          src={image}
          alt="IEPAC"
          width={500}
          height={500}
          className="h-28 w-28 hover:opacity-50"
        />
        <div className="gap-x-8">
          <h2
            className={`mb-3 text-2xl text-primary-100 font-bold md:text-center dark:text-secondary-50`}>
            {title}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-neutral-100 opacity-50 md:text-center`}>
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}

//<div className="flex flex-row items-center justify-center"></div>
const style = {
  card: '',
};
