import { useEffect, useState } from "react";
import useSearch from "../providers/searchProvider/useSearch";
import userService from "../services/userService";
import { UserResource } from "../pages/HomePage";

const useUsers = () => {
  const [users, setUsers] = useState<UserResource[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchText } = useSearch();

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = userService.findRealTime((data) => {
      setUsers(data);
      setIsLoading(false);
    });

    return unsubscribe;
  }, [searchText]);
  return { users, setUsers, isLoading };
};

export default useUsers;
