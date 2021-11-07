import React from "react";
import UserContext from "./UserContext";
import useStorage from "../utils/useStorage"


const UserProvider = ({children}) => {
const [token, setToken] = useStorage('token');
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;