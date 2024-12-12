"use client";

import { CornerDownRight } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Image {
  src: string;
  title: string;
  description: string;
  buttonText: string;
}

interface Slide {
  images: Image[];
}

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [visibleImages, setVisibleImages] = useState<number>(4);
  const totalSlides: number = 8;

  const slides = [
    {
      images: [
        {
          src: "/assets/Img1.jpg",
          title: "Post Wildfire",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris non...",
          buttonText: "Learn More",
        },
        {
          src: "/assets/Img2.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img3.png",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img4.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
      ],
    },
    {
      images: [
        {
          src: "/assets/Img1.jpg",
          title: "Post Wildfire",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris non...",
          buttonText: "Learn More",
        },
        {
          src: "/assets/Img2.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img3.png",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img4.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
      ],
    },
    {
      images: [
        {
          src: "/assets/Img1.jpg",
          title: "Post Wildfire",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris non...",
          buttonText: "Learn More",
        },
        {
          src: "/assets/Img2.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img3.png",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img4.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
      ],
    },
    {
      images: [
        {
          src: "/assets/Img1.jpg",
          title: "Post Wildfire",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris non...",
          buttonText: "Learn More",
        },
        {
          src: "/assets/Img2.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img3.png",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img4.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
      ],
    },
    {
      images: [
        {
          src: "/assets/Img1.jpg",
          title: "Post Wildfire",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris non...",
          buttonText: "Learn More",
        },
        {
          src: "/assets/Img2.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img3.png",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img4.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
      ],
    },
    {
      images: [
        {
          src: "/assets/Img1.jpg",
          title: "Post Wildfire",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris non...",
          buttonText: "Learn More",
        },
        {
          src: "/assets/Img2.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img3.png",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img4.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
      ],
    },
    {
      images: [
        {
          src: "/assets/Img1.jpg",
          title: "Post Wildfire",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris non...",
          buttonText: "Learn More",
        },
        {
          src: "/assets/Img2.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img3.png",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img4.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
      ],
    },
    {
      images: [
        {
          src: "/assets/Img1.jpg",
          title: "Post Wildfire",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. mauris non...",
          buttonText: "Learn More",
        },
        {
          src: "/assets/Img2.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img3.png",
          title: "",
          description: "",
          buttonText: "",
        },
        {
          src: "/assets/Img4.jpg",
          title: "",
          description: "",
          buttonText: "",
        },
      ],
    },
  ];

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = (): void => {
      const width: number = window.innerWidth;
      if (width >= 1280) {
        setVisibleImages(4);
      } else if (width >= 1024) {
        setVisibleImages(3);
      } else if (width >= 768) {
        setVisibleImages(2);
      } else {
        setVisibleImages(1);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced automatic sliding with smooth transitions
  useEffect(() => {
    const slideTimer: NodeJS.Timeout = setInterval(() => {
      setCurrentSlide((prev: number) =>
        prev === totalSlides - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(slideTimer);
  }, []);

  // Calculate progress width for progress bar
  const progressWidth: string = `${((currentSlide + 1) / totalSlides) * 100}%`;

  // Get visible subset of images based on screen size
  const getVisibleImages = (images: Image[]): Image[] => {
    return images.slice(0, visibleImages);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slide container */}
      <div className="w-full h-full">
        {/* Current slide */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full transition-transform duration-700 ease-in-out`}>
          {slides[currentSlide]?.images && 
            getVisibleImages(slides[currentSlide].images).map((image: Image, index: number) => (
              <div key={index} className="relative group overflow-hidden">
                {/* Image */}
                <div className="w-full h-full">
                  <img
                    src={image.src}
                    alt={image.title || 'Slide image'}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
                  />
                </div>

                {/* Content overlay with gradient */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 text-white bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">{image.title}</h2>
                  <p className="text-lg md:text-xl lg:text-2xl mb-4 opacity-80">{image.description}</p>
                  {image.buttonText && (
                    <button className="flex items-center text-orange-400 hover:text-orange-300 transition-colors group underline">
                      <CornerDownRight className="mr-2" />
                      {image.buttonText}
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D3D2D2]">
        <div
          className="h-full bg-slidergreen transition-all duration-500 ease-out"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 right-4 text-white font-medium">
        <span className="text-yellow text-2xl md:text-3xl lg:text-[40px]">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="text-yellow">/</span>
        <span>{String(totalSlides).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default ImageSlider;
