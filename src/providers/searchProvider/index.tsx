import { Dispatch, ReactNode, createContext, useReducer } from "react";

interface SearchAction {
  type: "SET_SEARCHTEXT";
  searchText: string;
}

const searchReducer = (state: string, action: SearchAction): string => {
  if (action.type === "SET_SEARCHTEXT") return action.searchText;

  return state;
};

interface SearchContextType {
  searchText: string;
  setSearchText: Dispatch<SearchAction>;
}

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);

interface Props {
  children: ReactNode;
}

const SearchProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useReducer(searchReducer, "");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
