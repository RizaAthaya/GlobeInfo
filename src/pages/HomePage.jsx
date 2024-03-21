import React, { useEffect } from "react";
import HeroSection from "../component/home/section/HeroSection";
import CountriesSection from "../component/home/section/CountriesSection";

const HomePage = () => {

  return (
    <div>
      {/* FIRST SECTION - HERO  */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* SECOND SECTION - COUNTRIES  */}
      <div id="countries">
        <CountriesSection />
      </div>
    </div>
  );
};

export default HomePage;
