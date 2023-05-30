import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import useBulletin from "../hooks/useBulletin";
import { Link, useNavigate, useParams } from "react-router-dom";
import getDate from "../services/getDate";
import useAuth from "../providers/authProvider/useAuth";
import bulletinService from "../services/bulletinService";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import useComments from "../hooks/useComments";
import commentService from "../services/commentService";
import useUserByGoogleId from "../hooks/useUserByGoogleId";
import Comment from "../entities/comment";

const BulletinDetailPage = () => {
  const { comments, setComments } = useComments();
  const { id } = useParams();
  const { bulletin } = useBulletin(id!);
  const { authUser } = useAuth();
  const { user } = useUserByGoogleId(authUser!.uid);
  const toast = useToast();
  const navigate = useNavigate();
  const handleDelete = (id?: string) => {
    bulletinService.delete(id!).then(() => {
      toast({
        title: "公告已刪除",
      });
      navigate("/bulletin");
    });
  };

  const handleCommentSend = (content: string) => {
    const comment: Comment = {
      content: content,
      author: user,
      date: Date.now(),
      bulletinId: id!,
    };
    setComments([...comments!, comment]);
    commentService.add(comment).then(() => {
      toast({
        title: "Comment sent.",
      });
    });
  };

  return (
    <Box paddingX={3}>
      <Heading as="h1" fontSize={40}>
        {bulletin?.title}
      </Heading>
      <Divider />
      <Text marginTop={2}>{bulletin?.author?.name}</Text>
      <Text marginTop={2}>{getDate(bulletin?.date)}</Text>
      <Divider />
      <Text marginTop={2}>{bulletin?.content}</Text>
      {authUser?.uid === bulletin?.author?.googleId && (
        <Flex gap={2} marginTop={5}>
          <Link to={"/bulletin/edit/" + bulletin?.id}>
            <Button colorScheme="green">Edit</Button>
          </Link>
          <Button colorScheme="red" onClick={() => handleDelete(bulletin?.id)}>
            Delete
          </Button>
        </Flex>
      )}
      <Box marginTop={5}>
        <CommentList comments={comments?.filter((b) => b.bulletinId === id)} />
      </Box>

      <Box marginTop={5} maxWidth={800}>
        <CommentInput
          onSend={handleCommentSend}
          title="Leave a Comment"
          placeholder="Your comment..."
        />
      </Box>
    </Box>
  );
};

export default BulletinDetailPage;
