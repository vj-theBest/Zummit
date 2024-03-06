import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Card = () => {
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
    autoplaySpeed: 4000,
    cssEase: "ease-in-out"
  };

  return (
    <div className="bg-skin px-28 py-10">
        <p className="text-3xl">
          Upcoming Groups
        </p>
      <div className=" ">
        <Slider {...settings}>
          {Data.map((item) => (
            <div>
              <div className=" w-[90%] p-4  rounded-lg hover:shadow-lg">
                <img src={require(`${item.imageFile}`)} alt="" />
                <p className="text-xl text-center leading-[25px] text-[#121014] pb-2">
                  {item.heading}
                </p>
                <p className="leading-[20px] text-[#272529]">
                  {item.description}
                </p>
              <div className="bg-[#F7F131] rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] float-right translate-x-[-1rem] translate-y-[-26rem]">
                <p>Starts: {item.startsFrom}</p>
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-skin py-10">
    <p className="text-3xl font-extralight">Reach out us</p>
    <div className="slider-container pt-16  text-2xl font-light text-center">
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
    </div>
  );
};
