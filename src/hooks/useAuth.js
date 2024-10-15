import { useState } from "react"
import { getToken, removeToken, setToken } from "../utils/tokenManager";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
    const api = process.env.REACT_APP_API_URL;

    // Auth hooks to handle user login
    const login = async ({email, password, otp, rememberMe}) => {
        const loginApi = api + "/auth/login";
        try {
            const response = await fetch(loginApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password, otp})
            });
            const data = await response.json();
            if (data.success) {
                const auth_token = data.token;
                console.log(auth_token);
                setToken({rememberMe, auth_token});
                setIsAuthenticated(true);
                console.log("Authentication: " + isAuthenticated);

            }
            else {
                setIsAuthenticated(false);
            }
            return {message: data.message, redirectTo: data.redirectTo, error: null};
        } catch (error) {
            // Console error in development mode
            console.log(error)
            return {message: "Error in login", redirectTo: null, error: true};
        }
    }

    // Auth hooks to handle logout
    const logout = async() => {
        removeToken();
        setIsAuthenticated(false);
    }
    
    // Auth hooks to handle register
    const register = async({}) => {
        
    }

    // Auth hooks to handle Forget Password
    const forgetPassword = async({}) => {
    
    }
    
    return {isAuthenticated, login, logout, register, forgetPassword};
}

export default useAuth;