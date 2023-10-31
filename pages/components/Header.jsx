import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar color={"danger"}>
      <NavbarBrand>
        {/* <img
          src="C:\Users\yashw\Desktop\roombnb\frontend\public\room.png"
          alt="icon"
        /> */}
        <Link className="font-bold text-inherit" href="/Books">
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
          <Link href="/" color="foreground" aria-current="page">
            Landing Page
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/Seller"
            variant="flat"
            className="mr-2"
          >
            Connect as a Seller
          </Button>
          <Button as={Link} color="primary" href="/FindRoomate" variant="flat">
            Find a roomate
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
2;
