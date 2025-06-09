import React from "react";
import { ShoppingCart, Star, AlertTriangle } from "lucide-react";

export default function SkipCard({ skip, isSelected, darkMode, onSelect }) {
  return (
    <div
      onClick={() => onSelect(skip)}
      className={`rounded-2xl ${darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"} 
        p-5 shadow-md border cursor-pointer flex flex-col gap-2 transition-all duration-300 transform 
        hover:scale-105 hover:shadow-xl ${isSelected ? "border-yellow-500 ring-2 ring-yellow-300" : ""}`}
    >
      <div className="relative w-full mb-2 h-40">
        <img
          src={skip.image}
          alt={`${skip.size} Yard Skip`}
          className="rounded-xl object-cover w-full h-full"
        />
        {!skip.allowed_on_road && (
          <div className="absolute bottom-2 left-2 text-xs text-white bg-red-600 px-2 py-1 rounded shadow flex items-center gap-1">
            <AlertTriangle size={14} className="text-white" /> Not Allowed On The Road
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-yellow-500 font-bold text-sm">
          {skip.size} Yard Skip
        </div>
        <div className={`${darkMode ? "text-white" : "text-black"} text-sm`}>
          {skip.hire_period_days} day hire period
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">£{skip.price_before_vat}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(skip);
          }}
          className={`text-sm flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
            isSelected
              ? "bg-yellow-500 text-white hover:bg-yellow-600"
              : "bg-gray-100 text-gray-700 hover:bg-yellow-100 dark:bg-gray-700 dark:text-white"
          }`}
        >
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>

      <div className="flex items-center text-yellow-500 text-sm gap-1">
        {Array(5).fill(0).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
        <span className={`${darkMode ? "text-white" : "text-black"} ml-2`}>(5k reviews)</span>
      </div>
    </div>
  );
}
