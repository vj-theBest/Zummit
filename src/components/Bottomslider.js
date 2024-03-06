import React, { Component } from "react";
import Slider from "react-slick";

export function CenterMode (){
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    speed: 4000,
    };

  return (
    <div className="bg-skin ">
    <p className="text-[28px] leading-[42px] w-[1124px] h-[42px] gap-[32px] pt-[32px] mb-[32px] m-auto">Reach out us</p>
    <div className="slider-container pt-[40px] w-[100%] text-[20px] text-center">
    <Slider {...settings}>
      <div>
        <h3>Abuse</h3>
      </div>
      <div>
        <h3>Anxiety</h3>
      </div>
      <div>
        <h3>Anger Management</h3>
      </div>
      <div>
        <h3>Burn Out</h3>
      </div>
      <div>
        <h3>ADHD</h3>
      </div>
      <div>
        <h3>Bipolar Disorder</h3>
      </div>
    </Slider>
  </div>

  </div>
);
}

export default CenterMode;