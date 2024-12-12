"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock3, MoveRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const blogPosts: BlogPost[][] = [
  [
    {
      id: 1,
      title: "Nulla sagittis porttitor est, id porttitor diam.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere consectetur cursus. Pron du urna, sollicitudin.",
      image: "/assets/blog1.jpg",
      date: "10th Nov, 2023",
    },
    {
      id: 2,
      title: "Nulla sagittis porttitor est, id porttitor diam.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere consectetur cursus. Pron du urna, sollicitudin.",
      image: "/assets/blog2.jpg",
      date: "15th Nov, 2023",
    },
    {
      id: 3,
      title: "Nulla sagittis porttitor est, id porttitor diam.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere consectetur cursus. Pron du urna, sollicitudin.",
      image: "/assets/blog3.jpg",
      date: "19th Nov, 2023",
    },
  ],
  [
    {
      id: 4,
      title: "The Future of Sustainable Agriculture",
      description:
        "Discover innovative farming techniques that are revolutionizing sustainable agriculture and ensuring food security for future generations.",
      image: "/assets/blog4.jpg",
      date: "22nd Nov, 2023",
    },
    {
      id: 5,
      title: "Urban Farming: A Growing Trend",
      description:
        "Explore how city dwellers are transforming rooftops and vacant lots into thriving gardens, creating green spaces in concrete jungles.",
      image: "/assets/blog5.jpg",
      date: "25th Nov, 2023",
    },
    {
      id: 6,
      title: "Organic Farming Best Practices",
      description:
        "Learn about the latest organic farming techniques and how they contribute to soil health and biodiversity while producing nutritious food.",
      image: "/assets/blog6.jpg",
      date: "28th Nov, 2023",
    },
  ],
  [
    {
      id: 7,
      title: "Technology in Modern Farming",
      description:
        "Explore how AI and IoT are transforming traditional farming practices, improving efficiency and crop yields through smart agriculture.",
      image: "/assets/blog7.jpg",
      date: "1st Dec, 2023",
    },
    {
      id: 8,
      title: "Climate-Resilient Agriculture",
      description:
        "Discover strategies farmers are using to adapt to climate change, ensuring sustainable food production in challenging conditions.",
      image: "/assets/blog8.jpg",
      date: "5th Dec, 2023",
    },
    {
      id: 9,
      title: "Farm-to-Table Movement",
      description:
        "Learn about the growing farm-to-table movement and how it's connecting local farmers with consumers for fresher, sustainable food options.",
      image: "/assets/blog9.jpg",
      date: "8th Dec, 2023",
    },
  ],
  [
    {
      id: 10,
      title: "Regenerative Agriculture Practices",
      description:
        "Understanding the principles of regenerative agriculture and how it helps restore soil health while improving crop productivity.",
      image: "/assets/blog10.jpg",
      date: "12th Dec, 2023",
    },
    {
      id: 11,
      title: "Water Conservation in Farming",
      description:
        "Innovative irrigation techniques and water management strategies that help farmers conserve this precious resource.",
      image: "/assets/blog11.jpg",
      date: "15th Dec, 2023",
    },
    {
      id: 12,
      title: "Small-Scale Farming Success",
      description:
        "Stories of successful small-scale farmers who are making a big impact in their communities through sustainable farming practices.",
      image: "/assets/blog12.jpg",
      date: "18th Dec, 2023",
    },
  ],
];

const BlogCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-[172px]">
      <div className="flex flex-col space-y-6">
        {/* Header with navigation */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">- Our Articles</p>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              LATEST <span className="text-yellow">BLOGPOST</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mx-2">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-darkgreen scale-125"
                      : "bg-gray hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-darkgreen text-white hover:bg-green-700"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts[currentSlide].map((post) => (
            <div key={post.id} className="relative">
              {/* Main content with rounded polygon shape */}
              <div
                className={`relative p-4 overflow-hidden mb-16 ${
                  post.id % 3 === 2
                    ? "border-2 border-darkgreen bg-white"
                    : "bg-green-50"
                }`}
                style={{
                  clipPath: `path('M16 0 H calc(100% - 16px) Q calc(100% - 0px) 0 100% 16 V calc(100% - 16px) Q 100% 100% calc(100% - 16px) 100% H calc(40% + 16px) Q 40% 100% 40% calc(100% - 16px) V calc(88% + 8px) Q 40% 88% calc(40% - 16px) 88% H 16 Q 0 88% 0 calc(88% - 8px) V 16 Q 0 0 16 0')`,
                  WebkitClipPath: `path('M16 0 H calc(100% - 16px) Q calc(100% - 0px) 0 100% 16 V calc(100% - 16px) Q 100% 100% calc(100% - 16px) 100% H calc(40% + 16px) Q 40% 100% 40% calc(100% - 16px) V calc(88% + 8px) Q 40% 88% calc(40% - 16px) 88% H 16 Q 0 88% 0 calc(88% - 8px) V 16 Q 0 0 16 0')`
                }}
              >
                <div className="relative mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-medium text-base mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="flex items-center justify-end">
                  <div className="flex items-center gap-1">
                    <Clock3 className="text-yellow" />
                    <span className="text-sm text-yellow">{post.date}</span>
                  </div>
                </div>
              </div>
              
              {/* Learn More button positioned outside */}
              <button
                className={`absolute bottom-0 left-4 flex items-center gap-2 text-sm font-bold p-3 rounded-md border border-yellow ${
                  post.id % 3 === 2 ? "bg-yellow" : "bg-white"
                }`}
              >
                Learn More <MoveRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;