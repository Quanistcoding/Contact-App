import { Box, Button, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={1} bg="gray.700">
      <Link to="add">
        <Button colorScheme="blue">新增</Button>
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
