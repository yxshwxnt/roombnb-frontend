import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ApartmentCard from "./components/ApartmentCard";
import Header from "./components/Header";
import FilterBox from "./components/FilterBox";
import SelectCityModal from "./components/SelectCityModal";

export default function Home() {
  const [city, setCity] = useState("");
  const [apartments, setApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState(apartments);
  useEffect(() => {
    const fetchApartments = async () => {
      const response = await axios.get("/api/apartments");
      setApartments(response.data);
      setFilteredApartments(response.data);
    };
    fetchApartments();
  }, []);

  const handleFilterChange = (filters) => {
    setFilteredApartments(filters);
  };

  // if (city === "") {
  //   return <SelectCityModal selectCity={setCity} />;
  // }

  return (
    <>
      <Header filter={handleFilterChange} city={city} />
      <div className="container m-3 flex h-screen">
        <FilterBox
          apartments={apartments}
          onFilterChange={handleFilterChange}
        />
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
