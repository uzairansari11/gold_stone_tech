import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TableComponent from "./components/TableComponent";
import DownloadButton from "./components/DownloadButton";

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
      <TableComponent data={users} handleUpdateUser={handleUpdateUser} />
      <DownloadButton />
    </div>
  );
}

export default App;
