import { Box, Button, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack padding={1} bg="gray.700">
      <Button colorScheme="blue">新增</Button>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
