import React from "react";

const Header = ({ title, description }) => {
  return (
    <header className="bg-[url(../src/assets/header.png)] w-full bg-no-repeat bg-cover rounded-3xl py-8 flex flex-col items-center justify-center">
      <h2 className="text-white font-bold text-4xl">{title}</h2>
      <p className="text-white text-base">{description}</p>
    </header>
  );
};

export default Header;
