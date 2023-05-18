import { useEffect, useState } from "react";
import userService from "../services/userService";
import User from "../entities/user";




const useUserByGoogleId = (googleId:string) => {   
    const [user,setUser] = useState<User>();
    useEffect(()=>{
        userService.findByGoogleId(googleId).then(querySnapshot => {
            if(!querySnapshot.empty){
                querySnapshot.forEach(doc =>{
                    setUser(doc.data())
                })                
            }
        })
    })

    return {user}
}

export default useUserByGoogleId;