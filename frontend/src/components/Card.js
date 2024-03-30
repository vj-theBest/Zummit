import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 

  const Data2 = [
    "Abuse",
    "Anxiety",
    "Anger Management",
    "Burn Out",
    "ADHD",
    "Bipolar Disorder"
  ];
  const Data = [
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description: "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description: "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'

    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'

    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out"
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1400,
    autoplaySpeed: 1400,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "60px",
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
    swipe: false,
    pauseOnHover: false,
  };

  return (
    <div className="bg-skin px-28 py-10">
      <p className="text-4xl font-medium text-center my-4">
        Upcoming Groups
      </p>
      <div className="py-[32px]">
        <Slider {...settings}>
          {Data.map((item) => (
            <div>
              <div className="w-[348px] h-[485px] p-[10px] rounded-lg hover:shadow-lg">
                <div className="relative">
                  <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
                    <p>Starts: {item.startsFrom}</p>
                  </div>
                  <img src={require(`${item.imageFile}`)} alt="" className="w-full" />
                </div>
                <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2">
                  {item.heading}
                </p>
                <p className="leading-[20px] text-[#272529]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="py-10">
        <p className="text-4xl font-medium text-center">Reach out us</p>
        <div className="slider-container pt-16 text-3xl font-medium text-center">
          <Slider {...settings2}>
            {Data2.map((item, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <h3
                  className={`${index === currentSlide ? "slickCurrent text-5xl transform scale-110 transition-all duration-1000 ease-in-out" : "text-3xl"}`}
                >
                  {item}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Card
