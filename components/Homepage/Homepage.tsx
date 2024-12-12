import React from "react";
import Navbar from "../Navbar/Navbar";
import LandingPage from "../Landingpage/Landingpage";
import LogoBanner from "../LogoBanner/LogoBanner";
import ClimatePage from "../ClimatePage/ClimatePage";
import ImageSlider from "../ImageSlider/ImageSlider";
import Story from "../Story/Story";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import ClimateImpact from "../ClimateImpact/ClimateImpact";
import GalleryPage from "../Gallery/Gallery";
import Explore from "../Explore/Explore";
import BlogCarousel from "../Blog/Blog";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
        <LogoBanner/>
        <ClimatePage/>
        <ImageSlider/>
        <Story/>
        <WhyChooseUs/>
        <ClimateImpact/>
        <GalleryPage/>
       <Explore/>
       <BlogCarousel/>
       <Footer/>
      </main>
    </div>
  );
};

export default Homepage;
