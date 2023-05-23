import { Box, Button, Flex, Image, useColorMode } from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import useAuth from "../providers/authProvider/useAuth";
import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png";
import UserService from "../services/userService";

const LoginPage = () => {
  const provider = new GoogleAuthProvider();
  const { authUser } = useAuth();
  const { colorMode } = useColorMode();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        UserService.findByGoogleId(user.uid).then((querySnapshot) => {
          if (querySnapshot.empty) {
            UserService.add({
              name: user.displayName || "",
              googleId: user.uid,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (authUser) return <Navigate to="/" />;

  return (
    <Box marginTop={"40px"}>
      <Flex justifyContent={"center"} marginY={5}>
        <Image src={colorMode === "light" ? logo : logo_dark} boxSize={250} />
      </Flex>

      <Flex justifyContent={"center"}>
        <Button
          onClick={login}
          colorScheme="red"
          marginX={{
            base: 2,
            sm: 2,
            md: 0,
          }}
        >
          Sign in with Google
        </Button>
      </Flex>
    </Box>
  );
};

export default LoginPage;
