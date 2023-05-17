import { Switch, useColorMode, Text } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return <Switch onChange={toggleColorMode}></Switch>;
};

export default ColorModeSwitch;
