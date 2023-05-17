import { useContext } from "react";
import { SearchContext } from ".";


const useSearch = () => useContext(SearchContext);
export default useSearch;