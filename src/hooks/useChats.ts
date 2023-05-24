import { useEffect, useState } from "react";
import Chat from "../entities/chat";
import chatService from "../services/chatService";

const useChats = () => {
    const [chats,setChats] = useState<Chat[]>();
    useEffect(()=>{
        chatService.findRealTimeOrderByDateAsc(data => {
            setChats(data);
        })
    },[]);

    return {chats};
}

export default useChats;