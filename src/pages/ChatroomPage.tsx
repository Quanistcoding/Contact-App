import CommentInput from "../components/CommentInput";
import Chat from "../entities/chat";
import useUserByGoogleId from "../hooks/useUserByGoogleId";
import useAuth from "../providers/authProvider/useAuth";
import chatService from "../services/chatService";

const ChatroomPage = () => {
  const { authUser } = useAuth();
  const { user } = useUserByGoogleId(authUser!.uid);

  const handleSend = (content: string) => {
    const chat: Chat = {
      content,
      date: Date.now(),
      author: user,
    };

    chatService.add(chat);
  };
  return (
    <>
      <CommentInput
        onSend={handleSend}
        title="Send Message"
        placeholder="Your message..."
      />
    </>
  );
};

export default ChatroomPage;
