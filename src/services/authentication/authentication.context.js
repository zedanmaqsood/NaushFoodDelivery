import React, { useState, createContext } from "react";

import { loginRequest } from "./authentication.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
