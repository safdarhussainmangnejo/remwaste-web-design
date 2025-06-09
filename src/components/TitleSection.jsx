import React from "react";

export default function TitleSection({ darkMode }) {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-2 font-serif text-yellow-500 relative">
        Choose Your Skip Size
        <span
          className={`block h-1 w-40 mx-auto mt-2 rounded ${
            darkMode ? "bg-white" : "bg-black"
          }`}
        ></span>
      </h1>
      <h2
        className={`text-center text-sm mb-8 font-light ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Select the skip size that best suits your needs
      </h2>
    </>
  );
}
