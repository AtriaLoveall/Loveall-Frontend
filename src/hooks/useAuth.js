import React, { createContext, useState, useEffect, useContext } from "react";
import { getToken, removeToken, setToken } from "../utils/tokenManager";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
  const api = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("Authentication: " + isAuthenticated);
  }, [isAuthenticated]);

  const login = async ({ email, password, otp, rememberMe }) => {
    const loginApi = api + "/auth/login";
    try {
      const response = await fetch(loginApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, otp })
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        const auth_token = data.token;
        setToken({ rememberMe, auth_token });
        setIsAuthenticated(true);
      }
      return { message: data.message, redirectTo: data.redirectTo, success: data.success };
    } catch (error) {
      console.log(error);
      return { message: "Error in login", redirectTo: null, success: false };
    }
  };

  const logout = async () => {
    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
