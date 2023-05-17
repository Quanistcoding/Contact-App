import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../entities/user";
import userService from "../services/userService";

const AddContactPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<User>();
  const toast = useToast();
  const handleSubmit = () => {
    if (!data?.name) {
      return toast({
        title: "姓名不能是空白.",
        description: "別鬧了...",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    const userInput = {
      name: data?.name,
      phone: data?.phone || "",
      address: data?.address || "",
    };

    userService
      .add(userInput)
      .then(() => {
        toast({
          title: "新增成功.",
          description: "嗨，" + data?.name,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/");
      })
      .catch((e) => {
        toast({
          title: "新增失敗.",
          description: e.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setData({ ...data, [target!.name]: target!.value });
  };

  return (
    <form>
      <FormControl marginY={5}>
        <FormLabel>姓名</FormLabel>
        <Input type="text" name="name" onInput={handleInputChange} />
      </FormControl>
      <FormControl marginY={5}>
        <FormLabel>電話</FormLabel>
        <Input type="text" name="phone" onInput={handleInputChange} />
      </FormControl>
      <FormControl marginY={5}>
        <FormLabel>地址</FormLabel>
        <Input type="text" name="address" onInput={handleInputChange} />
      </FormControl>
      <Button colorScheme="yellow" onClick={handleSubmit}>
        送出
      </Button>
    </form>
  );
};

export default AddContactPage;
