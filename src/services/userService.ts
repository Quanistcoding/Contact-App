import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import {db} from "../firebase";
import User from "../entities/user";

class UserService {
    private dbName = "users";

    find = () =>{
        return getDocs(collection(db, this.dbName));
    }

    findRealTime = (fn:(data:any)=>void) =>{
        const q = query(collection(db, this.dbName));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data:any = [];
            querySnapshot.forEach((doc) => {
                data.push({id:doc.id,user:doc.data()});
            });
            fn(data);
          });
          return unsubscribe;
    }

    findOne = (id:string) =>{
        return getDoc(doc(db, this.dbName, id));
    }

    findByGoogleId = (id:string) => {
        return getDocs(query(collection(db, this.dbName), where('googleId', '==',id)));
        
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