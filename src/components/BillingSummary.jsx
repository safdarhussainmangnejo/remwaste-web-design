import React from "react";
import { XCircle, ArrowRightCircle } from "lucide-react";

export default function BillingSummary({ skip, darkMode, onCancel }) {
  const total = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <div className={`w-full lg:w-96 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} shadow-lg rounded-2xl p-6 border-2 border-yellow-500`}>
      <h2 className={`text-xl font-semibold mb-4 border-b pb-2 ${darkMode ? "text-white" : "text-black"}`}>
        Billing Summary
      </h2>
      <div className={`flex flex-col gap-2 ${darkMode ? "text-white" : "text-black"}`}>
        <div className="flex justify-between">
          <span>Skip Size</span>
          <span className="font-medium">{skip.size} Yard</span>
        </div>
        <div className="flex justify-between">
          <span>Hire Period</span>
          <span className="font-medium">{skip.hire_period_days} Days</span>
        </div>
        <div className="flex justify-between">
          <span>Price (Excl. VAT)</span>
          <span className="font-medium">£{skip.price_before_vat}</span>
        </div>
        <div className="flex justify-between">
          <span>VAT</span>
          <span className="font-medium">{skip.vat}%</span>
        </div>
        <div className="flex justify-between border-t pt-2 font-semibold">
          <span>Total</span>
          <span>£{total}</span>
        </div>
        <div className="flex justify-between gap-4 mt-4">
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 text-sm"
          >
            <XCircle size={16} /> Cancel
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm">
            <ArrowRightCircle size={16} /> Continue
          </button>
        </div>
      </div>
    </div>
  );
}
