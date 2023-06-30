'use client';
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, EffectCoverflow, Navigation, FreeMode, Thumbs} from 'swiper';

import '../../stylesheets/discapacidad/carousel.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col items-center w-full mt-10 mb-8 rounded-lg md:my-8 xxs:my-4 bg-lighter bg-opacity-20 backdrop-blur-lg">
      <div className="relative items-center w-full bg-opacity-50 lg:w-full md:w-full md:flex md:items-center carousel">
        <Swiper
          className="w-full"
          modules={[Pagination, EffectCoverflow, Navigation, FreeMode, Thumbs]}
          pagination={{clickable: true}}
          navigation={true}
          grabCursor={true}
          loop={true}
          centeredSlides={true}>
          {youtube.map(video => (
            <SwiperSlide key={video.id}>
              <iframe
                className="xl:w-[680px] xl:h-[420px] lg:w-[560px] lg:h-[315px] md:w-[460px] md:h-[235px] sm:w-[380px] sm:h-[200px] xxs:w-[280px] xxs:h-[160px]"
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const youtube = [
  {id: 1, src: 'https://www.youtube-nocookie.com/embed/WHQEad_pOI0', title: 'YouTube 1'},
  {id: 2, src: 'https://www.youtube-nocookie.com/embed/WDTaC_ho_Qs', title: 'YouTube 2'},
  {id: 3, src: 'https://www.youtube-nocookie.com/embed/sJJhlSDj7yI', title: 'YouTube 3'},
  {id: 4, src: 'https://www.youtube-nocookie.com/embed/58VBV8kHwPc', title: 'YouTube 4'},
  {id: 5, src: 'https://www.youtube-nocookie.com/embed/TCTLNTEq6jk', title: 'YouTube 5'},
  {id: 6, src: 'https://www.youtube-nocookie.com/embed/qoPvfJ13SHA', title: 'YouTube 6'},
];

export default Carousel;
