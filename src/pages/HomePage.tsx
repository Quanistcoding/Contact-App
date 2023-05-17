import { Button } from "@chakra-ui/react";
import User from "../entities/user";
import UserTable from "../components/UserTable";
import userService from "../services/userService";
import useSearch from "../providers/searchProvider/useSearch";
import useUsers from "../hooks/useUsers";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import useAuth from "../providers/authProvider/useAuth";

export interface UserResource {
  id: string;
  user: User;
}

const HomePage = () => {
  const { users, setUsers } = useUsers();
  const { searchText } = useSearch();
  const { authUser } = useAuth();

  const handleDelete = (id: string) => {
    userService.delete(id);
    setUsers(users.filter((user) => user.id !== id));
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
          登出
        </Button>
      )}
      <UserTable
        users={
          searchText
            ? users.filter(({ user }) =>
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
