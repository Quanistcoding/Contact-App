import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import User from "../entities/user";
import UserTable from "../components/UserTable";

export interface userResource {
  id: string;
  user: User;
}

const HomePage = () => {
  const [users, setUsers] = useState<userResource[]>([]);
  useEffect(() => {
    const data: userResource[] = [];
    getDocs(collection(db, "users")).then((querySnapshot) => {
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
        <UserTable users={users} />
      </Link>
    </>
  );
};

export default HomePage;
