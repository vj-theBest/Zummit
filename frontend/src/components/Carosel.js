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
import { Link } from "react-router-dom";

const pagesList = [
  {
    title: "Our Story",
    desc: "An online therapy for mental health resource to empower,educate and transform with both group & individual therapy's",
    imgPath: "./images/img.jpg"
  },
  {
    title: "Our Mission",
    desc: "An online therapy for mental health resource to empower,educate and transform with both group & individual therapy's",
    imgPath: "./images/img.jpg"
  },
  {
    title: "Our Vision",
    desc: "An online therapy for mental health resource to empower,educate and transform with both group & individual therapy's",
    imgPath: "./images/img.jpg"
  },
]

const Page = ({title, desc, imgPath}) => {
  return (
    <div className="flex">
      <div className="flex justify-center items-center ">
        <div className="w-[50%]">
          <img
            className="object-cover mt-8 pr-10  w-[50vw] h-[45vh]"
            src={require(imgPath)}
            alt="About Us"
          ></img>
        </div>
        <div className="w-[45%] flex flex-col justify-center gap-8">
          <h1 className="text-2xl text-cyan-800 font-semibold">{title}</h1>
          <p className="text-xl">
            {desc}
          </p>

          <Link to="/about">
          <a className="text-end text-xl font-bold text-cyan-800">
            Know more
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default function Carosel() {
  return (
    <div className="bg-skin pt-10">
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
