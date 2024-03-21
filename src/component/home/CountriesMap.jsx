import React, { useEffect, useState } from "react";
import CountryCard from "./card/CountryCard";
import Pagination from "../shared/Pagination";

const CountriesMap = ({ Countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 9;
  let totalPages = Countries.length / cardPerPage;
  const onChangePage = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [Countries]);

  return (
    <div className="flex flex-col gap-8">
      {Countries.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {Countries.slice(
            cardPerPage * (currentPage - 1),
            cardPerPage * currentPage
          ).map((country, index) => {
            return (
              <CountryCard
                key={index}
                flag={country.flag}
                country={country.name.common}
                capital={country.capital}
                region={country.region}
                subregion={country.subregion}
              />
            );
          })}
        </div>
      ) : (
        <p>Belum ada data</p>
      )}
      
      {Countries && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={onChangePage}
        />
      )}
    </div>
  );
};

export default CountriesMap;
