import { Box, Card, CardBody, HStack, Text } from "@chakra-ui/react";
import Bulletin from "../entities/bulletin";
import getDate from "../services/getDate";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import useLikedByOne from "../hooks/useLikedByOne";

interface Props {
  bulletin: Bulletin;
  onLikeClick: (bulletin: Bulletin) => void;
}

const BulletinCard = ({ bulletin, onLikeClick }: Props) => {
  const { liked } = useLikedByOne(bulletin);

  const maxLenghth = 14;
  const contentText =
    bulletin?.content.length > maxLenghth
      ? bulletin?.content.substring(0, maxLenghth) + "..."
      : bulletin?.content;
  console.log("card rendered");
  return (
    <Card borderColor={"gray.400"} borderWidth={1}>
      <Link to={"/bulletin/" + bulletin.id}>
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
          <Text marginBottom={2}>內容：{contentText}</Text>
        </CardBody>
      </Link>
      <CardBody paddingTop={0} display={"flex"} alignItems={"center"}>
        <Box
          cursor={"pointer"}
          display={"inline-block"}
          onClick={() => onLikeClick(bulletin)}
          // fontSize={20}
        >
          {liked ? <AiFillLike color="red" /> : <AiOutlineLike />}
        </Box>
        <Text>
          &nbsp;{bulletin.likedBy.length > 0 && bulletin.likedBy.length}
        </Text>
      </CardBody>
    </Card>
  );
};

export default BulletinCard;
