import { useEffect, useState } from "react";
import Bulletin from "../entities/bulletin";
import useAuth from "../providers/authProvider/useAuth";
import useUserByGoogleId from "./useUserByGoogleId";

const useLikedByOne = (bulletin :Bulletin) => {
    const { authUser } = useAuth();
    const { user } = useUserByGoogleId(authUser!.uid);
    const [liked, setLiked] = useState(false);
    
    useEffect(() => {
        const likedBy = bulletin.likedBy;
        const userLikeIt = likedBy!.findIndex((l) => l.googleId === user?.googleId) !== -1;
        console.log(userLikeIt);
        if (userLikeIt) {
          setLiked(true);
        } else {
          setLiked(false);
        }
      }, [user,bulletin]);

    return {liked};
}

export default useLikedByOne;