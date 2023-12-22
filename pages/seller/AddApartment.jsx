import React, { useState, useEffect } from "react";
import {
  Input,
  Textarea,
  Button,
  Checkbox,
  Select,
  SelectItem,
} from "@nextui-org/react";
import SellerHeader from "../components/SellerHeader";
// import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import axios from "axios";

const statusArr = ["Available", "Unavailable"];

function MyComponent() {
  const map = useMapEvents({
    click: (e) => {
      setSelectedCoordinates({
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
      });
    },
  });

  return null;
}

// const LeafletMap = dynamic(() => import("react-leaflet"), { ssr: false });

const AddApartment = () => {
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  return (
    <>
      <SellerHeader />
      <div className="container justify-center items-center flex flex-col">
        <h1 className="text-3xl font-bold my-8">
          Enter Details to List New Apartments
        </h1>
        <form className="form container w-2/6 flex flex-col gap-2">
          <Input
            type="text"
            label="Apartment Title"
            placeholder="Enter Apartment Title"
          />
          <Input
            type="number"
            label="Price"
            placeholder="0"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">&#8377;</span>
              </div>
            }
          />
          <Input type="text" label="City" placeholder="Enter City" />
          <Input type="text" label="Location" placeholder="Enter Location" />
          <Input type="text" label="Locality" placeholder="Enter Locality" />
          <Textarea
            label="Description"
            placeholder="Enter Description about the apartment"
            className="max-w"
          />
          <Select
            label="Set Availablity"
            placeholder="Select Status"
            className="max-w-xs"
          >
            {statusArr.map((opt, idx) => (
              <SelectItem key={idx} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </Select>
          <MapContainer
            center={[
              selectedCoordinates.latitude,
              selectedCoordinates.longitude,
            ]}
            zoom={13}
            style={{ height: "400px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MyComponent />
            <Marker
              position={[
                selectedCoordinates.latitude,
                selectedCoordinates.longitude,
              ]}
            />
          </MapContainer>
          <Button color="primary">Submit</Button>
        </form>
      </div>
    </>
  );
};

export default AddApartment;
