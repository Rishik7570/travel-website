import React from "react";

const Explore = () => {
  return (
    <div className="relative w-full h-96">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/explore_img.jpg')`,
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
          Verified Climate Solutions
          <span className="block mt-1">for Businesses</span>
        </h1>

        <button
          className="bg-white text-darkgreen px-6 py-2 rounded-md font-bold
                     transition duration-300 ease-in-out hover:bg-gray-100 
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          Explore Projects
        </button>
      </div>
    </div>
  );
};

export default Explore;
