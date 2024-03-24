import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

export default function Carosel() {
  return (
    <div className="bg-skin py-10">
      <div className="bg-skyblue py-10 px-32">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          //add autoplay array
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Page1 />
          </SwiperSlide>
          <SwiperSlide>
            <Page2 />
          </SwiperSlide>
          <SwiperSlide>
            <Page3 />
          </SwiperSlide>
          <SwiperSlide>
            <Page4 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
