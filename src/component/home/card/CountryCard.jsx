import React from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ flag, country, capital, region, subregion }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between gap-6 p-6 border border-b-blue-primary border-opacity-50 rounded-3xl w-[350px]">
      <div className="flex gap-3 w-full">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-black text-xl font-bold flex items-center justify-start">
              {country}
            </h3>
            <p className="w-10 h-8 flex items-center justify-center border-blue-secondary border-3 rounded-md">
              {flag}
            </p>
          </div>
          <h3 className="text-blue-primary text-xl font-bold">{capital}</h3>
          <div className="flex justify-between w-full">
            <h3 className="text-xl text-blue-primary">{region}</h3>
            <h4 className="text-lg text-gray-tertiary text-right">{subregion}</h4>
          </div>
        </div>
      </div>
      <Button variation={"secondary"} onClick={()=> navigate(`/${country}`)}>Lihat Detail</Button>
    </div>
  );
};

export default CountryCard;
