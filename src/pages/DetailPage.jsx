import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountry } from "../api/services/country";
import Loading from "../component/ui/Loading";
import GeneralSection from "../component/detail/section/GeneralSection";
import InformationSection from "../component/detail/section/InformationSection";
import Button from "../component/ui/Button";
import { ArrowBack } from "../component/ui/Icons";
import AOS from "aos";
import "aos/dist/aos.css";

const DetailPage = () => {
  const [Country, setCountry] = useState();
  const { name } = useParams();
  const country = name;
  const navigate = useNavigate();

  const getDetail = async () => {
    try {
      const response = await getCountry({ search: country });
      setCountry(response[0]);
      console.log(response[0]);
    } catch (error) {
      if (error.response.status === 404) {
        setCountries();
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getDetail();
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="w-full mx-auto flex flex-col justify-center px-4 lg:px-[100px] py-[30px] min-h-screen bg-[url(../src/assets/detail/top.png)] bg-no-repeat bg-top">
      <Button
        onClick={() => navigate("/")}
        variation={"secondary"}
        className="w-fit flex gap-2 mb-2 lg:mb-8"
      >
        <ArrowBack />
        Back
      </Button>
      <div className="min-h-[70vh] flex flex-col items-center justify-center w-full">
        {Country ? (
          <div data-aos="fade-up" className="w-full">
            {/* FIRST SECTION - GENERAL  */}
            <GeneralSection Country={Country} />

            <hr className="border-2 border-blue-secondary my-4" />

            {/* SECOND SECTION - INFORMATION  */}
            <InformationSection Country={Country} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default DetailPage;
