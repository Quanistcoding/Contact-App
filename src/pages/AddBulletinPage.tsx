import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Box,
} from "@chakra-ui/react";
import Bulletin from "../entities/bulletin";
import bulletinService from "../services/bulletinService";
import { useRef } from "react";
import useAuth from "../providers/authProvider/useAuth";
import useUserByGoogleId from "../hooks/useUserByGoogleId";
import { useNavigate } from "react-router-dom";

const AddBulletinPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
  const { authUser } = useAuth();
  const { user } = useUserByGoogleId(authUser!.uid);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data: Bulletin = {
      title: title.current!.value,
      content: content.current!.value,
      date: Date.now(),
      author: user!,
      likedBy: [],
    };
    bulletinService.add(data as Bulletin).then(() => {
      toast({ title: "Bulletin Added", status: "success" });
      navigate("/bulletin");
    });
  };

  return (
    <Box paddingX={3}>
      <form onSubmit={handleSubmit}>
        <FormControl padding={1} marginY={2} isRequired>
          <FormLabel fontWeight={"extrabold"}>Title</FormLabel>
          <Input type="text" ref={title} />
        </FormControl>
        <FormControl padding={1} marginY={2} isRequired>
          <FormLabel fontWeight={"extrabold"} marginTop={3}>
            Content
          </FormLabel>
          <Textarea placeholder="..." ref={content} />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AddBulletinPage;
