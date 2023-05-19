import { useEffect, useState } from "react";
import UserService from "../services/userService";
import User from "../entities/user";

const useUser = (id: string) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    UserService.findOne(id!).then((docSnap) => {
      if (docSnap.exists()) setUser(docSnap.data() as User);
    });
  }, []);

  return { user, setUser };
};

export default useUser;
