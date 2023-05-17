import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import db from "../firebase";
import User from "../entities/user";

class UserService {
    private dbName = "users";

    find = () =>{
        return getDocs(collection(db, this.dbName));
    }

    add = (data : User) => {
        return addDoc(collection(db, this.dbName), data);
    }

    delete = (id:string) =>{
        return deleteDoc(doc(db, this.dbName, id));
    }
}

export default new UserService();