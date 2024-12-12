"use client";

import React from "react";
import { CornerDownRight} from "lucide-react";
import Image from "next/image";

const ClimateImpact: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* left side */}
        <div className="bg-[#E7F6E7] w-3/4 p-8 lg:p-12">
          <div className="pl-[150px]">
            <div className="text-sm text-gray-600 mb-4">- Climate</div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-black">WHAT'S THE </span>
              <span className="text-yellow">IMPACT</span>
              <br />
              <span className="text-yellow">ON </span>
              <span className="text-black">CLIMATE</span>
            </h1>

            <p className="text-gray-700 mb-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              molestie volutpat quam, eget euismod purus feugiat ac. Fusce
              elementum mi ac erat accumsan porttitor.
            </p>

            <button className="group flex items-center text-lg text-darkgreen hover:opacity-80 transition-all duration-300">
              <CornerDownRight className="mr-2" />
              <span className="border-b border-darkgreen">Discover More</span>
            </button>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="absolute right-0 top-3/4 -translate-y-1/2  mr-60 z-10">
          <Image
            src="/assets/cli_impact_img.svg"
            alt="Forest landscape with mountains"
            className="w-[100%] h-auto"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ClimateImpact;
