'use client';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, EffectCoverflow, Autoplay, Navigation} from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../../stylesheets/home/carousel.css';
import ElementCard from './ElementCard.jsx';
import carousel from '../../json/carousel/carousel.json';

const Carousel = () => {
  return (
    <div className="relative w-full gap-12 bg-opacity-50 border rounded-lg carousel lg:w-full lg:py-4 lg:px-0 md:p-4 md:mb-6 sm:mb-8 md:w-full bg-primary-25 border-primary-50 md:flex md:items-center dark:bg-secondary-25 dark:bg-opacity-30 dark:border-secondary-50">
      <Swiper
        className="w-full p-1"
        modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
        navigation={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{clickable: true}}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 4,
          },
        }}>
        {carousel.map(element => (
          <SwiperSlide
            key={element._uid}
            className="px-8 transition-colors bg-white border rounded-lg md:px-6 border-primary-50 hover:border-primary-75 dark:border-secondary-50 hover:dark:border-neutral-100 hover:dark:bg-neutral-25 hover:dark:bg-opacity-100">
            <ElementCard
              key={element._uid}
              title={element.title}
              description={element.description}
              image={element.img}
              link={element.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
