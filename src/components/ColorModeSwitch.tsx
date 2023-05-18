import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return <Switch onChange={toggleColorMode}></Switch>;
};

export default ColorModeSwitch;
