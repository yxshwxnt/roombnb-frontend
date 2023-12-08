import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../components/Header";
import { Button, Skeleton } from "@nextui-org/react";
import Link from "next/link";
// import MapComponent from "../components/MapComponent";
import Slider from "react-slick";
import EasyEdit, { Types } from "react-easy-edit";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBed,
  FaBath,
  FaUtensils,
  FaWifi,
  FaUserFriends,
  FaPhoneAlt,
  FaEdit,
} from "react-icons/fa";

const ApartmentDetails = () => {
  const router = useRouter();
  let apartmentId = router.query.apartmentId;
  console.log(apartmentId);
  const [apartment, setApartment] = useState({});
  useEffect(() => {
    const fetchApartments = async () => {
      const response = await axios.get(`/api/apartments/4`);
      // const res = await axios.get(`/api/apartments/${apartmentId}`);
      setApartment(response.data);
      console.log(response.data);
    };
    fetchApartments();
  }, []);

  const handleUpdate = async (field, newValue) => {
    try {
      const res = await axios.put(`/api/apartments/${apartment.id}`, {
        [field]: newValue,
      });
      alert(`Updated ${field}: ${newValue}`);
    } catch (error) {
      console.error("Error updating field:", error);
    }
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Slider {...carouselSettings}>
              {apartment.images ? (
                apartment.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Apartment Image ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))
              ) : (
                <Skeleton className="h-[400px]" />
              )}
            </Slider>

            <h1 className="text-4xl font-semibold mb-4 mt-8 font-serif italic">
              <EasyEdit
                type={Types.TEXT}
                value={apartment.title}
                onSave={(newValue) => handleUpdate("title", newValue)}
              />
            </h1>

            <div className="text-gray-600 mb-4 text-4xl font-bold flex">
              <p>&#8377;</p>
              <EasyEdit
                type={Types.NUMBER}
                value={apartment.rent}
                onSave={(newValue) => handleUpdate("rent", newValue)}
                attributes={{
                  style: { width: "100px" }, // Adjust the width as needed
                }}
              />
              <p>/month</p>
            </div>

            <p className="text-gray-700 mb-4">
              <EasyEdit
                type={Types.TEXT}
                value={apartment.location}
                onSave={(newValue) => handleUpdate("location", newValue)}
              />
            </p>

            <p className="text-gray-700 mb-8">
              <EasyEdit
                type={Types.TEXT}
                value={apartment.description}
                onSave={(newValue) => handleUpdate("description", newValue)}
              />
            </p>

            {/* Seller Info */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-semibold mb-2">
                Seller Information
              </h2>
              <div className="flex items-center mb-4">
                {apartment.sellerPhoto && (
                  <img
                    src={apartment.sellerPhoto}
                    alt="Seller"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <p className="text-gray-700 mb-1">
                    Name: {apartment.sellerName}
                  </p>
                  <p className="text-gray-700 mb-1">
                    Email: {apartment.sellerEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-semibold mb-2">Location</h2>
              {/* <MapComponent
              latitude={apartment.latitude}
              longitude={apartment.longitude}
            /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14881.123477140529!2d79.09839529999999!3d21.1809986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698786456171!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-semibold mb-2">Features</h2>
              <div className="flex items-center mb-4">
                <FaBed className="mr-2" />
                <p>2 Double Occupancy</p>
              </div>
              <div className="flex items-center mb-4">
                <FaBath className="mr-2" />
                <p>Attached Washroom</p>
              </div>
              <div className="flex items-center mb-4">
                <FaUtensils className="mr-2" />
                <p>Hot and Delicious Meals</p>
              </div>
              <div className="flex items-center mb-4">
                <FaWifi className="mr-2" />
                <p>High-Speed WIFI</p>
              </div>
              <div className="flex items-center mb-4">
                <FaUserFriends className="mr-2" />
                <p>Professional Housekeeping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentDetails;
