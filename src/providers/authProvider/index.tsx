import { User, onAuthStateChanged } from "firebase/auth";
import {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { auth } from "../../firebase";

interface authAction {
  type: "SET_AUTHUSER";
  user: User | null;
}

const reducer = (state: User | null, action: authAction): User | null => {
  if (action.type === "SET_AUTHUSER") return action.user;
  return state;
};

interface AuthContextType {
  authUser: User | null;
  setAuthUser: Dispatch<authAction>;
}

export const AuthContext = createContext({} as AuthContextType);

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useReducer(reducer, null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({ type: "SET_AUTHUSER", user });
      } else {
        setAuthUser({ type: "SET_AUTHUSER", user: null });
      }
    });

    console.log("1auth..........................");
  }, []);
  console.log("2auth..........................");

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
