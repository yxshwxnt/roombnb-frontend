// pages/roommates/[roomId].js
import React from "react";
import { useRouter } from "next/router";

const RoommateProfile = () => {
  const router = useRouter();
  const { roomId } = router.query;

  // Fetch roommate data based on roomId from your API or data source
  // const roommate = fetchRoommateData(roomId); // Implement this function to fetch data

  // Return JSX to display roommate profile details
  return (
    <div>
      {/* Render roommate details here */}
      {/* Example: */}
      {/* <h1>{roommate.name}'s Profile</h1> */}
      {/* Display other roommate details such as age, work, rent, location, etc. */}
    </div>
  );
};

export default RoommateProfile;
