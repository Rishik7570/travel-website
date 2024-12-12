import React from "react";
import { Facebook } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/landing_bg.png"
          alt="Forest background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Left Side */}
        <div className="absolute left-0 top-0 bottom-0 bg-white w-[134px] flex flex-col justify-center items-center text-black">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="hover:text-yellow-500 transition-colors p-2 rounded-md border border-black"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="hover:text-yellow-500 transition-colors p-2 rounded-md border border-black"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.863 3.116H20.8L14.323 10.167L22 20.884H16.462L11.707 14.306L6.278 20.884H3.34L10.222 13.366L2.862 3.116H8.537L12.859 9.135L17.863 3.116ZM17.106 19.174H18.833L7.835 4.756H6.004L17.106 19.174Z" />
                </svg>
              </a>
            </div>
            <div className="h-12 w-px bg-black"></div>
            <div className="transform -rotate-90 origin-center whitespace-nowrap">
              <span className="text-xs tracking-widest">FOLLOW US</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-52 text-white flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <div className="writing-vertical transform  tracking-[0.2em] text-sm">
              SCROLL
            </div>
            <div className="h-16 w-px bg-white mt-4"></div>
            <div className="relative w-4 h-7 border-2 border-white rounded-full mt-4 flex justify-center">
              <div className="w-0.5 h-1.5 bg-white rounded-full absolute top-1"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-6xl sm:text-7xl font-bold text-white leading-tight">
                CREATING
                <br />
                <span className="bg-yellow text-black px-2">SUSTAINABLE</span>
                <br />
                FUTURE
              </h1>
            </div>
          </div>
        </div>

        {/* Description Text - Bottom Right */}
        <div className="absolute bottom-12 right-12 text-white max-w-xs">
          <div className="h-[0.5] w-20 bg-white mb-4"></div>
          <p className="text-md leading-[1.5]">
            We don't just plant trees. We grow, monitor, measure and report on
            them.
          </p>
        </div>

        {/* Plant Badge */}
        <div className="absolute top-8 right-8">
          <div className="relative w-24 h-24">
            {/* Rotating text */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                id="textCircle"
                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                fill="none"
                className="text-white"
              />
              <text className="text-[13px] tracking-[0.25em] fill-white uppercase">
                <textPath href="#textCircle" startOffset="0">
                  plant · a · tree · now ·
                </textPath>
              </text>
            </svg>

            {/* Center Arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-6 h-6 transform rotate-45"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
