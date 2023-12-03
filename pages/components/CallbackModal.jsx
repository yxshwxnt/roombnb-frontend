import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
} from "@nextui-org/react";

export default function CallbackModal({ requestForm, handleInputChange }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Button color="primary" variant="flat" onPress={() => handleOpen()}>
        Request a Callback
      </Button>
      <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter Your Details
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-2">
                  <Input
                    type="text"
                    label="Name"
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your Name"
                  />
                  <Input
                    type="tel"
                    label="Phone"
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Phone Number"
                  />
                  <Input
                    type="text"
                    label="Occupation"
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Occupation"
                  />
                  <Input
                    type="email"
                    label="Email"
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
