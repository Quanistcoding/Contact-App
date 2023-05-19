import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import Bulletin from "../entities/bulletin";

interface Props {
  bulletin: Bulletin;
}

const BulletinCard = ({ bulletin }: Props) => {
  const date =
    new Date(bulletin?.date).getMonth() +
    "月" +
    new Date(bulletin?.date).getDate() +
    "日";
  return (
    <Card borderColor={"gray.400"} borderWidth={1}>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Text>發佈者: {bulletin?.author?.name}</Text>
          <Text>{date}</Text>
        </HStack>
      </CardBody>
      <CardBody>
        <Text>標題：{bulletin?.title}</Text>
      </CardBody>
      <CardBody>
        <Text>內容：{bulletin?.content}</Text>
      </CardBody>
    </Card>
  );
};

export default BulletinCard;
