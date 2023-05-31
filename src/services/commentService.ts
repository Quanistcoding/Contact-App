import { collection, getDocs, query, where, writeBatch } from "firebase/firestore";
import Comment from "../entities/comment";
import BaseSerive from "./baseService";
import { db } from "../firebase";


class CommentService extends BaseSerive<Comment>{
    deleteAllByBulletinId = async (id:string) => {
        const batch = writeBatch(db)
        const commentsQuery = query(
          collection(db, this.dbName),
          where("bulletinId", "==", id)
          )
        const snapShot = await getDocs(commentsQuery)

        snapShot.forEach(d => {
            batch.delete(d.ref)
        })
        batch.commit()
    }
}

export default new CommentService('comments');