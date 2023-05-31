import { useNavigate, useParams } from "react-router-dom";
import useBulletin from "../hooks/useBulletin";
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
import { useRef } from "react";
import bulletinService from "../services/bulletinService";

const EditBulletinPage = () => {
  const { id } = useParams();
  const { bulletin } = useBulletin(id!);
  const navigate = useNavigate();
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);
  const toast = useToast();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data: Bulletin = {
      title: title.current!.value,
      content: content.current!.value,
      date: Date.now(),
      likedBy: [],
    };

    bulletinService.update(id!, data as Bulletin).then(() => {
      toast({ title: "Bulletin edited", status: "success" });
      navigate("/bulletin");
    });
  };

  return (
    <Box paddingX={3}>
      <form onSubmit={handleSubmit}>
        <FormControl padding={1} marginY={2} isRequired>
          <FormLabel fontWeight={"extrabold"}>Title</FormLabel>
          <Input type="text" ref={title} defaultValue={bulletin?.title || ""} />
        </FormControl>
        <FormControl padding={1} marginY={2} isRequired>
          <FormLabel fontWeight={"extrabold"} marginTop={3}>
            Content
          </FormLabel>
          <Textarea
            placeholder="..."
            ref={content}
            defaultValue={bulletin?.content || ""}
          />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Edit
        </Button>
      </form>
    </Box>
  );
};

export default EditBulletinPage;
