import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import {db} from "../firebase";
import BaseSerive from "./baseService";
import User from "../entities/user";

class UserService extends BaseSerive<User>{
    findByGoogleId = (id:string) => {
        return getDocs(query(collection(db, this.dbName), where('googleId', '==',id)));        
    }
}

export default new UserService("users");