/* eslint-disable */

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  console.log(user);

  useEffect(() => {
    // delete user?.password;
    localStorage.setItem("user", JSON.stringify(user));
    setAuthenticated(user ? true : false);
  }, [user]);

  const data = { user, setUser, authenticated };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
