import { UnorderedList, ListItem, Text } from "@chakra-ui/react";
import getDate from "../services/getDate";
import Comment from "../entities/comment";

interface Props {
  comments?: Comment[];
}

const CommentList = ({ comments }: Props) => {
  return (
    <>
      <Text fontWeight={"bold"}>Comments</Text>
      <UnorderedList>
        {comments?.map((c, index) => (
          <ListItem key={index}>
            {c.author?.name + ", " + getDate(c.date) + ": " + c.content}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default CommentList;
