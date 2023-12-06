import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Header from "../components/Header";
import SellerApartmentCard from "../components/SellerApartmentCard";

const SellerPage = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get("/api/apartments");
        setApartments(response.data);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };

    fetchApartments();
  }, []);

  const handleEditApartment = (id) => {
    // Implement your logic to navigate to the apartment editing page
    // For example, using React Router: history.push(`/edit-apartment/${id}`);
  };

  const handleMarkAsSold = async (id) => {
    try {
      await axios.put(`/api/apartments/${id}`, { status: "sold" });
      setApartments((prevApartments) =>
        prevApartments.map((apt) =>
          apt.id === id ? { ...apt, status: "sold" } : apt
        )
      );
    } catch (error) {
      console.error("Error marking apartment as sold:", error);
    }
  };

  const handleMarkAsAvailable = async (id) => {
    try {
      await axios.put(`/api/apartments/${id}`, { status: "available" });
      setApartments((prevApartments) =>
        prevApartments.map((apt) =>
          apt.id === id ? { ...apt, status: "available" } : apt
        )
      );
    } catch (error) {
      console.error("Error marking apartment as available:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apartments.map((apartment) => (
          <Link href={`/seller/${apartment.id}`} passHref>
            <SellerApartmentCard
              key={apartment.id}
              apartment={apartment}
              onEdit={handleEditApartment}
              onMarkAsSold={handleMarkAsSold}
              onMarkAsAvailable={handleMarkAsAvailable}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SellerPage;
