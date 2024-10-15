import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../assets/images/Logo.jpeg'

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone_number: formData.phone_number,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        navigate('/registration2');
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-xl relative">
        <button 
          onClick={() => navigate('/')} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className="flex justify-center">
      <img src={logoImage} alt="LOVE ALL Logo" className="h-16 w-auto" />
    </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to <span className="text-red-600">Love All!</span></h2>
            <p className="mb-4">Sign up to get more discounts and contribute to the community.</p>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-30NQnVtn6jckDg8R7c2PfLCahWCanD.png" alt="Registration illustration" className="w-full max-w-md" />
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 max-w-md">
            <div className="mb-4">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <span className="text-sm">Agree with <a href="/terms" className="text-red-600">Terms & Conditions</a></span>
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-b from-[#5F0013] via-[#C71B2F] to-[#E34234] text-white font-bold rounded-full hover:opacity-90 transition duration-300"
              >
                Send OTP
              </button>
            </div>
            <p className="text-center mt-4 text-sm">
              Already a member? <a href="/login" className="text-red-600">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;