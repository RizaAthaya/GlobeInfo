import React, { useEffect, useState } from "react";
import Header from "../../shared/Header";
import Dropdown from "../../shared/Dropdown";
import { regions } from "../../../utils/regionsData";
import { subRegions } from "../../../utils/subRegionsData";
import Input from "../../ui/Input";
import {
  filterByRegion,
  filterBySubregion,
  getAllCountries,
  searchCountries,
} from "../../../api/services/country";
import CountriesMap from "../CountriesMap";
import Loading from "../../ui/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const CountriesSection = () => {
  const [Countries, setCountries] = useState();
  const [Filter, setFilter] = useState({});

  const handleChange = (name, value) => {
    setFilter({
      [name]: value,
    });
  };

  const getAllCountry = async () => {
    try {
      const response = await getAllCountries();
      setCountries(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterByRegion = async () => {
    try {
      const response = await filterByRegion(Filter);
      setCountries(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterBySubregion = async () => {
    try {
      const response = await filterBySubregion(Filter);
      setCountries(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await searchCountries(Filter);
      setCountries(response);
    } catch (error) {
      if (error.response.status === 404) {
        setCountries();
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (Filter.region) handleFilterByRegion();
    if (Filter.subregion) handleFilterBySubregion();
  }, [Filter]);

  useEffect(() => {
    getAllCountry();
    AOS.init({
      offset: 600,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section data-aos="fade-up" className="relative px-4 lg:px-[100px] min-h-screen max-w-[1440px] flex flex-col gap-6  items-center mx-auto w-full py-14">
      <Header title={"Countries"} description={"Get Your Favorite Country!"} />

      {/* INPUT FIELD */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center lg:justify-between w-full">
        <div className="flex gap-2 z-20">
          <Dropdown
            Filter={Filter}
            label={"Region"}
            name={"region"}
            datas={regions}
            handleChange={handleChange}
          />
          <Dropdown
            Filter={Filter}
            label={"Sub Region"}
            name={"subregion"}
            datas={subRegions}
            handleChange={handleChange}
          />
        </div>
        <Input
          value={Filter.search ? Filter.search : ""}
          name={"search"}
          label={"Country"}
          type={"text"}
          handleSearch={handleSearch}
          onChange={handleChange}
        />
      </div>

      {/* DATA MAPPING */}
      <div className="w-full flex justify-center items-center h-full">
        {Countries ? <CountriesMap Countries={Countries} /> : <Loading />}
      </div>
    </section>
  );
};

export default CountriesSection;
