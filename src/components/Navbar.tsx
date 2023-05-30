import { Box, HStack, Text, useColorMode, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import useAuth from "../providers/authProvider/useAuth";
import logo_dark from "../assets/logo_dark.png";

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
            <Image
              src={logo_dark}
              boxSize={"40x"}
              width={"40px"}
              objectFit={"cover"}
            />
          </Text>
        </Link>
      </Box>
      <Box flex={1}>
        {authUser && location.pathname === "/" && <SearchInput />}
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
