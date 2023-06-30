import React from 'react';
import Image from 'next/image';

function BannerSection({src, alt, bgColor}) {
  return (
    <div className={'grid w-full h-auto grid-cols-1 ' + {bgColor}}>
      <Image
        className="w-full justify-self-center"
        src={src}
        alt={alt}
        width={2000}
        height={500}
        priority
      />
    </div>
  );
}
export default BannerSection;
