import React, { useState } from "react";
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
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      user: "John",
      text: "Hi, I'm interested in the apartment.",
      matched: false,
    },
    { user: "Alice", text: "What are the nearby facilities?", matched: false },
    { user: "Bob", text: "Is the rent negotiable?", matched: false },
  ]);

  const handleOpen = () => {
    onOpen();
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      // Add the new message to the messages state
      setMessages([
        ...messages,
        { user: "You", text: message, matched: false },
      ]);
      // Clear the message input
      setMessage("");
    }
  };

  const handleMatchClick = (index) => {
    // Toggle the matched status for the selected message
    const updatedMessages = [...messages];
    updatedMessages[index].matched = !updatedMessages[index].matched;
    setMessages(updatedMessages);
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
                Connect with people looking for the same apartment
              </ModalHeader>
              <ModalBody>
                <Textarea
                  label="Message"
                  placeholder="Write a Message"
                  className="max-w-lg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div>
                  <h2 className="text-lg font-semibold mb-2">Messages</h2>
                  {messages.length === 0 ? (
                    <p>No messages yet.</p>
                  ) : (
                    <ul className="flex flex-col gap-2">
                      {messages.map((msg, index) => (
                        <li key={index} className="flex justify-between">
                          <div>
                            <span className="font-semibold">{msg.user}:</span>{" "}
                            {msg.text}{" "}
                            {msg.matched && (
                              <span className="text-green-500">Matched!</span>
                            )}
                          </div>
                          <Button
                            size="small"
                            onClick={() => handleMatchClick(index)}
                          >
                            {msg.matched ? "Unmatch" : "Match"}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => handleSendMessage()}>
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
