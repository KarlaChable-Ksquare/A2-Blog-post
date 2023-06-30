'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, EffectCoverflow, Navigation} from 'swiper';

import '../../stylesheets/i&a/carousel.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const youtube = [
  {id: 1, src: 'https://www.youtube-nocookie.com/embed/WHQEad_pOI0', title: 'YouTube 1'},
  {id: 2, src: 'https://www.youtube-nocookie.com/embed/WDTaC_ho_Qs', title: 'YouTube 2'},
  {id: 3, src: 'https://www.youtube-nocookie.com/embed/sJJhlSDj7yI', title: 'YouTube 3'},
  {id: 4, src: 'https://www.youtube-nocookie.com/embed/58VBV8kHwPc', title: 'YouTube 4'},
  {id: 5, src: 'https://www.youtube-nocookie.com/embed/TCTLNTEq6jk', title: 'YouTube 5'},
  {id: 6, src: 'https://www.youtube-nocookie.com/embed/qoPvfJ13SHA', title: 'YouTube 6'},
];

function Carousel() {
  return (
    <div className="flex flex-col items-center w-full mt-10 mb-8 rounded-lg md:my-8 xxs:my-4 bg-lighter bg-opacity-20 backdrop-blur-lg">
      <div className="relative items-center w-full bg-opacity-50 lg:w-full md:w-full md:flex md:items-center carousel">
        <Swiper
          className="w-full"
          modules={[Pagination, EffectCoverflow, Navigation]}
          navigation={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          pagination={{clickable: true}}
          breakpoints={{
            512: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1536: {
              slidesPerView: 2,
            },
          }}>
          {youtube.map(video => (
            <SwiperSlide key={video.id}>
              <iframe
                className="2xl:w-[560px] 2xl:h-[315px] mdlg:w-[460px] mdlg:h-[235px] md:w-[380px] md:h-[200px] xxs:w-[280px] xxs:h-[160px]"
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
export default Carousel;
