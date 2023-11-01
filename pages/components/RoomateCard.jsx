import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react"; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RoommateCard = ({ roommate }) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <Card isFooterBlurred className="w-full h-[300px] relative">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-black font-medium text-2xl">{roommate.name}</h4>
          <p className="text-tiny text-black/60">{roommate.work}</p>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Roommate profile"
          className="z-0 w-full h-full object-cover"
          src={roommate.profilePicture}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">
              Rent: {roommate.rent} per month
            </p>
            <p className="text-black text-tiny">
              Interests: cricket, football, tenis
            </p>
            <p className="text-black text-tiny">
              Location: {roommate.location}
            </p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Contact
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoommateCard;
