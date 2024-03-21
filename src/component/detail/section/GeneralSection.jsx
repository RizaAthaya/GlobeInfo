import React from "react";

const GeneralSection = ({Country}) => {
  return (
    <section className="w-full flex lg:flex-row flex-col justify-between items-center">
      <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-4 py-4">
        <h3 className="bg-blue-secondary text-blue-primary px-3 lg:py-1 text-base rounded-3xl w-fit">
          {Country?.capital}
        </h3>
        <h1 className="font-bold text-3xl lg:text-5xl">{Country?.name?.common}</h1>
        <div className="w-full flex lg:flex-row flex-col justify-center lg:justify-start gap-1 lg:gap-4 items-center py-0">
          {Country?.altSpellings.slice(0, 3).map((spell, index) => {
            return (
              <h5 key={index} className="text-gray-tertiary text-sm lg:text-lg">
                {spell}
              </h5>
            );
          })}
        </div>
      </div>
      <img src={Country?.flags.png} className="max-h-[250px]"/>
    </section>
  );
};

export default GeneralSection;
