import { Input } from "@chakra-ui/react";
import useSearch from "../providers/searchProvider/useSearch";

const SearchInput = () => {
  const { setSearchText } = useSearch();

  return (
    <form>
      <Input
        borderRadius={40}
        color={"white"}
        placeholder="姓名搜尋..."
        onChange={(event) => {
          setSearchText({
            type: "SET_SEARCHTEXT",
            searchText: event.target.value,
          });
        }}
      ></Input>
    </form>
  );
};

export default SearchInput;
