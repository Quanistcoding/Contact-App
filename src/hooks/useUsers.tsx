import { useEffect, useState } from "react";
import useSearch from "../providers/searchProvider/useSearch";
import UserService from "../services/userService";
import { UserResource } from "../pages/HomePage";
import User from "../entities/user";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchText } = useSearch();

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = UserService.findRealTime((data) => {
      setUsers(data);
      setIsLoading(false);
    });

    return unsubscribe;
  }, [searchText]);
  return { users, setUsers, isLoading };
};

export default useUsers;
