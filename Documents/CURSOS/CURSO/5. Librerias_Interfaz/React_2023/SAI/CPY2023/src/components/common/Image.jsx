import React from 'react';
import Image from 'next/image';

export default function Imagen({src, alt}) {
  return (
    <Image
      className="w-auto mdlg:w-auto xxs:w-3/4"
      src={src}
      alt={alt}
      width={800}
      height={334}
      priority
    />
  );
}

//1600 x 667
