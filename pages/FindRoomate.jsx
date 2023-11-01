import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Header from "./components/Header";
import RoomateCard from "./components/RoomateCard";

const roommatesData = [
  {
    id: 1,
    name: "Alice",
    gender: "female",
    age: 25,
    work: "Software Developer",
    rent: "$800",
    location: "Downtown",
    profilePicture:
      "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    apartmentImages: [
      "https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Cabgb1cpvdAx34-rHWmEUZzkgoGavItOGzO_TMz0ClGZJqOju198Bk073Vja1XF4PPA&usqp=CAU",
    ],
  },
  {
    id: 2,
    name: "Bob",
    gender: "male",
    age: 28,
    work: "Graphic Designer",
    rent: "$700",
    location: "Midtown",
    profilePicture:
      "https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    apartmentImages: [
      "https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg",
    ],
  },
  // Add more roommates as needed
];

const FindRoomate = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-4 mx-auto">
        {roommatesData.map((roommate) => (
          <RoomateCard key={roommate.id} roommate={roommate} />
        ))}
      </div>
    </>
  );
};

export default FindRoomate;
