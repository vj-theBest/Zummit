import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

export default function Carosel() {
  return (
    <div className='bg-skyblue p-10'>
    <div className='font-extralight ml-20 text-3xl text-cyan-700'>About us</div>
      <Swiper
        
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Page1/></SwiperSlide>
        <SwiperSlide><Page2/></SwiperSlide>
        <SwiperSlide><Page3/></SwiperSlide>
        <SwiperSlide><Page4/></SwiperSlide>
       
      </Swiper>
    </div>
  );
}

  

