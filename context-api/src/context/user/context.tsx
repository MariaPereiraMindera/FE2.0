import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface UserType {
  name: string;
  lastName: string;
  email: string;
}

interface PropsUserContext {
  state: UserType;
  setState: Dispatch<SetStateAction<UserType>>;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

const DEFAULT_VALUE = {
  state: {
    name: "",
    lastName: "",
    email: "",
  },
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
