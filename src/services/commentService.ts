import Comment from "../entities/comment";
import BaseSerive from "./baseService";


class CommentService extends BaseSerive<Comment>{
}

export default new CommentService('comments');