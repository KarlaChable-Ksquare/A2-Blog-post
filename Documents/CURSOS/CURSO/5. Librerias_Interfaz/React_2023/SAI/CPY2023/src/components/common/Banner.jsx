import React from 'react';
import Image from 'next/image';

function Banner({src, alt, className}) {
  return (
    <div className="grid w-full h-auto grid-cols-1">
      <Image className={className} src={src} alt={alt} width={2000} height={500} priority />
    </div>
  );
}
export default Banner;

//4000 x 1000
