import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Show,
  Skeleton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuth from "../providers/authProvider/useAuth";
import useUsers from "../hooks/useUsers";
import User from "../entities/user";

interface Props {
  users: User[];
  onDelete: (id: string) => void;
}

const UserTable = ({ users, onDelete }: Props) => {
  const { authUser } = useAuth();
  const { isLoading } = useUsers();
  return (
    <>
      {isLoading && <Skeleton height={300} marginTop={5}></Skeleton>}

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>大數據暨系統設計班通訊錄</TableCaption>
          <Thead>
            <Tr fontSize={"xl"}>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Show above="xl">
                <Th>Address</Th>
                <Th></Th>
              </Show>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((user) => (
              <Tr key={user.id}>
                <Td
                  _hover={{
                    color: "green",
                  }}
                >
                  <Link to={"/" + user.id}>{user?.name || ""}</Link>
                </Td>
                <Td>{user?.phone || ""}</Td>
                <Show above="xl">
                  <Td>{user?.address || ""}</Td>
                  {authUser?.uid === "HYlo4Re63wbgmPKFF5FC49H5U303" ||
                  authUser?.uid === user?.googleId ? (
                    <Td padding={0}>
                      <Button
                        colorScheme="red"
                        marginX={1}
                        onClick={() => {
                          const confirmed = confirm("確定刪除嗎？");
                          if (confirmed) onDelete(user.id!);
                        }}
                      >
                        刪除
                      </Button>
                      <Link to={"edit/" + user.id}>
                        <Button colorScheme="yellow" marginX={1}>
                          修改
                        </Button>
                      </Link>
                    </Td>
                  ) : (
                    <Td></Td>
                  )}
                </Show>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
