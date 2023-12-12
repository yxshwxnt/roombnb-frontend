import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

const SellerApartmentCard = ({
  apartment,
  onEdit,
  onMarkAsSold,
  onMarkAsAvailable,
}) => {
  const router = useRouter();
  return (
      <Card shadow="sm" isPressable>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={apartment.title}
            className="w-full h-[240px] object-cover"
            src={apartment.images[0]}
          />
        </CardBody>
        <CardFooter className="flex gap-2 m-3 text-small justify-between">
          <div className="flex flex-col gap-2">
            <b>{apartment.title}</b>
            <p className="text-default-500">${apartment.rent}/month</p>
          </div>
          <div className="flex gap-2 justify-between">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={() => onEdit(apartment.id)}
            >
              Edit
            </button>
            <button
              className={`${
                apartment.status === "available" ? "bg-red-500" : "bg-green-500"
              } text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300`}
              onClick={() =>
                apartment.status === "available"
                  ? onMarkAsSold(apartment.id)
                  : onMarkAsAvailable(apartment.id)
              }
            >
              {apartment.status === "available"
                ? "Mark as Sold"
                : "Mark as Available"}
            </button>
          </div>
        </CardFooter>
      </Card>
  );
};

export default SellerApartmentCard;
