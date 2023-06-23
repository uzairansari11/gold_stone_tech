import React from "react";
import { Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import axios from "axios";

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:8080/csv", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "users.csv");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("An error occurred while downloading the file:", error);
    }
  };

  return (
    <Button
      leftIcon={<DownloadIcon />}
      rounded="full"
      colorScheme="blue"
      position="fixed"
      zIndex={30}
      bottom={50}
      right={50}
      onClick={handleDownload}
    >
      Download
    </Button>
  );
};

export default DownloadButton;
