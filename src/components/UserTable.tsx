import React from "react";
import { userResource } from "../pages/HomePage";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";

interface Props {
  users: userResource[];
}

const UserTable = ({ users }: Props) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>姓名</Th>
            <Th>電話</Th>
            <Th>住址</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(({ user, id }) => (
            <Tr key={id}>
              <Td>{user.name}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.address}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
