import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@nextui-org/react";

const locations = ["Nagpur", "Pune", "Banglore", "Mumbai", "Gurgaon"];

export default function App({ handleFilterChange, city }) {
  const [selectedLocation, setSelectedLocation] = useState(city);

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
    handleFilterChange(value);
  };

  return (
    <Navbar color={"danger"}>
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/seller">
          roombnb
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link
            href="/seller/AddApartment"
            color="foreground"
            aria-current="page"
          >
            List New Apartment
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Autocomplete
            label="Select City"
            size={"sm"}
            color={"primary"}
            variant="flat"
            radius="lg"
            value={selectedLocation}
            className="max-w-max"
          >
            {locations.map((location, index) => (
              <AutocompleteItem key={index} value={selectedLocation}>
                {location}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
