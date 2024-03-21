import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "../ui/Icons";

const Dropdown = ({ Filter, name, label, datas, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (e, value) => {
    e.preventDefault();
    setIsOpen(false);
    handleChange(name, value);
  };

  return (
    <div className="relative w-[190px] border border-gray-300 rounded-lg p-2 bg-gray-50">
      <div
        className="flex justify-between w-full cursor-pointer items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {Filter[name] ? Filter[name] : label}

        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      {isOpen && (
        <div className="absolute border border-gray-300 bg-gray-50 w-full left-0 top-12 px-2 py-2 rounded-lg max-h-[150px] overflow-auto">
          <ul className="flex flex-col gap-1.5 cursor-pointer">
            {datas.map((data, index) => {
              return (
                <li key={index} onClick={(e) => handleItemClick(e, data)}>
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
