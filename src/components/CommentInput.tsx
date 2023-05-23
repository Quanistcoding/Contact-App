import { Textarea, Text, Button, Heading } from "@chakra-ui/react";

const CommentInput = () => {
  return (
    <>
      <Text mb="8px" fontWeight={"bold"}>
        Leave a Comment:
      </Text>
      <Textarea
        placeholder="Your comment..."
        size="sm"
        borderColor={"blue"}
        borderWidth={0.5}
      />
      <Button colorScheme="orange" marginTop={5}>
        Send
      </Button>
    </>
  );
};

export default CommentInput;
