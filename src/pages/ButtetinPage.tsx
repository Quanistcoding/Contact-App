import { Button, SimpleGrid } from "@chakra-ui/react";
import BulletinCard from "../components/BulletinCard";
import { Link } from "react-router-dom";
import useBulletins from "../hooks/useBulletins";

const ButtetinPage = () => {
  const { bulletins } = useBulletins();
  return (
    <>
      <Link to="/bulletin/add">
        <Button marginBottom={2}>新增公告</Button>
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
          <Link key={index} to={"/bulletin/" + b.id}>
            <BulletinCard bulletin={b} />
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ButtetinPage;
