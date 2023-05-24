import { Textarea, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  onSend: (content: string) => void;
  title?: string;
  placeholder?: string;
}

const CommentInput = ({ onSend, title, placeholder }: Props) => {
  const [content, setContent] = useState("");
  return (
    <>
      <Text mb="8px" fontWeight={"bold"}>
        {title || ""}
      </Text>
      <Textarea
        value={content}
        placeholder={placeholder || ""}
        size="sm"
        borderColor={"blue"}
        borderWidth={0.5}
        onChange={(event) => setContent(event.target.value)}
      />
      <Button
        paddingY={2}
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
