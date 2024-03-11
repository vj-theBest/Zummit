import React from "react";
import ContactSection from "./ContactSection";

const Therapists = () => {
  const therapists_info = [
    {
      name: "Dr. Sundhari Prakhashan",
      desc1: "I have Experience over 10 years",
      desc2: "Expertise: ",
      desc2_span: "ADHD, Anxiety, Body Image",
      desc3_span: "Starts@ 499",
      desc3: "for one session",
      desc4: " Languages: Hindi, English",
      profile_image: "therapist_card_image.jpeg",
    },
    {
      name: "Dr. Sundhari Prakhashan",
      desc1: "I have Experience over 10 years",
      desc2: "Expertise: ",
      desc2_span: "ADHD, Anxiety, Body Image",
      desc3_span: "Starts@ 499",
      desc3: "for one session",
      desc4: " Languages: Hindi, English",
      profile_image: "therapist_card_image.jpeg",
    },
    {
      name: "Dr. Sundhari Prakhashan",
      desc1: "I have Experience over 10 years",
      desc2: "Expertise: ",
      desc2_span: "ADHD, Anxiety, Body Image",
      desc3_span: "Starts@ 499",
      desc3: "for one session",
      desc4: " Languages: Hindi, English",
      profile_image: "therapist_card_image.jpeg",
    },
    {
      name: "Dr. Sundhari Prakhashan",
      desc1: "I have Experience over 10 years",
      desc2: "Expertise: ",
      desc2_span: "ADHD, Anxiety, Body Image",
      desc3_span: "Starts@ 499",
      desc3: "for one session",
      desc4: " Languages: Hindi, English",
      profile_image: "therapist_card_image.jpeg",
    },
    {
      name: "Dr. Sundhari Prakhashan",
      desc1: "I have Experience over 10 years",
      desc2: "Expertise: ",
      desc2_span: "ADHD, Anxiety, Body Image",
      desc3_span: "Starts@ 499",
      desc3: "for one session",
      desc4: " Languages: Hindi, English",
      profile_image: "therapist_card_image.jpeg",
    },
    {
      name: "Dr. Sundhari Prakhashan",
      desc1: "I have Experience over 10 years",
      desc2: "Expertise: ",
      desc2_span: "ADHD, Anxiety, Body Image",
      desc3_span: "Starts@ 499",
      desc3: "for one session",
      desc4: " Languages: Hindi, English",
      profile_image: "therapist_card_image.jpeg",
    },
    
  ];
  return (
    <React.Fragment>
      <div className="m-0 p-0">
        <div className="px-[194px] m-0 pb-[68px]">
          <div className="h-[164px] m-0 pt-[33px]">
            <div className="p-0 m-0 flex justify-center">
              <div class="relative  h-[57px]">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-[743px] p-4 ps-10 text-sm rounded-lg bg-[#EFF7FF] border border-[#B4F0FF] outline-none"
                  placeholder="Search "
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0  gap-x-[27px] gap-y-[32px]">
            {therapists_info.map((item, index) => {
              return  <div className=" h-[288px] border border-[#B4F0FF] rounded-md" key={item.name+index}>
              <div className="h-[209px]  m-0 p-[24px] pb-[19px] bg-[#0190B1] rounded-t-md">
                <div className="m-0 p-0 h-full flex gap-[12px]">
                  <div className="m-0 p-0 h-full sm:w-[129px] w-[0px] ">
                    <img
                      src={require(`./images/${item.profile_image}`)}
                      alt={item.name}
                      className="object-contain w-full rounded-md"
                    />
                  </div>
                  <div className="m-0 p-0 ">
                    <p className="therapist-page__name xl:text-[28px] lg:text-[18px] sm:text-[24px]">
                      {item.name}
                    </p>
                    <p className="therapist-page__desc lg:text-[12px] xl:text-[14px] mt-[8px] ">
                      {item.desc1}
                    </p>
                    <p className="therapist-page__desc lg:text-[12px] xl:text-[14px] mt-0 xl:mt-[8px] lg:mt-[5px] sm:mt-[8px]">
                      {item.desc2} <span>{item.desc2_span}</span>
                    </p>
                    <p className="therapist-page__desc lg:text-[12px] xl:text-[14px] mt-0 xl:mt-[8px] lg:mt-[5px] sm:mt-[8px]">
                      {" "}
                      <span>{item.desc3_span}</span> {item.desc3}
                    </p>
                    <p className="therapist-page__desc lg:text-[12px] xl:text-[14px] mt-0 xl:mt-[8px] lg:mt-[5px] sm:mt-[8px]">
                      {item.desc4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="m-0 p-0 h-[77px]  rounded-b-md bg-[#EFF7FF] grid xl:grid-cols-[0.6fr_0.6fr_1fr_0.8fr] 2xl:grid-cols-[0.8fr_0.8fr_1fr_0.8fr] sm:grid-cols-[1fr_1fr]">
                <div id="dummy"></div>
                <div id="dummy"></div>
                <div className="xl:mt-4 sm:mt-2 sm:ms-4">
                  <button class="bg-transparent  text-[#0190B1] font-semibold py-2 px-4 border border-[#0190B1] rounded">
                    View Profile
                  </button>
                </div>
                <div className="xl:mt-4 sm:mt-2 sm:ms-4">
                  <button class="bg-[#0190B1] text-white font-semibold py-2 px-4 rounded">
                    Book
                  </button>
                </div>
              </div>
            </div>;
            })}

           
          </div>
        </div>
      </div>
      <ContactSection />
    </React.Fragment>
  );
};

export default Therapists;
