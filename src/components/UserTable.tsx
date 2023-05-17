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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { UserResource } from "../pages/HomePage";

interface Props {
  users: UserResource[];
  onDelete: (id: string) => void;
}

const UserTable = ({ users, onDelete }: Props) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>大數據暨系統設計班通訊錄</TableCaption>
        <Thead>
          <Tr fontSize={"xl"}>
            <Th>姓名</Th>
            <Th>電話</Th>
            <Th>住址</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(({ user, id }) => (
            <Tr key={id}>
              <Td>{user.name}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.address}</Td>
              <Td>
                <Button
                  colorScheme="red"
                  marginX={1}
                  onClick={() => {
                    onDelete(id);
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
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
