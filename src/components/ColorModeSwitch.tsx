import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Switch onChange={toggleColorMode}>
      {colorMode == "light" ? "明亮" : "黑暗"}
    </Switch>
  );
};

export default ColorModeSwitch;
