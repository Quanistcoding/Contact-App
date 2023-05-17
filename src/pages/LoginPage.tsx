import { Button } from "@chakra-ui/react";
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

  console.log(authUser);
  if (authUser) return <Navigate to="/" />;

  return (
    <Button
      onClick={login}
      colorScheme="blue"
      marginX={{
        base: "10px",
        sm: 0,
      }}
    >
      請登入
    </Button>
  );
};

export default LoginPage;
