import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    gender: "Male",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "Inactive",
    gender: "Female",
  },
];

const TableComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedData(null);
  };

  const handleUpdate = () => {
    // Handle update logic here
    console.log("Updating data:", selectedData);
    closeModal();
  };

  return (
    <>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Status</Th>
            <Th>Gender</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.email}</Td>
              <Td>{item.status}</Td>
              <Td>{item.gender}</Td>
              <Td>
                <IconButton
                  icon={<EditIcon />}
                  aria-label="Edit"
                  onClick={() => openModal(item)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={closeModal} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={selectedData?.name}
                onChange={(e) =>
                  setSelectedData({ ...selectedData, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                value={selectedData?.email}
                onChange={(e) =>
                  setSelectedData({ ...selectedData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Status</FormLabel>
              <Input
                value={selectedData?.status}
                onChange={(e) =>
                  setSelectedData({ ...selectedData, status: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input
                value={selectedData?.gender}
                onChange={(e) =>
                  setSelectedData({ ...selectedData, gender: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Update
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TableComponent;
