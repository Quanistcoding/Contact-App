import { Card, CardBody, CardHeader, HStack, Text } from "@chakra-ui/react";
import React from "react";

const BulletinCard = () => {
  return (
    <Card borderColor={"gray.400"} borderWidth={1}>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Text>發佈者:</Text>
          <Text>2022-03-20</Text>
        </HStack>
      </CardBody>
      <CardBody as="h1">標題</CardBody>
      <CardBody>
        <Text>內容</Text>
      </CardBody>
    </Card>
  );
};

export default BulletinCard;
