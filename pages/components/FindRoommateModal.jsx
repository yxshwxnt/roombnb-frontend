import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";

export default function FindRoommateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Button color="success" variant="flat" onPress={() => handleOpen()}>
        Find a Roommate
      </Button>
      <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Connect with people looking for same apartment
              </ModalHeader>
              <ModalBody>
                {/* <Input
                  type="text"
                  label="Name"
                  required
                  placeholder="Enter your Name"
                /> */}
                <Textarea
                  label="Message"
                  placeholder="Write a Message"
                  className="max-w-lg"
                /> 
                <div>
                  
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
