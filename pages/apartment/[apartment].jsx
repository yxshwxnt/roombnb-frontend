import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../components/Header";
import FindRoommateModal from "../components/FindRoommateModal";
import { Button, Skeleton } from "@nextui-org/react";
import Link from "next/link";
// import MapComponent from "../components/MapComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBed,
  FaBath,
  FaUtensils,
  FaWifi,
  FaUserFriends,
  FaPhoneAlt,
} from "react-icons/fa";
import CallbackModal from "../components/CallbackModal";

const ApartmentDetails = () => {
  const router = useRouter();
  const apartmentId = router.query.apartment;
  const [apartment, setApartment] = useState({});
  const [requestForm, setRequestForm] = useState({
    name: "",
    phoneNum: "",
    occupation: "",
    email: "",
  });

  const handleRequestFormChange = (e) => {
    const { name, value } = e.target;
    setRequestForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchApartments = async () => {
      const response = await axios.get(`/api/apartments/${apartmentId}`);
      setApartment(response.data);
      console.log(apartment);
    };
    fetchApartments();
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
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
                {apartment.title ? (
                  apartment.title
                ) : (
                  <Skeleton className="h-[30px] w-[400px]" />
                )}
              </h1>
              <p className="text-gray-600 mb-4 text-4xl font-bold">
                {apartment.rent ? (
                  8377`${apartment.rent}/month`
                ) : (
                  <Skeleton className="h-[20px] w-[100px]" />
                )}
              </p>
              <p className="text-gray-700 mb-4">
                {apartment.location ? (
                  apartment.location
                ) : (
                  <Skeleton className="h-[20px] w-[200px]" />
                )}
              </p>
              <p className="text-gray-700 mb-8">
                {apartment.description ? (
                  apartment.description
                ) : (
                  <Skeleton className="h-[100px]" />
                )}
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

              {/* Contact Seller and Find Roommates */}
              <div className="flex justify-between mt-8">
                <CallbackModal
                  requestForm={requestForm}
                  handleInputChange={handleRequestFormChange}
                />
                <FindRoommateModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentDetails;
