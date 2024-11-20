'use client'

import React, { createContext, useState, useEffect, useContext } from "react";
import { getToken, removeToken, setToken } from "../utils/tokenManager";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const api = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const token = getToken();
    console.log("Token from storage on initial load:", token ? token.substring(0, 10) + "..." : "null");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    console.log("Authentication state updated:", isAuthenticated);
  }, [isAuthenticated]);

  const login = async ({ email, password, otp, rememberMe }) => {
    const loginApi = `${api}/auth/login`;
    try {
      console.log("Attempting login with email:", email);
      console.log("Login API URL:", loginApi);
      const response = await fetch(loginApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, otp })
      });
      const data = await response.json();
      console.log("Login response:", data);
      if (data.success && data.token) {
        const auth_token = data.token;
        setToken({ rememberMe, auth_token });
        setIsAuthenticated(true);
        console.log("Token set after successful login:", auth_token.substring(0, 10) + "...");
      } else {
        console.log("Login failed:", data.message);
      }
      return { message: data.message, redirectTo: data.redirectTo, success: data.success };
    } catch (error) {
      console.error("Login error:", error);
      return { message: "Error in login", redirectTo: null, success: false };
    }
  };

  const logout = async () => {
    console.log("Logging out...");
    removeToken();
    setIsAuthenticated(false);
    console.log("Logged out, token removed");
  };

  const register = async (payload) => {
    const registerApi = `${api}/auth/register`;
    try {
      console.log("Attempting registration with payload:", payload);
      const response = await fetch(registerApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        return { success: true, data };
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        return { success: false, message: errorData.message };
      }
    } catch (error) {
      console.error('Error during registration:', error);
      return { success: false, message: 'An error occurred during registration' };
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};