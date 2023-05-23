import { Textarea, Text, Button, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import commentService from "../services/commentService";
import Comment from "../entities/comment";
import useAuth from "../providers/authProvider/useAuth";
import useUserByGoogleId from "../hooks/useUserByGoogleId";

const CommentInput = () => {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const { authUser } = useAuth();
  const { user } = useUserByGoogleId(authUser!.uid);
  const toast = useToast();

  const handleClick = () => {
    const comment: Comment = {
      content: commentRef.current?.value!,
      author: user,
      date: Date.now(),
    };

    commentService.add(comment).then(() => {
      toast({
        title: "Comment sent.",
      });
    });
  };

  return (
    <>
      <Text mb="8px" fontWeight={"bold"}>
        Leave a Comment:
      </Text>
      <Textarea
        ref={commentRef}
        placeholder="Your comment..."
        size="sm"
        borderColor={"blue"}
        borderWidth={0.5}
      />
      <Button colorScheme="orange" marginTop={5} onClick={handleClick}>
        Send
      </Button>
    </>
  );
};

export default CommentInput;
