import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "../entities/user";
import UserTable from "../components/UserTable";
import userService from "../services/userService";
import useSearch from "../providers/searchProvider/useSearch";
export interface UserResource {
  id: string;
  user: User;
}

const HomePage = () => {
  const [users, setUsers] = useState<UserResource[]>([]);
  const { searchText } = useSearch();

  const handleDelete = (id: string) => {
    userService.delete(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    userService.find().then((querySnapshot) => {
      const data: UserResource[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, user: doc.data() });
      });
      setUsers(data);
    });
  }, [searchText]);

  return (
    <>
      <Link to="add">
        <Button colorScheme="blue">新增</Button>
      </Link>
      <UserTable
        users={
          searchText
            ? users.filter(({ user }) => user.name?.includes(searchText))
            : users
        }
        onDelete={handleDelete}
      />
    </>
  );
};

export default HomePage;
