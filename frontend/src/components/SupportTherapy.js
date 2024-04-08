import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const SupportTherapy = () => {
  const CurrentGroupsData = [
    {
      imageFile: "./images/support-group-card1.png",
      heading: "Anxiety",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/support-group-card2.png",
      heading: "Loneliness",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
  ];

  const Data = [
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
    {
      imageFile: "./images/flower-img.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: "16 March",
    },
  ];

  return (
    <>
      <div className="">
        <div>
          <img
            src={require("./images/SupportgroupHeader.png")}
            className="w-full"
          ></img>
        </div>

        <div className="ms-20 me-20 mt-10">
          <div className="text-3xl text-cyan-700 font-semibold mt-5">
            Support Group
          </div>
          <div className="mt-5 w-[90%]">
            <p className="text-justify support-group-headline">
              Support group or self-help group is a platform for people going
              through similar concerns or experiences to come together and
              extend emotional support, share experiences, educational
              information and learn coping strategies. The group usually meets
              once a week and aims to garner peer support.
            </p>
          </div>
          <div className="flex mb-20 mt-8">
            <div className="w-[40%]">
              <div className="w-[85%]">
                <div className="text-2xl text-cyan-700 mt-16 support-group-slider-heading">
                  Current Groups
                </div>
                <div className="mt-8 mb-12">
                  <p className="p-0 m-0 support-group-headline">
                    Adipiscing nisl auctor mattis sit at integer odio risus
                    ridiculus.
                  </p>
                </div>
                <div className="flex">
                  <div onClick={"#"} className="">
                    <img
                      src={require("./images/Aroe_left.png")}
                      className="w-full h-[45px] w-[50px]"
                    ></img>
                  </div>
                  <div onClick={"#"} className="ml-[30px]">
                    <img
                      src={require("./images/Aroe.png")}
                      className="w-full h-[45px]  w-[50px]"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] ps-4">
              <div className=" bg-sky-200 w-full h-20 mt-2"></div>
              <div className="flex mt-[-88px] ml-14">
                {CurrentGroupsData.map((item) => (
                  <div className="flex  justify-center inline-none me-5 w-[265px] h-[363px]">
                    <div className=" my-2  p-[10px] rounded-lg hover:shadow-lg cursor-pointer bg-[#FDFEF1]">
                      <div className="relative">
                        <div className="">
                          <img
                            src={require(`${item.imageFile}`)}
                            alt=""
                            className="w-full "
                          />
                        </div>
                        <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
                          <p>Starts: {item.startsFrom}</p>
                        </div>
                      </div>
                      <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
                        {item.heading}
                      </p>
                      <p className="leading-[20px] text-[#272529]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* <img src={require('./images/Lonliness.png')}></img> */}
              </div>
            </div>
          </div>
          <div>
            <div className="text-2xl text-cyan-700 mt-16 support-group-slider-heading mb-6">
              More Groups
            </div>
            <React.Fragment>
              <div className="relative flex flex-wrap mb-96 justify-center gap-10">
                {Data.map((item) => (
                  <div className="flex  justify-center inline-none">
                    <div className="w-[348px] my-2 h-[485px] p-[10px] rounded-lg hover:shadow-lg cursor-pointer bg-[#FDFEF1]">
                      <div className="relative">
                        <div className="relative group overflow-hidden">
                          <img
                            src={require(`${item.imageFile}`)}
                            alt=""
                            className="w-full transition-transform duration-500 transform scale-100 group-hover:scale-125"
                          />
                        </div>
                        <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[5px]">
                          <p>Starts: {item.startsFrom}</p>
                        </div>
                      </div>
                      <p className="text-xl w-full text-center font-semibold text-[#121014] pb-2 hover:underline">
                        {item.heading}
                      </p>
                      <p className="leading-[20px] text-[#272529]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportTherapy;
