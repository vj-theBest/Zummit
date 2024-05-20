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

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const SupportGroupComponent = () => {
  const currentGroupsData = [
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

  const data = [
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
            className="support-group-header"
          />
        </div>

        <div className="support-group-container">
          <div className="support-group-title">Support Group</div>
          <div className="support-group-description">
            Support group or self-help group is a platform for people going
            through similar concerns or experiences to come together and
            extend emotional support, share experiences, educational
            information and learn coping strategies. The group usually meets
            once a week and aims to garner peer support.
          </div>
          <div className="support-group-current-groups">
            <div className="support-group-current-groups-title">Current Groups</div>
            <div className="support-group-current-groups-list">
              {currentGroupsData.map((item) => (
                <div className="support-group-item">
                  <img
                    src={require(`${item.imageFile}`)}
                    alt=""
                    className="support-group-image"
                  />
                  <div className="support-group-starts">{item.startsFrom}</div>
                  <div className="support-group-details">
                    <h3>{item.heading}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="support-group-more-groups">
            <div className="support-group-more-groups-title">More Groups</div>
            <div className="support-group-more-groups-list">
              {data.map((item) => (
                <div className="support-group-item">
                  <img
                    src={require(`${item.imageFile}`)}
                    alt=""
                    className="support-group-image"
                  />
                  <div className="support-group-starts">{item.startsFrom}</div>
                  <div className="support-group-details">
                    <h3>{item.heading}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportGroupComponent;