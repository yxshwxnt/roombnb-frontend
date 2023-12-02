import React from "react";

const SelectiveButton = ({ label, icon, selected, onClick }) => {
  return (
    <>
      <button
        className={`flex items-center p-2 rounded-md ${
          selected ? "bg-primary text-white" : "bg-gray-300 text-gray-700"
        }`}
        onClick={onClick}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {label}
      </button>
    </>
  );
};

export default SelectiveButton;
