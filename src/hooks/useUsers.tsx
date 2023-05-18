import { useEffect, useState } from "react";
import useSearch from "../providers/searchProvider/useSearch";
import userService from "../services/userService";
import { UserResource } from "../pages/HomePage";

const useUsers = () => {
  const [users, setUsers] = useState<UserResource[]>([]);
  const { searchText } = useSearch();

  useEffect(() => {
    const unsubscribe = userService.findRealTime((data) => {
      setUsers(data);
    });

    return unsubscribe;
  }, [searchText]);
  return { users, setUsers };
};

export default useUsers;
