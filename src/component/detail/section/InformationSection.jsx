import React from "react";
import Button from "../../ui/Button";
import { MapIcon, MapPinIcon } from "../../ui/Icons";

const InformationSection = ({ Country }) => {
  return (
    <section className="flex lg:flex-row flex-col justify-between gap-4">
      <div className="px-6 py-4 border-2 rounded-xl w-full">
        <h2 className="font-semibold text-xl">Detail Information</h2>
        <hr className="my-2" />
        <div className="flex flex-col gap-2 text-base lg:text-lg">
          <p>Continent : {Country?.continents}</p>
          <p>Region : {Country?.region}</p>
          <p>Sub Region : {Country?.subregion}</p>
          <p>Status : {Country?.status}</p>
          <p>Language : </p>
          <ul className="flex flex-col gap-2">
            {Country &&
              Object.entries(Country?.languages).map(([code, name]) => (
                <li key={code} className="pl-3 list-disc list-inside">
                  {name}
                </li>
              ))}
          </ul>
          <p>Currencies : </p>
          <ul className="flex flex-col gap-2">
            {Country &&
              Object.entries(Country?.currencies).map(([code, name]) => (
                <li key={code} className="pl-3 list-disc list-inside">
                  {name.symbol} - {name.name}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="px-4 py-4 h-fit gap-4 border-2 flex flex-col justify-between border-blue-primary rounded-xl w-full lg:w-[350px]">
          <h2 className="font-semibold text-center text-blue-primary text-xl lg:text-2xl">
            Find More!
          </h2>
          <div className="flex flex-col gap-2">
            <Button
              variation={"primary"}
              className={"flex gap-2 justify-center w-full"}
              onClick={() =>
                (window.location.href = `${Country?.maps.googleMaps}`)
              }
            >
              Google Maps <MapPinIcon />
            </Button>
            <Button
              variation={"primary"}
              className={"flex gap-2 justify-center w-full"}
              onClick={() =>
                (window.location.href = `${Country?.maps.openStreetMaps}`)
              }
            >
              Street Maps <MapIcon />
            </Button>
          </div>
        </div>
        <div className="px-4 py-4 h-fit gap-4 border-2 flex flex-col justify-between border-blue-primary rounded-xl w-full lg:w-[350px]">
          <h2 className="font-semibold text-center text-xl">Coat of Arms</h2>
          <img
            src={Country?.coatOfArms.png}
            className="h-[150px] w-fit mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
