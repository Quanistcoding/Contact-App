import {
  Card,
  CardBody,
  Text,
  CardHeader,
  Box,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import useUser from "../hooks/useUser";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import UserService from "../services/userService";
import useAuth from "../providers/authProvider/useAuth";

const UserDetaillPage = () => {
  const { id } = useParams();
  const { user } = useUser(id!);
  const toast = useToast();
  const navigate = useNavigate();
  const { authUser } = useAuth();

  if (!authUser) return <Navigate to="/login" />;

  return (
    <Card padding={1}>
      <CardHeader as="h2" fontSize={"lg"} fontWeight={"bold"}>
        {user?.name}
      </CardHeader>
      <CardBody>
        <Box>
          <Text>Phone: {user?.phone}</Text>
        </Box>
        <hr></hr>
        <Box>
          <Text>Address: {user?.address}</Text>
        </Box>
      </CardBody>
      {authUser.uid === user?.googleId && (
        <Flex>
          <Button
            colorScheme="red"
            marginX={1}
            onClick={() => {
              const confirmed = confirm("Are you sure you want to delete?");
              if (confirmed)
                UserService.delete(id!).then(() => {
                  toast({
                    title: "User deleted.",
                    description: "....",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                  navigate("/");
                });
            }}
          >
            Delete
          </Button>
          <Link to={"/edit/" + id}>
            <Button colorScheme="yellow" marginX={1}>
              Edit
            </Button>
          </Link>
        </Flex>
      )}
    </Card>
  );
};

export default UserDetaillPage;
