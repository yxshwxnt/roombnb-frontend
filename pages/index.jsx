import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ApartmentCard from "./components/ApartmentCard";
import Header from "./components/Header";
import FilterBox from "./components/FilterBox";

export default function Home() {
  const [apartments, setApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState(apartments);
  useEffect(() => {
    const fetchApartments = async () => {
      const response = await axios.get("/api/apartments");
      setApartments(response.data);
      setFilteredApartments(response.data);
      console.log(apartments);
    };
    fetchApartments();
  }, []);

  const handleFilterChange = (filters) => {
    // Implement filtering logic based on the provided filters
    // Update the filteredApartments state accordingly
    console.log(filters);
  };

  return (
    <>
      <Header />
      <div className="container m-3 flex h-screen">
        <FilterBox onFilterChange={handleFilterChange} />
        <div className="ml-3 flex-1">
          <h1 className="text-4xl font-semibold mb-8 text-center font-serif">
            Find Your Dream Apartment
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredApartments.map((apartment, index) => (
              <Link href={`/apartment/${apartment.id}`} key={index}>
                <ApartmentCard apartment={apartment} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
