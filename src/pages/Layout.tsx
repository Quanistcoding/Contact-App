import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import SearchProvider from "../providers/searchProvider";
import useAuth from "../providers/authProvider/useAuth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Layout = () => {
  const { authUser, setAuthUser } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({ type: "SET_AUTHUSER", user });
      } else {
        setAuthUser({ type: "SET_AUTHUSER", user: null });
      }
    });
  }, [authUser]);

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
