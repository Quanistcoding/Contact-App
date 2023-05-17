import { useEffect, useState } from "react";
import useSearch from "../providers/searchProvider/useSearch";
import userService from "../services/userService";
import { UserResource } from "../pages/HomePage";

const useUsers = () => {
  const [users, setUsers] = useState<UserResource[]>([]);
  const { searchText } = useSearch();

  useEffect(() => {
    userService.find().then((querySnapshot) => {
      const data: UserResource[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, user: doc.data() });
      });
      setUsers(data);
    });
  }, [searchText]);
  return { users, setUsers };
};

export default useUsers;
