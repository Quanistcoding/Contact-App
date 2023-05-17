import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box
        paddingX={{
          sm: "10px",
          md: "100px",
          lg: "200px",
          xl: "300px",
        }}
        paddingY={5}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
