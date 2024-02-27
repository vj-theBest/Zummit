import React, { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="w-[50%] bg-[#0090b0] text-white rounded-xl m-2 p-3">
      <div className="flex justify-between cursor-pointer" onClick={toggleVisibility}>
      <h3 className="font-bold text-lg">{title}</h3>
      <button >
        {isVisible ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x animate-spin-slow" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>}
      </button>
      </div>
      <div>
      {isVisible && <p className="text-start transition duration-1000 ease-in-out  ">{description}</p>}
      </div>
    </div>
  );
};

const Section2 = ({ title, description, isVisible2, toggleVisibility2 }) => {
  return (
    <div className="w-[50%] bg-[#0090b0] text-white rounded-xl m-2 p-3">
      <div className="flex justify-between cursor-pointer" onClick={toggleVisibility2}>
      <h3 className="font-bold text-lg">{title}</h3>
      <button >
        {isVisible2 ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x animate-spin-slow" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>}
      </button>
      </div>
      <div>
      {isVisible2 && <p className="text-start">{description}</p>}
      </div>
    </div>
  );
};

const FAQs = () => {
                  
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareers: false,
  });

  const [sectionConfig2, setSectionConfig2] = useState({
    showAbout2: false,
    showTeam2: false,
    showCareers2: false,
  });
  const toggleVisibility = (sectionName) => {
    setSectionConfig((prevConfig) => {
      // Check if the section being clicked is already open
      if (prevConfig[sectionName]) {
        // If it's open, close all sections
        return {
          showAbout: false,
          showTeam: false,
          showCareers: false,
        };
      } else {
        // If it's not open, close all sections and then open the clicked one
        return {
          showAbout: sectionName === 'showAbout',
          showTeam: sectionName === 'showTeam',
          showCareers: sectionName === 'showCareers',
        };
      }
    });
  };
  const toggleVisibility2 = (sectionName) => {
    setSectionConfig2((prevConfig) => {
      // Check if the section being clicked is already open
      if (prevConfig[sectionName]) {
        // If it's open, close all sections
        return {
          showAbout2: false,
          showTeam2: false,
          showCareers2: false,
        };
      } else {
        // If it's not open, close all sections and then open the clicked one
        return {
          showAbout2: sectionName === 'showAbout2',
          showTeam2: sectionName === 'showTeam2',
          showCareers2: sectionName === 'showCareers2',
        };
      }
    });
  };


  return (
    <>
     <div className="flex justify-center mt-10 mb-4">
     <div className="border rounded-lg w-[50%] border-[#64c4da] flex items-center gap-4 p-3 ">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#70706f" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        <input  className="border-none focus:outline-none" type="text" placeholder="Search for help" />
      </div>
     </div>
     <div className="ml-[10%] flex flex-col gap-3 text-start">
      <h1 className="text-2xl font-semibold">How can we help</h1>
      <p className="text-base font-semibold">FAQ</p>
      <p className="text-base">Thinking about Therapy or booking an appointment? Here is what you wanna know</p>
     </div>
     <div>
       <h1 className="text-2xl ml-[25%] my-4 text-start font-semibold">Booking an appointmeant</h1>
     <div className="flex flex-col items-center h-[20%]">
      <Section
        title={"What is Therapy and how does it works ?"}
        description={
          "Therapy can be an incredibly powerful tool for self-exploration, growth and collaboration with a trusted professional who is 100% invested in your well-being and committed to meeting your goals. How therapy is structured can vary, for example therapy can be short-term, long-term or as needed. Therapy can be done individually, with a romantic partner(s), as a family, between business partners, or even in a group setting."
        }
        isVisible={sectionConfig.showAbout}
        toggleVisibility={() => toggleVisibility("showAbout")}
      />
      <Section
        title={"How do we book an Assignment ?"}
        description={
          "Therapy can be an incredibly powerful tool for self-exploration, growth and collaboration with a trusted professional who is 100% invested in your well-being and committed to meeting your goals. How therapy is structured can vary, for example therapy can be short-term, long-term or as needed. Therapy can be done individually, with a romantic partner(s), as a family, between business partners, or even in a group setting."
        }
        isVisible={sectionConfig.showTeam}
        toggleVisibility={() => toggleVisibility("showTeam")}
      />
      <Section
        title={"What is Therapy and how does it works ?"}
        description={
          "Therapy can be an incredibly powerful tool for self-exploration, growth and collaboration with a trusted professional who is 100% invested in your well-being and committed to meeting your goals. How therapy is structured can vary, for example therapy can be short-term, long-term or as needed. Therapy can be done individually, with a romantic partner(s), as a family, between business partners, or even in a group setting."
        }
        isVisible={sectionConfig.showCareers}
        toggleVisibility={() => toggleVisibility("showCareers")}
      />
     </div>
     </div>
     <div>
       <h1 className="text-2xl ml-[25%] my-4 text-start font-semibold">Insurance and Fees</h1>
     <div className="flex flex-col items-center h-[20%]">
      <Section2
        title={"What is Therapy and how does it works ?"}
        description={
          "Therapy can be an incredibly powerful tool for self-exploration, growth and collaboration with a trusted professional who is 100% invested in your well-being and committed to meeting your goals. How therapy is structured can vary, for example therapy can be short-term, long-term or as needed. Therapy can be done individually, with a romantic partner(s), as a family, between business partners, or even in a group setting."
        }
        isVisible2={sectionConfig2.showAbout2}
        toggleVisibility2={() => toggleVisibility2("showAbout2")}
      />
      <Section2
        title={"How do we book an Assignment ?"}
        description={
          "Therapy can be an incredibly powerful tool for self-exploration, growth and collaboration with a trusted professional who is 100% invested in your well-being and committed to meeting your goals. How therapy is structured can vary, for example therapy can be short-term, long-term or as needed. Therapy can be done individually, with a romantic partner(s), as a family, between business partners, or even in a group setting."
        }
        isVisible2={sectionConfig2.showTeam2}
        toggleVisibility2={() => toggleVisibility2("showTeam2")}
      />
      <Section2
        title={"What is Therapy and how does it works ?"}
        description={
          "Therapy can be an incredibly powerful tool for self-exploration, growth and collaboration with a trusted professional who is 100% invested in your well-being and committed to meeting your goals. How therapy is structured can vary, for example therapy can be short-term, long-term or as needed. Therapy can be done individually, with a romantic partner(s), as a family, between business partners, or even in a group setting."
        }
        isVisible2={sectionConfig2.showCareers2}
        toggleVisibility2={() => toggleVisibility2("showCareers2")}
      />
     </div>
     </div>
    </>
  );
};

export default FAQs;