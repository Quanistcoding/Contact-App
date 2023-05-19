import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import useBulletin from "../hooks/useBulletin";
import { useNavigate, useParams } from "react-router-dom";
import getDate from "../services/getDate";
import useAuth from "../providers/authProvider/useAuth";
import bulletinService from "../services/bulletinService";

const BulletinDetailPage = () => {
  const { id } = useParams();
  const { bulletin } = useBulletin(id!);
  const { authUser } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const handleDelete = (id?: string) => {
    bulletinService.delete(id!).then((res) => {
      toast({
        title: "公告已刪除",
      });
      navigate("/bulletin");
    });
  };

  return (
    <Box paddingX={3}>
      <Heading>{bulletin?.title}</Heading>
      <Divider />
      <Text marginTop={2}>{bulletin?.author?.name}</Text>
      <Text marginTop={2}>{getDate(bulletin?.date)}</Text>
      <Divider />
      <Text marginTop={2}>{bulletin?.content}</Text>
      {authUser?.uid === bulletin?.author?.googleId && (
        <Flex gap={2} marginTop={5}>
          <Button colorScheme="green">修改</Button>
          <Button colorScheme="red" onClick={() => handleDelete(bulletin?.id)}>
            刪除
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default BulletinDetailPage;
