import React, { useEffect } from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section data-aos="fade-up" className="px-8 lg:px-[100px] min-h-screen flex items-center justify-center w-full bg-[url(../src/assets/home/Hero-mobile.png)] lg:bg-contain bg-cover lg:bg-[url(../src/assets/home/Hero.png)] bg-no-repeat bg-right-top">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between max-w-[1440px] h-full">
        <div className="w-full lg:w-[calc(50%-50px)] flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-blue-primary text-4xl md:text-6xl font-bold">
              Know More About The World!
            </h1>
            <p className="text-xl text-gray-tertiary">
              Get to know more about Country, Regions, sub-Regions, flags,
              capital city and many more
            </p>
          </div>
          <Button
            variation={"primary"}
            className={"w-fit"}
            onClick={() => navigate("#countries")}
          >
            Get Started
          </Button>
        </div>
        <img
          src="../src/assets/home/Computer.png"
          className="xl:w-auto lg:max-w-none max-w-[calc(100%-60px)] md:max-w-[calc(100%-100px)] lg:w-[400px] lg:mx-0 mx-none"
        />
      </div>
    </section>
  );
};

export default HeroSection;
