import Chat from "../entities/chat";
import BaseSerive from "./baseService";

class CommentService extends BaseSerive<Chat>{
}

export default new CommentService('chats');