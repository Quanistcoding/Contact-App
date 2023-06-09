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
import UserService from "../services/userService";

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

    UserService.add(userInput)
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
  // if (!authUser) return <Navigate to="/login" />;
  return (
    <form>
      <FormControl marginY={5}>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" onInput={handleInputChange} />
      </FormControl>
      <FormControl marginY={5}>
        <FormLabel>Phone</FormLabel>
        <Input type="text" name="phone" onInput={handleInputChange} />
      </FormControl>
      <FormControl marginY={5}>
        <FormLabel>Address</FormLabel>
        <Input type="text" name="address" onInput={handleInputChange} />
      </FormControl>
      <Button colorScheme="yellow" onClick={handleSubmit}>
        Send
      </Button>
    </form>
  );
};

export default AddContactPage;
