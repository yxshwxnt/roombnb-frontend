import React, { useState } from "react";
import { FaBed, FaBath, FaUtensils, FaWifi } from "react-icons/fa";
import SelectiveButton from "./SelectiveButton";
import {
  Slider,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/react";

const FilterBox = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [bedroomChecked, setBedroomChecked] = useState(false);
  const [bathroomChecked, setBathroomChecked] = useState(false);
  const [mealsChecked, setMealsChecked] = useState(false);
  const [wifiChecked, setWifiChecked] = useState(false);
  const [locality, setLocality] = useState("");
  const [genderPreference, setGenderPreference] = useState("");

  const handleFilterChange = () => {
    const filters = {
      priceRange,
      bedroomChecked,
      bathroomChecked,
      mealsChecked,
      wifiChecked,
      locality,
      genderPreference,
      sortOption,
      setSortOption,
    };
    onFilterChange(filters);
  };

  const localities = ["Locality1", "Locality2", "Locality3"];
  const genders = ["Male", "Female", "Any"];
  const sortOptions = [
    "Price (Low to High)",
    "Ratings (High to Low)",
  ];

  return (
    <div className="bg-gray-100 mt-16 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-6">Filter Apartments</h2>
      <div className="mb-6">
        <Slider
          label="Price Range"
          step={500}
          minValue={0}
          maxValue={25000}
          defaultValue={[3000, 8000]}
          formatOptions={{ style: "currency", currency: "INR" }}
          className="max-w-md"
        />
      </div>
      <div className="mb-6">
        <Autocomplete
          label="Select Locality"
          variant="bordered"
          className="max-w-xs"
        >
          {localities.map((locality, index) => (
            <AutocompleteItem key={index} value={locality}>
              {locality}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        {/* <label className="block text-sm font-medium text-gray-700">
          Locality
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
        >
          <option value="">Select Locality</option>
          {localities.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select> */}
      </div>
      <div className="mb-6">
        <Select
          label="Gender"
          variant="bordered"
          className="max-w-xs"
        >
          {genders.map((gender, index) => (
            <SelectItem key={index} value={gender}>
              {gender}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Amenities
        </label>
        <div className="grid grid-cols-3 items-center gap-2">
          <SelectiveButton
            label="Bedroom"
            icon={<FaBed />}
            selected={bedroomChecked}
            onClick={() => setBedroomChecked(!bedroomChecked)}
          />
          <SelectiveButton
            label="Bathroom"
            icon={<FaBath />}
            selected={bathroomChecked}
            onClick={() => setBathroomChecked(!bathroomChecked)}
          />
          <SelectiveButton
            label="Meals"
            icon={<FaUtensils />}
            selected={mealsChecked}
            onClick={() => setMealsChecked(!mealsChecked)}
          />
          <SelectiveButton
            label="Wifi"
            icon={<FaWifi />}
            selected={wifiChecked}
            onClick={() => setWifiChecked(!wifiChecked)}
          />
          <SelectiveButton
            label="B"
            icon={<FaWifi />}
            selected={wifiChecked}
            onClick={() => setWifiChecked(!wifiChecked)}
          />
          <SelectiveButton
            label="A"
            icon={<FaWifi />}
            selected={wifiChecked}
            onClick={() => setWifiChecked(!wifiChecked)}
          />
        </div>
      </div>
      <div className="mb-6">
        <Select placeholder="Sort By" variant="bordered" className="max-w-xs">
          {sortOptions.map((sortOpt, index) => (
            <SelectItem key={index} value={sortOpt}>
              {sortOpt}
            </SelectItem>
          ))}
        </Select>
      </div>
      <button
        className="w-full bg-primary text-white py-3 rounded-md"
        onClick={handleFilterChange}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBox;
