import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to="add">
        <Button colorScheme="blue">新增</Button>
      </Link>
    </>
  );
};

export default HomePage;
