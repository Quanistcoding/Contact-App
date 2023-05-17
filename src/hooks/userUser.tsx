import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../services/userService";
import User from "../entities/user";

const useUser = (id: string) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    userService.findOne(id!).then((docSnap) => {
      if (docSnap.exists()) setUser(docSnap.data() as User);
    });
  }, []);

  return { user, setUser };
};

export default useUser;
