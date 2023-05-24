import { Box } from "@chakra-ui/react";
import Chat from "../entities/chat";
import getDate from "../services/getDate";
import { useEffect, useRef } from "react";

interface Props {
  chats?: Chat[];
}

const ChatList = ({ chats }: Props) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current!.scrollTop = container.current!.scrollHeight;
  }, [chats]);

  return (
    <Box height={"55vh"} overflowY={"scroll"} ref={container} borderWidth={1}>
      {chats?.map((c) => (
        <Box key={c.id}>
          {getDate(c.date) + ", " + c.author?.name + ": " + c.content}
        </Box>
      ))}
    </Box>
  );
};

export default ChatList;
