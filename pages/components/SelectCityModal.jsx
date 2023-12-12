import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  useDisclosure,
} from "@nextui-org/react";

const locations = ["Nagpur", "Pune", "Banglore", "Mumbai", "Gurgaon"];

export default function SelectCityModal({ selectCity }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Modal size={"md"} isOpen={true} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter Your Details
              </ModalHeader>
              <ModalBody>
                <Autocomplete
                  label="Select City"
                  size={"sm"}
                  color={"primary"}
                  variant="flat"
                  radius="lg"
                  className="max-w-max"
                >
                  {locations.map((location, index) => (
                    <AutocompleteItem
                      key={index}
                      value={location}
                      onClick={(e) => selectCity(location)}
                    >
                      {location}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
