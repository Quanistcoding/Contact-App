import { Box, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import useAuth from "../providers/authProvider/useAuth";

const Navbar = () => {
  const { authUser } = useAuth();
  return (
    <HStack padding={1} bg="gray.700">
      <Box whiteSpace={"nowrap"}>
        <Link to="/">
          <Text
            color="white"
            _hover={{
              color: "red.300",
            }}
          >
            THE BIG
          </Text>
        </Link>
      </Box>
      {authUser && <SearchInput />}
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
