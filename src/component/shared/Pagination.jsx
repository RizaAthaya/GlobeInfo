import React from "react";
import { ArrowLeft, ArrowRight } from "../ui/Icons";

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  let pages = [];

  const getPrevPage = () => Number(currentPage) - 1;
  const getNextPage = () => Number(currentPage) + 1;

  if (currentPage > 1) {
    pages.push(
      <React.Fragment key={"PrevPart"}>
        <li
          key={1}
          onClick={() => onChangePage(getPrevPage())}
          className="rounded-s-lg flex items-center justify-center px-4 h-10 leading-tight text-blue-primary bg-white border border-blue-primary hover:bg-blue-primary hover:text-white"
        >
          <ArrowLeft />
        </li>
        <li
          key={2}
          onClick={() => onChangePage(getPrevPage())}
          className={`${
            currentPage > 2 ? "block" : "hidden"
          } flex items-center justify-center px-4 h-10 leading-tight text-blue-primary bg-white border border-blue-primary hover:bg-blue-primary hover:text-white`}
        >
          ...
        </li>
        <li
          onClick={() => onChangePage(getPrevPage())}
          key={3}
          className="flex items-center justify-center px-4 h-10 leading-tight text-blue-primary bg-white border border-blue-primary hover:bg-blue-primary hover:text-white"
        >
          {getPrevPage()}
        </li>
      </React.Fragment>
    );
  }

  if (totalPages === 1) {
    pages.push(
      <li
        key={4}
        className="flex items-center justify-center px-4 h-10 text-blue-primary border border-blue-primary bg-gray-200 hover:bg-amber-100 hover:text-amber-700"
      >
        1
      </li>
    );
  } else if (totalPages !== 0) {
    pages.push(
      <li
        key={5}
        className="flex items-center justify-center px-4 h-10 border border-blue-primary bg-blue-primary text-white"
      >
        {currentPage}
      </li>
    );
  }

  if (currentPage < totalPages) {
    pages.push(
      <React.Fragment key={"NextPart"}>
        <li
          onClick={() => onChangePage(getNextPage())}
          key={6}
          className="flex items-center justify-center px-4 h-10 leading-tight text-blue-primary bg-white border border-blue-primary hover:bg-blue-primary hover:text-white"
        >
          {getNextPage()}
        </li>
        <li
          key={7}
          onClick={() => onChangePage(getNextPage())}
          className={`${
            currentPage < totalPages - 1 ? "block" : "hidden"
          } flex items-center justify-center px-4 h-10 leading-tight text-blue-primary bg-white border border-blue-primary hover:bg-blue-primary hover:text-white`}
        >
          ...
        </li>
        <li
          key={8}
          onClick={() => onChangePage(getNextPage())}
          className="flex items-center justify-center px-4 h-10 leading-tight text-blue-primary  bg-white border border-blue-primary rounded-e-lg hover:bg-blue-primary hover:text-white"
        >
          <ArrowRight />
        </li>
      </React.Fragment>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div aria-label="Page navigation w-fit">
        <ul className="inline-flex -space-x-px text-base h-10">{pages}</ul>
      </div>
    </div>
  );
};

export default Pagination;
