import React from "react";
import Link from "next/link";
import { CornerDownRight } from "lucide-react";

const ClimatePage = () => {
  const stats = [
    {
      value: "7000+",
      label: "Hectares Restored",
    },
    {
      value: "500+",
      label: "Species Identified",
    },
    {
      value: "20K+",
      label: "Evidence Uploaded",
    },
  ];

  return (
    <div className="bg-gray py-[72px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-sm text-gray-600">- Our Community</p>
              <h1 className="text-5xl font-bold leading-tight">
                CLIMATE <span className="text-yellow">PROJECTS</span>
                <br />
                YOU CAN TRUST
              </h1>
              <p className="text-gray-600 max-w-lg">
                Veritree helps businesses invest in tree planting with full
                confidence and ground-level transparency.
              </p>
              <Link
                href="/contact"
                className="flex flex-row items-center text-green font-bold hover:text-green-800 font-medium"
              >
                <CornerDownRight className="mr-2"/>
                <div className="text-green font-bold underline text-lg">Contact Us</div>
              </Link>
            </div>
          </div>

          {/* Right column - Statistics */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="pt-8">
                <div className="flex justify-between items-baseline">
                  <dt className="text-4xl font-bold text-darkgreen">
                    {stat.value}
                  </dt>
                  <dd className="text-black">{stat.label}</dd>
                </div>
                <div className="border-b border-grayborder pt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimatePage;
