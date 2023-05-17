import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../services/userService";
import User from "../entities/user";

const EditContactPage = () => {
  const [user, setUser] = useState<User>();
  const { id } = useParams();
  useEffect(() => {
    userService.findOne(id!).then((docSnap) => {
      if (!docSnap.exists()) return;
      setUser(docSnap.data());
    });
  }, []);
  const navigate = useNavigate();

  const toast = useToast();
  const handleSubmit = (event: React.MouseEvent) => {
    if (!user?.name) {
      return toast({
        title: "姓名不能是空白.",
        description: "別鬧了...",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    const userInput = {
      name: user.name,
      phone: user.phone || "",
      address: user.address || "",
    };

    userService
      .update(id!, userInput)
      .then((res) => {
        toast({
          title: "更新成功",
          description: "恩恩",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((e) => {
        toast({
          title: "更新失敗.",
          description: e.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    setUser({ ...user, [target!.name]: target!.value });
  };
  return (
    <form>
      <FormControl marginY={5}>
        <FormLabel>姓名</FormLabel>
        <Input
          type="text"
          name="name"
          onInput={handleInputChange}
          value={user?.name || ""}
        />
      </FormControl>
      <FormControl marginY={5}>
        <FormLabel>電話</FormLabel>
        <Input
          type="text"
          name="phone"
          onInput={handleInputChange}
          value={user?.phone || ""}
        />
      </FormControl>
      <FormControl marginY={5}>
        <FormLabel>地址</FormLabel>
        <Input
          type="text"
          name="address"
          onInput={handleInputChange}
          value={user?.address || ""}
        />
      </FormControl>
      <Button colorScheme="yellow" onClick={handleSubmit}>
        送出
      </Button>
    </form>
  );
};

export default EditContactPage;