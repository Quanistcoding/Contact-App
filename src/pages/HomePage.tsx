import { Button, HStack, Text } from "@chakra-ui/react";
import User from "../entities/user";
import UserTable from "../components/UserTable";
import UserService from "../services/userService";
import useSearch from "../providers/searchProvider/useSearch";
import useUsers from "../hooks/useUsers";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import useAuth from "../providers/authProvider/useAuth";
import useUserByGoogleId from "../hooks/useUserByGoogleId";
import { Link } from "react-router-dom";

export interface UserResource {
  id: string;
  user: User;
}

const HomePage = () => {
  const { users, setUsers } = useUsers();
  const { searchText } = useSearch();
  const { authUser } = useAuth();
  const { user } = useUserByGoogleId(authUser!.uid);

  console.log("home render");

  const handleDelete = (id: string) => {
    UserService.delete(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  const logout = () => {
    signOut(auth);
  };

  //   if (!authUser) return <Navigate to="/login" />;

  return (
    <>
      {/* <Link to="add">
        <Button colorScheme="blue">新增</Button>
      </Link> */}
      <HStack justifyContent={"space-between"}>
        {authUser && (
          <Button
            colorScheme="green"
            onClick={logout}
            marginX={{
              base: 2,
              sm: 2,
              md: 0,
            }}
          >
            Log Out
          </Button>
        )}
        <Text marginX={10}>Hi, {user?.name}</Text>
        <HStack>
          <Link to={"/bulletin"}>
            <Button variant={"link"}>Bulletin</Button>
          </Link>
          {/* <Button variant={"link"}>聊天室</Button> */}
        </HStack>
      </HStack>
      <UserTable
        users={
          searchText
            ? users.filter((user) =>
                user.name?.toLowerCase().includes(searchText.toLowerCase())
              )
            : users
        }
        onDelete={handleDelete}
      />
    </>
  );
};

export default HomePage;
