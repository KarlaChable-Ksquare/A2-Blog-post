import React from 'react';

function Video() {
  return (
    <div className="flex flex-col items-center h-auto my-10 2xl:my-10 lg:my-6 xxs:my-4">
      <iframe
        className="xl:w-[680px] xl:h-[420px] lg:w-[560px] lg:h-[315px] md:w-[460px] md:h-[235px] sm:w-[380px] sm:h-[200px] xxs:w-[280px] xxs:h-[160px]"
        src="https://www.youtube-nocookie.com/embed/WHQEad_pOI0?start=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  );
}

export default Video;
