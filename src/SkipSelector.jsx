import React, { useState, useEffect } from "react";
import TitleSection from "./components/TitleSection";
import SkipCard from "./components/SkipCard";
import BillingSummary from "./components/BillingSummary";
import ThemeToggle from "./components/ThemeToggle";
import { data } from "./data/skipData";

export default function SkipSelector() {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <ThemeToggle
        darkMode={darkMode}
        onToggle={() => setDarkMode(!darkMode)}
      />
      <div className="flex-1 max-w-7xl mx-auto">
        <TitleSection darkMode={darkMode} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              darkMode={darkMode}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={setSelectedSkip}
            />
          ))}
        </div>
      </div>
      {selectedSkip && (
        <BillingSummary
          skip={selectedSkip}
          darkMode={darkMode}
          onCancel={() => setSelectedSkip(null)}
        />
      )}
    </div>
  );
}
