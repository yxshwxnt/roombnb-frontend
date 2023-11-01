import React from "react";

const RoomateList = ({ roommates }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Roommate Search Results</h2>
      {roommates.map((roommate) => (
        <div key={roommate.id} className="border p-4 mb-4 rounded">
          <h3 className="text-lg font-semibold mb-2">{roommate.name}</h3>
          <p>Gender: {roommate.gender}</p>
          <p>Age: {roommate.age}</p>
          <p>Work: {roommate.work}</p>
          <p>Rent: {roommate.rent}</p>
          <p>Location: {roommate.location}</p>
        </div>
      ))}
    </div>
  );
};

export default RoomateList;
