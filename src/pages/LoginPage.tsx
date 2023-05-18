import { Button, Flex } from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import useAuth from "../providers/authProvider/useAuth";
import userService from "../services/userService";

const LoginPage = () => {
  const provider = new GoogleAuthProvider();
  const { authUser } = useAuth();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        userService.findOneByGoogleId(user.uid).then((querySnapshot) => {
          if (querySnapshot.empty) {
            userService.add({
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
    <Flex align={"center"} justifyContent={"center"} height={"60vh"}>
      <Button
        onClick={login}
        colorScheme="red"
        marginX={{
          base: 2,
          sm: 2,
          md: 0,
        }}
      >
        Google 登入
      </Button>
    </Flex>
  );
};

export default LoginPage;
