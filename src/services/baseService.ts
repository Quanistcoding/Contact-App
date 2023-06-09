import { DocumentData,  addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import {db} from "../firebase";

class BaseSerive<T>{
    protected dbName;

    constructor(dbName:string){
        this.dbName = dbName
    }

    find = () =>{
        return getDocs(query(collection(db, this.dbName)));
    }

    findOrderByDate = () => {
        return getDocs(query(collection(db, this.dbName),orderBy("date", "desc")));
    }

    findRealTime = (fn:(data:any)=>void) =>{
        const q = query(collection(db, this.dbName));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data:any = [];
            querySnapshot.forEach((doc) => {
                data.push({...doc.data(),id:doc.id});                
            });
            fn(data);
          });
          return unsubscribe;
    }

    findRealTimeOrderByDateAsc = (fn:(data:any)=>void) =>{
        const q = query(collection(db, this.dbName),orderBy("date", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data:any = [];
            querySnapshot.forEach((doc) => {
                data.push({...doc.data(),id:doc.id});                
            });
            fn(data);
          });
          return unsubscribe;
    }

    findOne = (id:string) =>{
        return getDoc(doc(db, this.dbName, id));
    }

    add = (data:T ) => {
        return addDoc(collection(db, this.dbName), data as DocumentData);
    }

    delete = (id:string) =>{
        return deleteDoc(doc(db, this.dbName, id));
    }

    update = (id:string,data:T) => {
        return updateDoc(doc(db, this.dbName, id),data as DocumentData);
    }
}

export default BaseSerive;