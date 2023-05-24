import { Box, Divider, Flex, Heading, Show } from "@chakra-ui/react";
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
    <Flex
      width="100%"
      left={0}
      pos="fixed"
      bottom="0"
      justifyContent={"center"}
    >
      <Box width={800}>
        <Box paddingX={1}>
          <Show above="sm">
            <Heading fontSize={30}>Chat Room</Heading>
            <br />
          </Show>
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
    </Flex>
  );
};

export default ChatroomPage;
