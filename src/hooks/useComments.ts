import { useEffect, useState } from "react";
import commentService from "../services/commentService";
import Comment from "../entities/comment";

const useComments = () => {
    const [comments,setComments] = useState<Comment[]>();
    useEffect(()=>{
        const data:Comment[] = [];
        commentService.findOrderByDate().then(docs => {
            if(!docs.empty)
             docs.forEach(doc => {
                data.push({ id: doc.id, ...doc.data() } as Comment)
             })
        })
        setComments(data);

    },[])
    return {comments,setComments}
}

export default useComments;