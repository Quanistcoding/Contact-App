import { Text, Button, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  onSend: (content: string) => void;
  title?: string;
  placeholder?: string;
}

const CommentInput = ({ onSend, title, placeholder }: Props) => {
  const [content, setContent] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSend(content);
        setContent("");
      }}
    >
      <Box paddingX={1}>
        <Text mb="8px" fontWeight={"bold"}>
          {title || ""}
        </Text>
        <Input
          value={content}
          placeholder={placeholder || ""}
          size="sm"
          borderColor={"blue"}
          borderWidth={0.5}
          onChange={(event) => setContent(event.target.value)}
        />
      </Box>
      <Button
        width={"100%"}
        paddingY={2}
        colorScheme="orange"
        marginTop={5}
        type="submit"
      >
        Send
      </Button>
    </form>
  );
};

export default CommentInput;
