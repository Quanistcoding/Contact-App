import { Button } from "@chakra-ui/react";
import React from "react";
import BulletinCard from "../components/BulletinCard";
import { Link } from "react-router-dom";

const ButtetinPage = () => {
  return (
    <>
      <Link to="/bulletin/add">
        <Button marginBottom={2}>新增公告</Button>
      </Link>
      <BulletinCard />
    </>
  );
};

export default ButtetinPage;
