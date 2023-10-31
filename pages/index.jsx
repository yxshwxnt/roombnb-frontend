import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import ApartmentCard from "./components/ApartmentCard";
import Header from "./components/Header";

export default function Home() {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    const fetchApartments = async () => {
      const response = await axios.get("/api/apartments");
      setApartments(response.data);
      console.log(apartments);
    };
    fetchApartments();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-semibold mb-8 text-center">
          Find Your Dream Apartment
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apartments.map((apartment, index) => (
            <Link href={`/apartment/${apartment.id}`} key={index}>
              <ApartmentCard apartment={apartment} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
