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

export default function App({ handleFilterChange }) {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
    handleFilterChange(value);
  };

  return (
    <Navbar color={"danger"}>
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/">
          roombnb
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/FindRoomate" color="foreground" aria-current="page">
            Find Roomate
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/seller" color="foreground" aria-current="page">
            Connect as a Seller
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
            className="max-w-max"
          >
            {locations.map((location, index) => (
              <AutocompleteItem key={index} value={location}>
                {location}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
