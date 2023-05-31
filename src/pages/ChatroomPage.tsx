import { Box, Divider, Heading, Stack } from "@chakra-ui/react";
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
    <Stack align={"center"} justifyContent={"flex-end"}>
      <Box
        width={{
          base: "100%",
          md: 800,
        }}
      >
        <Box paddingX={1}>
          <Heading fontSize={28}>Chat Room</Heading>
          <br />
          <Divider />
          <ChatList chats={chats} />
        </Box>
        <Box maxWidth={800} width="100%">
          <CommentInput
            onSend={handleSend}
            title="Send Message"
            placeholder="Your message..."
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default ChatroomPage;
