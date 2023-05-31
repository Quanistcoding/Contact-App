import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import BulletinCard from "../components/BulletinCard";
import { Link } from "react-router-dom";
import useBulletins from "../hooks/useBulletins";
import Bulletin from "../entities/bulletin";
import useAuth from "../providers/authProvider/useAuth";
import useUserByGoogleId from "../hooks/useUserByGoogleId";
import bulletinService from "../services/bulletinService";

const ButtetinPage = () => {
  const { bulletins, setBulletins } = useBulletins();
  const { authUser } = useAuth();
  const { user } = useUserByGoogleId(authUser!.uid);

  console.log("b rendered");
  const handleLikeClick = (bulletin: Bulletin) => {
    let likedByList = bulletin.likedBy;
    const liked = likedByList.findIndex((l) => l.id === user!.id) !== -1;
    if (liked) {
      likedByList = likedByList.filter((l) => l.name !== user?.name);
    } else {
      likedByList.push(user!);
    }
    const updatedBulletin = {
      ...bulletin,
      likedBy: likedByList,
    };
    setBulletins(
      bulletins?.map((b) => (b.id === bulletin.id ? updatedBulletin : b))
    );
    const original = [...bulletins!];
    bulletinService.update(bulletin.id!, updatedBulletin).catch(() => {
      setBulletins(original);
    });
  };

  return (
    <Box paddingX={3}>
      <Link to="/bulletin/add">
        <Button marginBottom={2}>Add New</Button>
      </Link>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 3,
        }}
        spacing={5}
      >
        {bulletins?.map((b, index) => (
          <BulletinCard
            bulletin={b}
            key={index}
            onLikeClick={handleLikeClick}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ButtetinPage;
