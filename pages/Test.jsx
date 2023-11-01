import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react"; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RoommateCard = ({ roommate }) => {
    const { name, work, profilePicture, apartmentImages, rent, location } = roommate;

    return (
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <Card isFooterBlurred className="w-full h-[300px] relative">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h4 className="text-black font-medium text-2xl">{name}</h4>
            <p className="text-tiny text-black/60">{work}</p>
          </CardHeader>
          <Carousel showThumbs={false} autoPlay infiniteLoop interval={3000} stopOnHover={false}>
            <div>
              <img src={profilePicture} alt="Profile" className="w-full h-[200px] object-cover" />
            </div>
            {apartmentImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Apartment ${index + 1}`} className="w-full h-[200px] object-cover" />
              </div>
            ))}
          </Carousel>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Rent: {rent} per month</p>
              <p className="text-black text-tiny">Location: {location}</p>
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
