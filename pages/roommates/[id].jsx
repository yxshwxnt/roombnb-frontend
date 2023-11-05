import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Header from '../components/Header';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import Slider from 'react-slick';
import {
  FaUser,
  FaBriefcase,
  FaHeart,
  FaMapMarkerAlt,
  FaVenusMars,
  FaInfoCircle,
  FaWifi,
  FaParking,
  FaBed,
} from 'react-icons/fa';

const RoommateProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [roommate, setRoommate] = useState({});

  useEffect(() => {
    const fetchRoommate = async () => {
      try {
        const response = await axios.get(`/api/roommates/${id}`);
        setRoommate(response.data);
      } catch (error) {
        console.error('Error fetching roommate data:', error);
      }
    };
    if (id) {
      fetchRoommate();
    }
  }, [id]);

  if (!roommate.id) {
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
      <div>
        <Header />
        <div className="container mx-auto p-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Slider {...carouselSettings}>
                {roommate.apartmentImages &&
                  roommate.apartmentImages.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`roommate Image ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </Slider>
              <div className="flex items-center my-4">
                  {roommate.profilePicture && (
                    <img
                      src={roommate.profilePicture}
                      alt="Seller"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  )}
  
                  <h1 className="text-4xl font-semibold">
                {roommate.name}'s Profile
              </h1>
                </div>
              
              <div className="flex items-center mb-4">
                <FaUser className="mr-2" />
                {roommate.age} years old
              </div>
              <div className="flex items-center mb-4">
                <FaBriefcase className="mr-2" />
                {roommate.work}
              </div>
              <div className="flex items-center mb-4">
                <FaVenusMars className="mr-2" />
                Gender: {roommate.gender}
              </div>
              <div className="flex items-center mb-4">
                <FaHeart className="mr-2" />
                Interests: {roommate.interests.join(', ')}
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="mr-2" />
                Location: {roommate.location}
              </div>
              <div className="flex items-center mb-4">
                <FaInfoCircle className="mr-2" />
                About Me: {roommate.about}
              </div>
              <div className="flex items-center mb-4">
                <FaWifi className="mr-2" />
                Wi-Fi Available
              </div>
              <div className="flex items-center mb-4">
                <FaParking className="mr-2" />
                Parking Available
              </div>
              <div className="flex items-center mb-4">
                <FaBed className="mr-2" />
                Bed Available
              </div>

              {/* Location Map */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-semibold mb-2">Location</h2>
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

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoommateProfile;
