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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { UserResource } from "../pages/HomePage";
import useAuth from "../providers/authProvider/useAuth";

interface Props {
  users: UserResource[];
  onDelete: (id: string) => void;
}

const UserTable = ({ users, onDelete }: Props) => {
  const { authUser } = useAuth();
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>大數據暨系統設計班通訊錄</TableCaption>
        <Thead>
          <Tr fontSize={"xl"}>
            <Th>姓名</Th>
            <Th>電話</Th>
            <Show above="xl">
              <Th>住址</Th>
              <Th></Th>
            </Show>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(({ user, id }) => (
            <Tr key={id}>
              <Td
                _hover={{
                  color: "green",
                }}
              >
                <Link to={"/" + id}>{user.name}</Link>
              </Td>
              <Td>{user.phone}</Td>
              <Show above="xl">
                <Td>{user.address}</Td>
                {authUser?.uid === user.googleId && (
                  <Td>
                    <Button
                      colorScheme="red"
                      marginX={1}
                      onClick={() => {
                        const confirmed = confirm("確定刪除嗎？");
                        if (confirmed) onDelete(id);
                      }}
                    >
                      刪除
                    </Button>
                    <Link to={"edit/" + id}>
                      <Button colorScheme="yellow" marginX={1}>
                        修改
                      </Button>
                    </Link>
                  </Td>
                )}
              </Show>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
