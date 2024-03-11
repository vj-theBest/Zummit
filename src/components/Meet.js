import React from "react";

const Meet = () => {
  return (
    <div className="bg-[#001618] text-white flex px-36 py-10 justify-between items-center">
      {/* Left side container */}
      <div className="w-[35%] flex flex-col justify-center gap-5">
        <h1 className="text-2xl font-medium text-yellow ">
          Meet our Therapist
        </h1>
        <p className="font-light">
          Meet our Therapist Tap into the world's largest network of
          credentialled and experienced therapists who can help you with a range
          of issues including depression, anxiety, relationships, trauma, grief,
          and more. With our therapists, you get the same professionalism and
          quality you would expect from an in-office therapist, but with the
          ability to communicate when and how you want.
        </p>
        <button className="bg-cyan-500 text-black rounded-md w-[30%] px-2 py-1">
          Know more
        </button>
      </div>
      {/* Right side container */}
      <div className="w-[60%] text-black text-xl font-semibold">
        <img src={require('./images/Meet-client.png')} alt="" />
       </div>
    </div>
  );
};

export default Meet;
