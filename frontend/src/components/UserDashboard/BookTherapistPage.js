import * as React from "react";
import { Link } from 'react-router-dom';
import Side_Navbar from "./Side_Navbar";
function BookTherapistPage() {
    return (<>
    <div className="flex">
        <Side_Navbar />
        <div className="flex-col ">
        {/* search bar element */}
        <div className="flex justify-center ml-[18vw] mt-[4vh]">
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
        <div className="ml-[4vw]" > 
         {/* Therapist name */}
         <div className=" flex text-2xl mb-8font-medium leading-9 max-w-[416px] text-slate-950 mt-[2vh] mb-[2vh] ">
            Therapists/Dr. Sundhari Prakhashan
       </div>
       {/* book page */}
       <div className="flex justify-center items-center px-16 py-5 bg-white rounded max-w-[935px] max-md:px-5 shadow-lg" >
      <div className="flex flex-col px-12 w-full max-w-[707px] max-md:px-5 max-md:max-w-full">
        <div className="self-center text-2xl font-medium leading-9 text-slate-950">
          Session Booking
        </div>
        <div className="self-center mt-6 text-xl font-medium text-slate-950 max-md:max-w-full">
          Select your mode
        </div>
        <div className="flex gap-5 justify-between self-start mt-8 ml-16 text-sm text-center whitespace-nowrap text-slate-950 max-md:ml-2.5">
          <div className="flex flex-col px-8 py-2.5 bg-cyan-600 rounded max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7facd8ac232c745865e6392c4c41530fc8cf2282b02d68f86f55f2343762a4?apiKey=8587097ed3a94b279b125430c3e068a6&"
              className="self-center aspect-[1.19] w-[38px]"
            />
            <button className="mt-2.5">Video</button>
          </div>
          <div className="flex flex-col px-8 py-2.5 rounded border border-solid border-neutral-900 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/18fee7db9bfdcc4b866154e0367f51cf184e1f5bfba67d83da8dcab032864ff8?apiKey=8587097ed3a94b279b125430c3e068a6&"
              className="self-center aspect-[1.19] w-[38px]"
            />
            <button className="mt-2.5">Call</button>
          </div>
        </div>
        <div className="self-center mt-8 text-xl font-medium text-slate-950 max-md:max-w-full">
          Session Duration
        </div>
        <div className="justify-center self-start px-8 py-3 mt-6 ml-16 text-sm font-medium text-yellow-300 bg-cyan-600 rounded max-md:px-5 max-md:ml-2.5">
          1 Hour
        </div>
        <div className="flex gap-5 justify-between self-center mt-6 max-w-full text-sm font-medium w-[490px] max-md:flex-wrap">
          <div className="text-black">1 Session</div>
          <div className="text-cyan-600">
            RS: <span className="text-cyan-600">499</span>/Session
          </div>
        </div>
        <div className="mt-8 text-xl font-medium text-slate-950 max-md:max-w-full">
          Check Available slots
        </div>
        <div className="flex gap-5 justify-between items-center mt-6 w-full max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbe922afa8f28ad6e0e909b4e5ee12c30a33d9c9e3843442c012faf84e2cdf90?apiKey=8587097ed3a94b279b125430c3e068a6&"
            className="shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <div className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-black max-md:mt-6">
                  <div className="self-center text-xl font-medium">MON</div>
                  <div className="flex flex-col px-7 py-2.5 mt-3 rounded border border-solid border-neutral-900 max-md:px-5">
                    <div className="text-xl font-medium">Feb 20</div>
                    <div className="mt-2.5 text-xs">8 Available slots</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-6">
                  <div className="self-center text-xl font-medium text-black">
                    TUE
                  </div>
                  <div className="flex flex-col px-7 py-2.5 mt-3 bg-cyan-600 rounded max-md:px-5">
                    <div className="text-xl font-medium text-yellow-300">
                      Feb 21
                    </div>
                    <div className="mt-2.5 text-xs text-black">
                      3 Available slots
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-neutral-400 max-md:mt-6">
                  <div className="self-center text-xl font-medium">WED</div>
                  <div className="flex flex-col px-7 py-2.5 mt-3 rounded border border-solid border-neutral-400 max-md:px-5">
                    <div className="text-xl font-medium">Feb 22</div>
                    <div className="mt-2.5 text-xs">No Available slots</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f56796728be6404f086fe8f6474bf54542cf5b1095ffb1e699b497945b9a19bd?apiKey=8587097ed3a94b279b125430c3e068a6&"
            className="shrink-0 self-stretch my-auto w-8 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-between self-center mt-8 max-w-full text-base text-black w-[547px] max-md:flex-wrap">
          <div className="flex gap-5 justify-between whitespace-nowrap">
            <div className="flex flex-col justify-center text-cyan-600">
              <div className="justify-center px-1 py-2.5 border-b border-cyan-600 border-solid">
                Morning
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="justify-center px-1 py-2.5 border-b border-black border-solid">
                Noon
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="justify-center px-1 py-2.5 border-b border-black border-solid">
                Evening
              </div>
            </div>
          </div>
          <div className="my-auto">09: 00 AM - 12:00 PM</div>
        </div>
        <button className="justify-center self-start px-4 py-3 mt-6 ml-8 text-sm bg-white rounded border border-solid border-neutral-900 text-neutral-900 max-md:ml-2.5">
          10: 00 AM
        </button>
        <button className="justify-center self-end px-10 py-3 mt-8 text-xl font-medium text-yellow-300 whitespace-nowrap bg-cyan-600 rounded max-md:px-5">
          <Link to="/ShowBookingDetailsPage">Book</Link>
        </button>
      </div>
    </div>
    </div>  
       </div>
    </div>
       
    </>)
}

export default BookTherapistPage