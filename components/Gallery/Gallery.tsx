import React from "react";

interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  gridArea?: string;
  spanRows?: number;
  spanCols?: number;
}

const projectImages: ProjectImage[] = [
  {
    id: "1",
    src: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    alt: "Saplings in nursery",
    gridArea: "2 / 1 / 4 / 2",
  },
  {
    id: "2",
    src: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Autumn forest path",
    gridArea: "1 / 2 / 3 / 3",
  },
  {
    id: "3",
    src: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "People planting trees",
    gridArea: "1 / 3 / 2 / 4",
  },
  {
    id: "4",
    src: "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Planting hole",
    gridArea: "1 / 4 / 2 / 5",
  },
  {
    id: "5",
    src: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Hands in soil",
    gridArea: "4 / 1 / 5 / 2",
  },
  {
    id: "6",
    src: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Stacked saplings",
    gridArea: "3 / 2 / 4 / 3",
  },
  {
    id: "7",
    src: "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Planting process",
    gridArea: "2 / 3 / 3 / 4",
  },
  {
    id: "8",
    src: "https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Hands holding plant",
    gridArea: "2 / 4 / 3 / 5",
  },
  {
    id: "9",
    src: "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Forest landscape",
    gridArea: "4 / 2 / 5 / 3",
  },
  {
    id: "10",
    src: "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Mountain trees",
    gridArea: "3 / 4 / 5 / 5",
  },
  {
    id: "11",
    src: "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Green forest path",
    gridArea: "2 / 5 / 4 / 6",
  },
  {
    id: "12",
    src: "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Forest sunset",
    gridArea: "4 / 5 / 5 / 6",
  },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white py-[172px]">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-gray-600 mt-2">- Our Gallery -</p>
          <h2 className="text-3xl font-bold">
            OUR <span className="text-yellow">PROJECTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-5 auto-rows-[200px] gap-4 max-w-6xl mx-auto">
          {projectImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 group ${
                image.gridArea?.startsWith("1 / 3") ? "mt-8" : ""
              } ${
                image.gridArea?.startsWith("1 / 1") ||
                image.gridArea?.startsWith("1 / 5")
                  ? "mt-12"
                  : ""
              }`}
              style={{
                gridArea: image.gridArea,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold px-4 text-center">
                    {image.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
