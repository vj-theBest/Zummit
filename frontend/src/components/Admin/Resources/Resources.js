import React, { useState, useEffect } from "react";
import axios from "axios";
import Main_Dashboard_img from "../../images/Main_Dashboard_img.png";
const Resources = () => {
 const [addedReview,setAddedReview] = useState([])
  
  useEffect(() => {
    axios
      .post("https://zummit-chandan.onrender.com/api/admin/resources", {
        input: "Dom@gmail.com",
        token: 
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWFiOGNjNDQ1MmIxM2Q1MGJmYTYzNCIsImlhdCI6MTcxNzIyMTU4MCwiZXhwIjoxNzE5ODEzNTgwfQ.ZKxsQmALrx7CpkOpNzA1i1Ub1exmI9ghmsdY9bQVzuI",
      })
      .then((response) => {
        if (response.data.success) {
          setAddedReview(response.data.resource);
        } else {
          console.error("Failed to fetch appointments");
        }
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  }, []);

  const pendingStyle = { color: "#FED365" };
  const publishedStyle = { color: "#02B04A" };

  const PendingIcon = ( 
    <svg
      width="12"
      height="12"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0001 28.3333C22.3639 28.3333 28.3334 22.3638 28.3334 15C28.3334 7.63616 22.3639 1.66663 15.0001 1.66663C7.63628 1.66663 1.66675 7.63616 1.66675 15C1.66675 22.3638 7.63628 28.3333 15.0001 28.3333Z"
        stroke="#FED365"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 7V15L20.3333 17.6667"
        stroke="#FED365"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const PublishedIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3334 13.44V14.6666C28.3318 17.5419 27.4008 20.3395 25.6792 22.6424C23.9576 24.9453 21.5378 26.63 18.7806 27.4452C16.0233 28.2604 13.0764 28.1625 10.3794 27.1661C7.68232 26.1697 5.37962 24.3281 3.8147 21.9161C2.24977 19.504 1.50647 16.6507 1.69565 13.7817C1.88483 10.9127 2.99636 8.18175 4.86445 5.99608C6.73255 3.81041 9.25713 2.28716 12.0617 1.65351C14.8662 1.01986 17.8004 1.30976 20.4268 2.47998"
        stroke="#02B04A"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.3333 4L15 17.3467L11 13.3467"
        stroke="#02B04A"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div className="w-full m-10 ">
      {/* Search Bar */}
      <div className="flex justify-center gap-10 items-center">
        <div className="flex items-center bg-white w-[70%] border  pl-4 rounded-lg border-[#B4F0FF] ">
          <svg
            width="25"
            height="26"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
              stroke="#787579"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.0004 21.5004L16.6504 17.1504"
              stroke="#787579"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="h-12 ml-5 rounded-lg outline-none w-[100%]"
          />
        </div>
        <div className="p-2 rounded-full ">
          <svg
            width="45"
            height="45"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="white" />
            <path
              d="M26.306 36.0003C26.0716 36.4044 25.7351 36.7399 25.3303 36.973C24.9255 37.2062 24.4665 37.3289 23.9993 37.3289C23.5322 37.3289 23.0732 37.2062 22.6684 36.973C22.2636 36.7399 21.9271 36.4044 21.6927 36.0003M37.3327 30.667H10.666C11.7269 30.667 12.7443 30.2456 13.4944 29.4954C14.2446 28.7453 14.666 27.7279 14.666 26.667V20.0003C14.666 17.525 15.6493 15.151 17.3997 13.4007C19.15 11.6503 21.524 10.667 23.9993 10.667C26.4747 10.667 28.8487 11.6503 30.599 13.4007C32.3494 15.151 33.3327 17.525 33.3327 20.0003V26.667C33.3327 27.7279 33.7541 28.7453 34.5043 29.4954C35.2544 30.2456 36.2718 30.667 37.3327 30.667Z"
              stroke="#0190B1"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="29" y="8" width="8" height="8" rx="4" fill="#B00202" />
          </svg>
        </div>
      </div>
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl  my-8">Groups</h1>
        <button className="rounded-md py-2 px-4   text-lg bg-[#00677F] text-white">
          Add New
        </button>
      </div>
      <div className="w-[90%] pt-5 pl-5 bg-[#ffffff]">
        <div className="flex gap-10  mb-8 text-lg">
          <h1>Publised</h1>
          <h1>Pending</h1>
        </div>
        <div className="w-full flex gap-5 justify-center flex-wrap">
          {addedReview.map((item) => (
            <>
              <div className=" w-[40%] p-2 mb-2">
                <div className="flex gap-4 justify-between">
                  <img
                    className="w-24 h-24"
                    src={require("../../images/Main_Dashboard_img.png")}
                    alt=""
                  />
                  <div>
                    <h1 className="text-sm leading-[20px] w-[88%] font-medium mb-2">
                      {item.title}
                    </h1>
                    <p className="text-xs leading-[15px] w-[95%] font-light ">
                      {item.review}
                    </p>
                  </div>
                </div>
                <div className="flex text-xs mt-4 justify-between">
                  <h1>Added By: {item.author}</h1>
                  <h1
                    className="flex justify-center items-center gap-1"
                    style={
                      item.report === "Pending" ? pendingStyle : publishedStyle
                    }
                  >
                    {item.report}
                    {item.report === "Pending" ? PendingIcon : PublishedIcon}
                  </h1>

                  <h1 className="flex justify-center items-center text-[#0190b1] gap-2 cursor-pointer">
                    Edit
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 18.8801V26.0001C26 26.7073 25.719 27.3856 25.219 27.8857C24.7189 28.3858 24.0406 28.6667 23.3333 28.6667H4.66667C3.95942 28.6667 3.28115 28.3858 2.78105 27.8857C2.28095 27.3856 2 26.7073 2 26.0001V7.33341C2 6.62617 2.28095 5.94789 2.78105 5.4478C3.28115 4.9477 3.95942 4.66675 4.66667 4.66675H11.7867"
                        stroke="#0190B1"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23.3333 2L28.6667 7.33333L15.3333 20.6667H10V15.3333L23.3333 2Z"
                        stroke="#0190B1"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </h1>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
