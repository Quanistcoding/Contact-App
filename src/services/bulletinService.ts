
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Bulletin from "../entities/bulletin";
import BaseSerive from "./baseService";
import { db } from "../firebase";

class BulletinService extends BaseSerive<Bulletin>{
    find = () =>{
        return getDocs(query(collection(db, this.dbName),orderBy("date", "desc")));
    }
}

export default new BulletinService('bulletins');