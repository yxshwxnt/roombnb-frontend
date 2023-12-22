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

const FilterBox = ({ apartments, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([3000, 8000]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [locality, setLocality] = useState("");
  const [genderPreference, setGenderPreference] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleFilterChange = () => {
    const filters = {
      priceRange,
      selectedFeatures,
      locality,
      genderPreference,
      sortOption,
    };
    const filteredApartments = applyFilters(apartments, filters);
    console.log("Filtered Apart", filteredApartments);
    onFilterChange(filteredApartments);
  };

  const applyFilters = (apartments, filters) => {
    return apartments.filter((apartment) => {
      const priceInRange =
        apartment.rent >= priceRange[0] && apartment.rent <= priceRange[1];

      const featuresMatch =
        filters.selectedFeatures.length === 0 ||
        filters.selectedFeatures.every((feature) =>
          (apartment.features ?? []).includes(feature)
        );

      const localityMatch =
        !filters.locality ||
        apartment.locality.toLowerCase() === locality.toLowerCase();

      const genderMatch =
        !filters.genderPreference ||
        apartment.gender.toLowerCase() ===
          filters.genderPreference.toLowerCase();

      return priceInRange && featuresMatch && localityMatch && genderMatch;
    });
  };

  const allFeatures = Array.from(
    new Set(apartments.flatMap((apartment) => apartment.features))
  );

  const localities = Array.from(
    new Set(apartments.map((apartment) => apartment.locality))
  );

  const handleChange = (value) => {
    console.log("Selected Locality:", value);
    setLocality(value);
  };

  const genders = ["Male", "Female", "Any"];
  const sortOptions = ["Price (Low to High)", "Ratings (High to Low)"];

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
          onChange={(values) => setPriceRange(values)}
          className="max-w-md"
        />
      </div>
      <div className="mb-6">
        <Autocomplete
          label="Select Locality"
          variant="bordered"
          className="max-w-xs"
          onChange={(value) => setLocality(value)}
        >
          {localities.map((locality, index) => (
            <AutocompleteItem key={index} value={locality}>
              {locality}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
      <div className="mb-6">
        <Select label="Gender" variant="bordered" className="max-w-xs">
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
          {allFeatures.map((feature, index) => (
            <SelectiveButton
              key={index}
              label={feature}
              selected={selectedFeatures.includes(feature)}
              onClick={() =>
                setSelectedFeatures((prev) =>
                  prev.includes(feature)
                    ? prev.filter((item) => item !== feature)
                    : [...prev, feature]
                )
              }
            />
          ))}
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
