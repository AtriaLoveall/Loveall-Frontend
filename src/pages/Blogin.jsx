import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { login, forgetpassword, sendOtp, changePasswordAPI } from './apiService';

const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center ">
      <div className="flex justify-center items-center ">
        <img src="https://optimworks.com/wp-content/uploads/2022/05/Cyber-Security-Testing.png" alt="Success" className="w-32 mb-4" />
      </div>
      <h2 className="text-lg font-bold">Password Updated!</h2>
      <p>Your password has been successfully changed.<br /> You can now access all the features of your business account using your new password.</p>
      <button
        onClick={onClose}
        className="mt-4 bg-[#8B1539] text-white py-2 px-4 rounded"
      >
        Back to Home
      </button>
    </div>
  </div>
);

const ChangePasswordPopup = ({ onClose, email }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      return;
    }

    try {
      const response = await changePasswordAPI(email, currentPassword, newPassword);
      setSuccessMessage(response.message);
      setErrorMessage('');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setErrorMessage(error.message || 'Failed to change password.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h2 className="text-lg font-bold">Change Your Password</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        
        <input
          type="email"
          value={email}
          readOnly
          className="w-full rounded-lg p-3 border border-gray-300 mt-4"
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Current Password</label>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1539]"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            placeholder="New Password"
            className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1539]"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1539]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          onClick={handleChangePassword}
          className="mt-4 w-full bg-[#8B1539] text-white py-2 rounded"
        >
          Update Password
        </button>
        
        <button
          onClick={onClose}
          className="mt-2 text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordStage, setForgotPasswordStage] = useState(0);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);
  const [isChangePasswordPopupVisible, setIsChangePasswordPopupVisible] = useState(false);
  
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      alert(response.message);
      // Show success popup
      setIsSuccessPopupVisible(true);
    } catch (error) {
      setErrorMessage(error.message || 'Login failed. Please check your credentials.');
      if (error.message === "Kindly change your password.") {
        setIsChangePasswordPopupVisible(true);
      }
    }
  };

  const handleForgotPassword = () => {
    setForgotPasswordStage(1);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSendOTP = async () => {
    try {
      await sendOtp(email);
      setSuccessMessage('OTP sent successfully. Please check your email.');
      setForgotPasswordStage(2);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Failed to send OTP. Please check your email.');
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const payload = {
      business_email: email,
      otp: otp,
      password: newPassword
    };

    try {
      await forgetpassword(payload);
      setIsSuccessPopupVisible(true);
      setForgotPasswordStage(0);
      resetFormFields();
    } catch (error) {
      setErrorMessage(error.message || 'Failed to reset password. Please try again.');
    }
  };

  const resetFormFields = () => {
    setEmail('');
    setPassword('');
    setOtp('');
    setNewPassword('');
    setConfirmPassword('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const closePopupAndRedirect = () => {
    setIsSuccessPopupVisible(false);
    navigate('/business'); // Redirect to Business page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md shadow-lg rounded-3xl bg-white">
        <div className="p-8 space-y-6">
          <div className="text-center mb-8">
            <div className="text-4xl font-bold tracking-tight inline-flex items-center">
              L<svg className="h-8 w-8 text-red-500 mx-[-2px]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>VE
            </div>
            <div className="text-4xl font-bold tracking-tight">ALL</div>
          </div>

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

          <form className="space-y-6" onSubmit={forgotPasswordStage === 0 ? handleLogin : (e) => e.preventDefault()}>
            {forgotPasswordStage === 0 && (
              <>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1539]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    autoComplete="current-password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1539]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8B1539] text-white py-2 rounded"
                >
                  Login
                </button>
              </>
            )}

            {forgotPasswordStage === 1 && (
              <>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1539]"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSendOTP}
                  className="w-full bg-[#8B1539] text-white py-2 rounded"
                >
                  Send OTP
                </button>
              </>
            )}

            {forgotPasswordStage === 2 && (
              <>
                <div className="space-y-2">
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1539]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1539]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1539]"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="w-full bg-[#8B1539] text-white py-2 rounded"
                >
                  Reset Password
                </button>
              </>
            )}

            <div className="text-sm text-center mt-4">
              {forgotPasswordStage === 0 ? (
                <button type="button" onClick={handleForgotPassword} className="text-[#8B1539] underline">Forgot Password?</button>
              ) : (
                <button type="button" onClick={() => setForgotPasswordStage(0)} className="text-gray-500 underline">Back to Login</button>
              )}
            </div>
          </form>
        </div>
      </div>

      {isSuccessPopupVisible && (
        <SuccessPopup onClose={closePopupAndRedirect} />
      )}

      {isChangePasswordPopupVisible && (
        <ChangePasswordPopup onClose={() => setIsChangePasswordPopupVisible(false)} email={email} />
      )}
    </div>
  );
}
