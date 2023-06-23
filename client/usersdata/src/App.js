import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TableComponent from "./components/TableComponent";
import DownloadButton from "./components/DownloadButton";
import { Heading, Box } from '@chakra-ui/react'
function App() {
  const [users, setUsers] = useState([]);
  const getUsersFromAPI = async () => {
    try {
      const res = await axios.get("http://localhost:8080/get/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateUser = async (id, data) => {
    await axios.patch(`http://localhost:8080/update/users/${id}`, data);
    getUsersFromAPI()

  };
  useEffect(() => {
    getUsersFromAPI();
  }, []);

  return (
    <div className="App">
      <Heading position={'fixed'} heigth={'50px'}
        top={0}
        left={0}
        width={'100%'}
        bg={'white'}
        py={4}
        zIndex={40}
      >User Management System</Heading>
      <Box mt={'70px'}>
        <TableComponent data={users} handleUpdateUser={handleUpdateUser} />
      </Box>
      <DownloadButton />
    </div>
  );
}

export default App;
