import { Textarea, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  onSend: (content: string) => void;
}

const CommentInput = ({ onSend }: Props) => {
  const [content, setContent] = useState("");
  return (
    <>
      <Text mb="8px" fontWeight={"bold"}>
        Leave a Comment:
      </Text>
      <Textarea
        value={content}
        placeholder="Your comment..."
        size="sm"
        borderColor={"blue"}
        borderWidth={0.5}
        onChange={(event) => setContent(event.target.value)}
      />
      <Button
        colorScheme="orange"
        marginTop={5}
        onClick={() => {
          onSend(content);
          setContent("");
        }}
      >
        Send
      </Button>
    </>
  );
};

export default CommentInput;
