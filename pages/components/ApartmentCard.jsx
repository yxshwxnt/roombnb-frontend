import React from "react"; 
import Image from "next/image";

const ApartmentCard = ({ apartment }) => {
  return (
    <div className="shadow-lg rounded-md"> 
      <img 
        src={apartment.images[0]}
        alt={apartment.title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{apartment.title}</h2>
        <p className="text-gray-600 mb-2">${apartment.rent} per month</p>
        <p className="text-gray-700 mb-2">{apartment.location}</p>
        <p className="text-gray-700 mb-4">{apartment.description}</p>
      </div>
    </div>
  );
};

export default ApartmentCard;
