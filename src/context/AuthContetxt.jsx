import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  // Retrieve the initial state from cookies
  const [loginState, setLoginState] = useState(() => {
    const savedState = Cookies.get("loginState");
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    // Save the state to cookies whenever it changes
    Cookies.set("loginState", JSON.stringify(loginState), { expires: 7 });
  }, [loginState]);

  return (
    <AuthContext.Provider value={{ loginState, setLoginState }}>
      {children}
    </AuthContext.Provider>
  );
};
