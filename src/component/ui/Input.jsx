import React, { useState } from "react";

const Input = ({
  type = "text",
  name,
  className,
  label,
  onChange,
  handleSearch,
  value,
  required = false,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="z-10"
    >
      <label
        htmlFor="search"
        className="text-sm font-medium text-gray-900 sr-only"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
        <input
          onChange={(e) => onChange("search", e.target.value)}
          value={value}
          name={name}
          type={type}
          id={name}
          className={`block w-full p-2 ps-3 pr-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${className}`}
          placeholder="Search"
          required={required}
        />
        <button
          type="submit"
          className="text-white absolute end-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Input;
