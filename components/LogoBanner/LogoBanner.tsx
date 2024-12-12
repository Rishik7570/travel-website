import React from "react";

const LogoBanner = () => {
  return (
    <div className="flex w-full">
      {/* Left white rectangle */}
      <div className="w-[140px] bg-gray h-24"></div>

      {/* Right orange section with logos */}
      <div className="w-full bg-yellow h-24 flex items-center justify-around px-8">
        <div className="h-8 flex items-center">
          <img
            src="/assets/logo1.png"
            alt="Forbes"
            className="h-full object-contain"
          />
        </div>
        <div className="h-6 flex items-center">
          <img
            src="/assets/logo2.png"
            alt="Off100"
            className="h-full object-contain"
          />
        </div>
        <div className="h-6 flex items-center">
          <img
            src="/assets/logo3.png"
            alt="Fast Company"
            className="h-full object-contain"
          />
        </div>
        <div className="h-8 flex items-center">
          <img
            src="/assets/logo4.png"
            alt="Deloitte"
            className="h-full object-contain"
          />
        </div>
        <div className="h-8 flex items-center">
          <img
            src="/assets/logo5.png"
            alt="IT.org"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
