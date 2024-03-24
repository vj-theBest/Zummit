import React, { useState } from "react";

const Register__Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [role, setRole] = useState("Client");

  const handleClick = () => {
    setSignUp(!signUp);
  };
  const handleClient = () => {
    setRole("Client");
    console.log("Client");
  };
  const handleTherapist = () => {
    setRole("Therapist");
    console.log("Thearipist");
  };
  return (
    <div className="flex justify-center mx-28 ml-48 my-16 items-center w-full">
      {/* Left Container */}
      <div className="w-[50%]">
        <div className="w-[50%] flex flex-col gap-5 shadow-lg rounded-lg bg-white p-5">
          <p className="text-center text-2xl font-medium">
            {signUp ? "Login" : "Register"}
          </p>
          <div className="flex justify-around gap-10 cursor-pointer">
            <p
              onClick={handleClient}
              className={role === "Client" ? "active" : "inactive"}
            >
              Client
            </p>
            <p
              onClick={handleTherapist}
              className={role === "Therapist" ? "active" : "inactive"}
            >
              Therapist
            </p>
          </div>
          {!signUp && (
            <input
              className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
            type="text"
            placeholder="Password"
          />
          {!signUp && (
            <input
              className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
              type="text"
              placeholder="Re-Enter Passowrd"
            />
          )}
          <button className="w-[40%] rounded-lg bg-yellow p-2 text-green-500 text-base">
            {signUp ? "Register" : "Login"}
          </button>
          <p onClick={handleClick} className="text-cyan-500 cursor-pointer">
            {signUp
              ? "Already Registered ? Login Now"
              : "New here ?,Register Now"}
          </p>
        </div>
      </div>
      {/* Right Container */}
      <div className="w-[50%]">
        <div className="bg-cyan-600 rounded-lg w-[306px]  flex items-center">
          <img
            src={require(`./images/aroundwithin-speed.gif`)}
            alt=""
            className="w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Register__Login;
