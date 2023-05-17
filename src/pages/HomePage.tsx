import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "../entities/user";
import UserTable from "../components/UserTable";
import userService from "../services/userService";
export interface UserResource {
  id: string;
  user: User;
}

const HomePage = () => {
  const [users, setUsers] = useState<userResource[]>([]);

  const handleDelete = (id: string) => {
    userService.delete(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    userService.find().then((querySnapshot) => {
      const data: userResource[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, user: doc.data() });
      });
      setUsers(data);
    });
  }, []);

  return (
    <>
      <Link to="add">
        <Button colorScheme="blue">新增</Button>
      </Link>
      <UserTable users={users} onDelete={handleDelete} />
    </>
  );
};

export default HomePage;
