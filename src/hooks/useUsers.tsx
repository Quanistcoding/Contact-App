import { useEffect, useState } from "react";
import userService from "../services/userService";
import User from "../entities/user";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const { searchText } = useSearch();

  useEffect(() => {
    setIsLoading(true);

    // const users: User[] = [];
    // userService.find().then((docs) => {
    //   docs.forEach((doc) => {
    //     users.push({ ...doc.data, id: doc.id });
    //   });
    //   setIsLoading(false);
    // });
    // setUsers(users);

    const unsubscribe = userService.findRealTime((data) => {
      setUsers(data);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);
  return { users, setUsers, isLoading };
};

export default useUsers;
