import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return <Switch onChange={toggleColorMode}></Switch>;
};

export default ColorModeSwitch;
