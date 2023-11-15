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
} from "@nextui-org/react";

const locations = ["City1", "City2", "City3"];

export default function App({ onChangeLocation }) {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
    onChangeLocation(value);
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
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/FindRoomate" color="foreground" aria-current="page">
            Find Roomate
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Select
            label="Select City"
            value={selectedLocation} 
            size="sm"
            onChange={(e) => handleLocationChange(e.target.value)}
          >
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </Select>
          <Button
            as={Link}
            color="primary"
            href="/seller"
            variant="flat"
            className="mr-2"
          >
            Connect as a Seller
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
