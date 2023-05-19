import { useNavigate, useParams } from "react-router-dom";
import useBulletin from "../hooks/useBulletin";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
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
    };

    bulletinService.update(id!, data as Bulletin).then(() => {
      toast({ title: "公告已新增", status: "success" });
      navigate("/bulletin");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl padding={1} marginY={2} isRequired>
        <FormLabel fontWeight={"extrabold"}>標題</FormLabel>
        <Input type="text" ref={title} defaultValue={bulletin?.title || ""} />
      </FormControl>
      <FormControl padding={1} marginY={2} isRequired>
        <FormLabel fontWeight={"extrabold"} marginTop={3}>
          內容
        </FormLabel>
        <Textarea
          placeholder="..."
          ref={content}
          defaultValue={bulletin?.content || ""}
        />
      </FormControl>
      <Button colorScheme="blue" type="submit">
        新增公告
      </Button>
    </form>
  );
};

export default EditBulletinPage;
