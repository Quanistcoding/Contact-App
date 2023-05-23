import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
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
      toast({ title: "公告已新增", status: "success" });
      navigate("/bulletin");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl padding={1} marginY={2} isRequired>
        <FormLabel fontWeight={"extrabold"}>標題</FormLabel>
        <Input type="text" ref={title} />
      </FormControl>
      <FormControl padding={1} marginY={2} isRequired>
        <FormLabel fontWeight={"extrabold"} marginTop={3}>
          內容
        </FormLabel>
        <Textarea placeholder="..." ref={content} />
      </FormControl>
      <Button colorScheme="blue" type="submit">
        新增公告
      </Button>
    </form>
  );
};

export default AddBulletinPage;
