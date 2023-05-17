import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import db from "../firebase";
import User from "../entities/user";

class UserService {
    private dbName = "users";

    find = () =>{
        return getDocs(collection(db, this.dbName));
    }

    findOne = (id:string) =>{
        return getDoc(doc(db, this.dbName, id));
    }

    add = (data : User) => {
        return addDoc(collection(db, this.dbName), data);
    }

    delete = (id:string) =>{
        return deleteDoc(doc(db, this.dbName, id));
    }

    update = (id:string,data:User) => {
        return updateDoc(doc(db, this.dbName, id),{
            name:data.name,
            phone:data.phone,
            address:data.address
        });
    }
}

export default new UserService();