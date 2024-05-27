import React, { useState } from "react";

const Appointment = () => {
  const appointmentsList = [
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `\u20B91000`,
      report: "Completed",
      reason: "NA",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `\u20B91000`,
      report: "Completed",
      reason: "NA",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `\u20B91000`,
      report: "Completed",
      reason: "NA",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `-\u20B91000`,
      report: "Cancelled",
      reason: "Emergency Call",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `-\u20B91000`,
      report: "Cancelled",
      reason: "Emergency Call",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `-\u20B91000`,
      report: "Cancelled",
      reason: "Emergency Call",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `-\u20B91000`,
      report: "Cancelled",
      reason: "Emergency Call",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `-\u20B91000`,
      report: "Cancelled",
      reason: "Emergency Call",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `-\u20B91000`,
      report: "Cancelled",
      reason: "Emergency Call",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `-\u20B91000`,
      report: "Cancelled",
      reason: "Emergency Call",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `-\u20B91000`,
      report: "Cancelled",
      reason: "Emergency Call",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `-\u20B91000`,
      report: "Cancelled",
      reason: "Emergency Call",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `\u20B91000`,
      report: "Upcoming",
      reason: "-",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `\u20B91000`,
      report: "Upcoming",
      reason: "-",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `\u20B91000`,
      report: "Completed",
      reason: "NA",
    },
    {
      clientName: "Ragini Verma",
      appointmentTime: {
        date: "02/08/2023",
        time: "11:00 AM- 11:30 AM",
      },
      therapyType: "Support group Anxiety",
      amount: `\u20B91000`,
      report: "Completed",
      reason: "NA",
    },
  ];

  const cancelledStyle = { color: "#B00202" };
  const completedStyle = { color: "#02B04A" };
  const upcomingStyle = { color: "#02B04A" };
  const getStyle = (report) => {
    switch (report) {
      case "Cancelled":
        return cancelledStyle;
      case "Completed":
        return completedStyle;
      case "Upcoming":
        return upcomingStyle;
      default:
        return {};
    }
  };
  const getButtonBgColor = (report) => {
    switch (report) {
      case "Cancelled":
        return "#B00202";
      case "Completed":
        return "#0190B1";
      case "Upcoming":
        return "#FED365";
      default:
        return "#0190B1";
    }
  };
  const getReasonColor = (report) => {
    switch (report) {
      case "Cancelled":
        return "#B00202";
      case "Upcoming":
        return "#02B04A";
      default:
        return "#001519";
    }
  };
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const BtnHandler = () => {
    setShowSort(!showSort);
  };
  const handleSortClick = (selected) => {
    setSelectedSort(selected);
  };
  return (
    <div className="w-full m-10 ">
      {/* Search Bar */}
      <div className="flex w-[95%] justify-end gap-10 items-center">
        <div className="flex items-center bg-white w-[80%]   pl-4 rounded-lg -[#B4F0FF] ">
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
        <div className="p-2 cursor-pointer rounded-full ">
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
      {/* heading */}
      <div className="w-[95%] flex justify-between items-center text-2xl my-8">
        <h1>Appointments</h1>
        <div className="relative text-white cursor-pointer bg-[#0190B1] w-[7rem] p-1 text-center  rounded-md text-base ">
          <div
            className={`flex ${
              showSort && "border-b"
            } border-white justify-center items-center gap-2 py-1 text-center`}
          >
            <h1>Sort</h1>
            {showSort ? (
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                onClick={BtnHandler}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75 8.625L11.5 14.375L17.25 8.625"
                  stroke="#FDFEF1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                onClick={BtnHandler}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.43945 16.4996V10.2773"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.43945 6.72222V0.5"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.94141 16.5V8.5"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.94141 4.94444V0.5"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4434 16.4991V12.0547"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4434 8.5V0.5"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 10.2773H5.87722"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.50195 4.94434H12.3792"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0059 12.0547H18.8831"
                  stroke="#FDFEF1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
          {showSort && (
            <div className="absolute left-0 rounded-b-md px-1 text-sm  w-full  bg-[#0190b1]">
              <h1
                onClick={handleSortClick("All")}
                className={`${
                  selectedSort === "All" ? "#F7F131" : ""
                } border-b rounde-md border-white text-center  py-1`}
              >
                All
              </h1>
              <h1
                onClick={handleSortClick("Pending")}
                className={`${
                  selectedSort === "All" ? "#F7F131" : ""
                } border-b rounde-md border-white text-center p-1`}
              >
                Pending
              </h1>
              <h1
                onClick={handleSortClick("Cancelled")}
                className={`${
                  selectedSort === "All" ? "#F7F131" : ""
                } border-b rounde-md border-white text-center p-1`}
              >
                Cancelled
              </h1>
              <h1
                onClick={handleSortClick("Completed")}
                className={`${
                  selectedSort === "All" ? "#F7F131" : ""
                } rounde-md border-white text-center p-1`}
              >
                Completed
              </h1>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 w-[95%] rounded-lg bg-white ">
        <div className="bg-[#DCDCDD] text-lg  rounded-lg w-full p-2 text-black flex gap-2 items-center">
          <h1 className="w-[10rem] ">Client Name</h1>
          <h1 className="w-[10rem]">Appointment Time</h1>
          <h1 className="w-[10rem] ">Therapy type</h1>
          <h1 className="w-[5rem]  text-end">Amount</h1>
          <h1 className="w-[7rem] ">Status</h1>
          <h1>Reason</h1>
        </div>

        <div className="h-[100vh] mt-2 overflow-y-scroll">
          {appointmentsList.map((item) => (
            <div className="flex gap-2 w-full p-2 text-lg rounded-lg items-center">
              <div className="w-[10rem] ">
                <h1>{item.clientName}</h1>
              </div>
              <div className="w-[10rem] ">
                <h1>{item.appointmentTime.date}</h1>
                <p className="text-[#1e3f47] text-sm font-light">
                  <span>{item.appointmentTime.time}</span>
                </p>
              </div>
              <h1 className="w-[10rem] ">{item.therapyType}</h1>
              <h1 style={getStyle(item.report)} className="w-[5rem] text-end ">
                {item.amount}
              </h1>
              <div className="w-[7rem]">
                <button
                  style={{ backgroundColor: getButtonBgColor(item.report) }}
                  className="py-1 rounded-md w-[6.5rem]"
                >
                  {item.report}
                </button>
              </div>
              <h1 style={{ color: getReasonColor(item.report) }} className="">
                {item.reason}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
