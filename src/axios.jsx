import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000/api/Buss';

export const registerBusiness = async (data) => {
    return await axios.post(`${API_URL}/register`, data);
};

export const verifyOtp = async (otpData) => {
    return await axios.post(`${API_URL}/verify-otp`, otpData);
};

export const resendOtp = async (email) => {
    return await axios.post(`${API_URL}/send-otp`, { email });
};
