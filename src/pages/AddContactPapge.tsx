import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

interface ContactData {
  name?: string;
  phone?: string;
  address?: string;
}

const AddContactPapge = () => {
  const [data, setData] = useState<ContactData>();

  const handleSubmit = (event: React.MouseEvent) => {
    console.log(event);
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
      <Button colorScheme="yellow" onClick={(event) => handleSubmit}>
        送出
      </Button>
    </form>
  );
};

export default AddContactPapge;
