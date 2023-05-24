import { Box, Heading, Stack } from "@chakra-ui/react";
import ChatList from "../components/ChatList";
import CommentInput from "../components/CommentInput";
import Chat from "../entities/chat";
import useChats from "../hooks/useChats";
import useUserByGoogleId from "../hooks/useUserByGoogleId";
import useAuth from "../providers/authProvider/useAuth";
import chatService from "../services/chatService";

const ChatroomPage = () => {
  const { authUser } = useAuth();
  const { user } = useUserByGoogleId(authUser!.uid);
  const { chats } = useChats();
  const handleSend = (content: string) => {
    const chat: Chat = {
      content,
      date: Date.now(),
      author: user,
    };

    chatService.add(chat);
  };
  return (
    <Box>
      <Heading fontSize={30}>Chat Room</Heading>
      <Stack
        maxWidth={800}
        marginLeft={"auto"}
        marginRight={"auto"}
        height={"82vh"}
        justify={"flex-end"}
      >
        <ChatList chats={chats} />
        <CommentInput
          onSend={handleSend}
          title="Send Message"
          placeholder="Your message..."
        />
      </Stack>
    </Box>
  );
};

export default ChatroomPage;
