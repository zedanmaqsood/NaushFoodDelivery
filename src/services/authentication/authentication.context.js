import React, { useState, useEffect, createContext } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./authentication.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  auth.onAuthStateChanged((usr) => {
    if (usr && initializing) {
      setUser(usr);
      setIsLoading(false);
      setInitializing(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const u = userCredential.user;
        setUser(u);
      })
      .catch((e) => {
        setError(e.code);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setIsLoading(false);
      setError("Password doesn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registered and Signed in
        const u = userCredential.user;
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.code);
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    auth.signOut().catch((e) => console.log("Error", e.code));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        setError,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
