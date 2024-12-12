"use client";

import React from "react";
import { CornerDownRight, MoveDownRight } from "lucide-react";

interface ReasonProps {
  number: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const Reason: React.FC<ReasonProps> = ({
  number,
  description,
  bgColor,
  textColor,
}) => (
  <div
    className={`${bgColor} p-8 md:p-12 flex flex-col justify-between h-full transition-all duration-300 hover:opacity-90`}
  >
    <div className={`${textColor}`}>
      <div className="text-4xl font-bold mb-8">{number}</div>
      <p className={`text-2xl ${textColor} leading-relaxed mb-16`}>
        {description}
      </p>
      <div className="w-16 h-1 bg-white"></div>
    </div>
    <button className="flex items-center mt-8 group">
      <CornerDownRight className={`mr-2 ${textColor}`} />
      <span className={`mr-2 ${textColor}`}>Learn More</span>
      <MoveDownRight size={40} className={`transition-transform group-hover:translate-x-1 ml-10 ${textColor}`} />
    </button>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const reasons: ReasonProps[] = [
    {
      number: "1.",
      description:
        "Cras ultrices posuere elit at feugiat. Quisque risus diam, blandit vel.",
      bgColor: "bg-darkgreen",
      textColor: "text-white",
    },
    {
      number: "2.",
      description:
        "Cras ultrices posuere elit at feugiat. Quisque risus diam, blandit vel gravida amet, varius ut.",
      bgColor: "bg-[#4D654D]",
      textColor: "text-white",
    },
    {
      number: "3.",
      description:
        "Cras ultrices posuere elit at feugiat. Quisque risus diam, blandit vel.",
      bgColor: "bg-[#E7F6E7]",
      textColor: "text-[#0c483c]",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 mt-[100px]">
      <div className="mb-4 text-sm text-gray-600">- Why Us</div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0">
          <span className="text-black">WHY </span>
          <span className="text-yellow">CHOOSE </span>
          <span className="text-black">US</span>
        </h2>

        <p className="text-gray-600 md:max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie
          volutpat quam, eget euismod purus feugiat ac. Fusce elementum mi ac
          erat accumsan porttitor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {reasons.map((reason, index) => (
          <Reason
            key={-index}
            number={reason.number}
            description={reason.description}
            bgColor={reason.bgColor}
            textColor={reason.textColor}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
