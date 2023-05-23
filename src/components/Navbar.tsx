import { Box, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import useAuth from "../providers/authProvider/useAuth";

const Navbar = () => {
  const { authUser } = useAuth();
  const location = useLocation();
  return (
    <HStack
      padding={1}
      bg="gray.700"
      justifyContent={"space-between"}
      height={"50px"}
    >
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
      {authUser && location.pathname === "/" && <SearchInput />}
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
