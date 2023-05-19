import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import SearchProvider from "../providers/searchProvider";
import useAuth from "../providers/authProvider/useAuth";
import LoginPage from "./LoginPage";

const Layout = () => {
  const { authUser } = useAuth();

  console.log("laytout render");

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
        {authUser ? <Outlet /> : <LoginPage />}
      </Box>
    </SearchProvider>
  );
};

export default Layout;
