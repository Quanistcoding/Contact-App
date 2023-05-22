import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import Bulletin from "../entities/bulletin";
import getDate from "../services/getDate";

interface Props {
  bulletin: Bulletin;
}

const BulletinCard = ({ bulletin }: Props) => {
  const maxLenghth = 14;
  const contentText =
    bulletin?.content.length > maxLenghth
      ? bulletin?.content.substring(0, maxLenghth) + "..."
      : bulletin?.content;

  return (
    <Card borderColor={"gray.400"} borderWidth={1}>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Text>發佈者: {bulletin?.author?.name}</Text>
          <Text>{getDate(bulletin!.date)}</Text>
        </HStack>
      </CardBody>
      <CardBody>
        <Text>標題：{bulletin?.title}</Text>
      </CardBody>
      <CardBody>
        <Text>內容：{contentText}</Text>
      </CardBody>
    </Card>
  );
};

export default BulletinCard;
