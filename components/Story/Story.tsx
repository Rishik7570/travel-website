import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const Story = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left side - Image Gallery */}
        <div className="relative grid grid-cols-12 gap-4 h-[750px]">
          {/* Top elongated forest image */}
          <div className="col-span-8 col-start-1">
            <div className="rounded-[50px] overflow-hidden h-[80px] w-3/4">
              <Image
                src="/assets/cylindrical_img.jpg"
                alt="Forest"
                width={600}
                height={120}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Large image on the left */}
          <div className="col-span-6 col-start-1 mt-6 mr-2">
            <div className="rounded-[30px] overflow-hidden aspect-[2/4]">
              <Image
                src="/assets/story_img_3.jpg"
                alt="Saplings"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column stacked images */}
          <div className="col-span-6 col-start-7 space-y-4">
            {/* Top right image */}
            <div className="rounded-[30px] overflow-hidden aspect-[2/3] mt-[-120px]">
              <Image
                src="/assets/story_img_2.jpg"
                alt="Tree sticks"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right video thumbnail */}
            <div className="relative rounded-[20px] pt-2 overflow-hidden aspect-[5/6]">
              <Image
                src="/assets/story_vid_img.jpg"
                alt="Tree planting video"
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-darkgreen rounded-full p-4 text-white">
                  <Play className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div>
            <p className="text-gray-600">- Our Story</p>
            <h2 className="text-5xl font-bold tracking-tight mt-2">
              BUSINESSES VERIFIED
              <br />
              <span className="text-yellow">TREE-PLANTING</span>
            </h2>
          </div>

          <div className="border-l-4 border-darkgreen pl-6">
            <p className="text-gray-700 italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie volutpat quam, eget euismod purus feugiat ac.
              Fusce elementum mi ac erat accumsan.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie
              volutpat quam, eget euismod purus feugiat ac. Fusce elementum mi
              ac erat accumsan porttitor. Suspendisse vitae metus vel enim suscipit
              sagittis id vel tellus. In pellentesque libero elementum, accumsan
              turpis eget, varius dolor. Suspendisse quis aliquet nisi.
            </p>

            <p className="text-gray-600">
              Pellentesque urna arcu, scelerisque vel leo quis, ornare viverra dui.
              Cras ultrices posuere elit at feugiat. Quisque risus diam, blandit vel
              gravida sit amet, varius ut tellus. Maecenas quis facilisis nisi.
            </p>
          </div>

          <button className="bg-darkgreen text-white px-8 py-3 rounded-lg hover:bg-darkgreen/90 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;