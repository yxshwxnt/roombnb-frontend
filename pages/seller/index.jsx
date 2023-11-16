import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import EditApartment from "../components/EditApartment";
// import ApartmentCard from "../components/ApartmentCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {
  const router = useRouter();
  const { apartmentId } = router.query;

  const [isEditing, setIsEditing] = useState(false);
  const [apartment, setApartment] = useState({
    title: "Cozy Studio near Park",
    rent: 1200,
    location: "Parkside, Suburb",
    description:
      "Charming studio apartment with a lovely park view. Quiet and peaceful neighborhood.",
    images: [
      "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fHww",
    ],
  });

  //   // Simulated logic to fetch apartment data based on apartmentId
  //   useEffect(() => {
  //     // Simulated API call to fetch apartment data
  //     const fetchApartmentData = async () => {
  //       try {
  //         // Replace the following line with your actual API endpoint
  //         const response = await fetch(`https://api.example.com/apartments/${apartmentId}`);
  //         const data = await response.json();
  //         setApartment(data);
  //       } catch (error) {
  //         console.error("Error fetching apartment data:", error);
  //       }
  //     };

  //     fetchApartmentData();
  //   }, [apartmentId]);

  const handleEditSubmit = async (formData) => {
    try {
      await fetch(`https://api.example.com/apartments/${apartmentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setApartment(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating apartment data:", error);
    }
  };

  if (!apartment.title) {
    return <div>Loading...</div>;
  }

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
          {isEditing ? (
            <div>
              <h1 className="text-4xl font-semibold mb-8 text-center">
                Edit Apartment
              </h1>
              <EditApartment
                apartment={apartment}
                onSubmit={handleEditSubmit}
              />
            </div>
          ) : (
            <div>
              <div className="flex justify-end mb-4">
                <button
                  className="btn-primary"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Apartment
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Carousel for apartment images */}
                <Slider {...carouselSettings}>
                  {apartment.images &&
                    apartment.images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt={`Apartment Image ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                </Slider>
                <h1 className="text-4xl font-semibold mb-4 mt-8">
                  {apartment.title}
                </h1>
                <p className="text-gray-600 mb-4">
                  ${apartment.rent} per night
                </p>
                <p className="text-gray-700 mb-4">{apartment.location}</p>
                <p className="text-gray-700 mb-8">{apartment.description}</p>
                {/* Display other apartment details */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default index;
