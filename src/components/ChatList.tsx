import { Box } from "@chakra-ui/react";
import Chat from "../entities/chat";
import getDate from "../services/getDate";
import { useEffect, useRef, useState } from "react";

interface Props {
  chats?: Chat[];
}

const ChatList = ({ chats }: Props) => {
  const [chatListHeight, setChatListHeight] = useState(window.innerHeight);

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current!.scrollTop = container.current!.scrollHeight;
  }, [chats, chatListHeight]);

  window.addEventListener("resize", () => {
    setChatListHeight(window.innerHeight);
  });

  return (
    <Box
      overflowY={"scroll"}
      ref={container}
      borderWidth={1}
      h={chatListHeight * 0.5}
    >
      {chats?.map((c) => (
        <Box key={c.id}>
          {getDate(c.date) + ", " + c.author?.name + ": " + c.content}
        </Box>
      ))}
    </Box>
  );
};

export default ChatList;
