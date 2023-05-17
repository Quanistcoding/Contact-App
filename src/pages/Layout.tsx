import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import SearchProvider from "../providers/searchProvider";

const Layout = () => {
  return (
    <SearchProvider>
      <Navbar />
      <Box
        paddingX={{
          sm: "20px",
          md: "50px",
          lg: "70px",
          xl: "80px",
        }}
        paddingY={5}
      >
        <Outlet />
      </Box>
    </SearchProvider>
  );
};

export default Layout;
