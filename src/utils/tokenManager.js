import Cookies from "js-cookie";

const TOKEN_KEY = 'auth_token';

export const getToken = () => {
  const cookieToken = Cookies.get(TOKEN_KEY);
  const sessionToken = sessionStorage.getItem(TOKEN_KEY);
  const token = cookieToken || sessionToken;
  console.log("Retrieved token from:", cookieToken ? "cookie" : (sessionToken ? "session storage" : "nowhere"));
  console.log("Token value:", token ? token.substring(0, 10) + "..." : "null");
  return token;
}

export const setToken = ({ rememberMe, auth_token }) => {
  console.log("Setting token, rememberMe:", rememberMe);
  if (rememberMe) {
    Cookies.set(TOKEN_KEY, auth_token, { 
      expires: 7, // Set to expire in 7 days
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax'
    });
    console.log("Token set in cookie");
  } else {
    sessionStorage.setItem(TOKEN_KEY, auth_token);
    console.log("Token set in session storage");
  }
  console.log("Token value set:", auth_token.substring(0, 10) + "...");
}

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  console.log("Token removed from both cookie and session storage");
}

export const isTokenValid = (token) => {
  if (!token) {
    console.log("No token provided for validation");
    return false;
  }
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = payload.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();
    const isValid = currentTime < expirationTime;
    console.log("Token validity:", isValid ? "Valid" : "Expired");
    console.log("Token expiration:", new Date(expirationTime).toISOString());
    console.log("Current time:", new Date(currentTime).toISOString());
    return isValid;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
}