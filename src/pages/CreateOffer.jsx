import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { getToken } from '../utils/tokenManager';
import StoreImg from "../assets/images/store.png";
import ManagerImg from "../assets/images/profile.png";

const CreateOffer = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    storeName: "",
    offerType: "",
    validTill: "",
    managerName: "",
    contactNumber: "",
    address: ""
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/Buss/create-offer`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to create offer');
      }

      const data = await response.json();
      console.log('Offer created:', data);
      navigate("/business/manageoffers");
    } catch (error) {
      console.error('Error creating offer:', error);
    }
  };

  const handleCancel = () => {
    navigate("/business/manageoffers");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Craft exclusive discounts for your customers</h1>
      
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6 pt-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Store</h2>
              <p className="text-gray-600 mb-2">Enter your store name, and we'll fill in the rest.</p>
              <input
                type="text"
                name="storeName"
                placeholder="Store Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                value={formData.storeName}
                onChange={handleChange}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Offer type</h2>
              <select
                name="offerType"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                value={formData.offerType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="discount">Discount</option>
                <option value="bogo">Buy One Get One</option>
                <option value="cashback">Cashback</option>
              </select>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Valid till</h2>
              <input
                type="date"
                name="validTill"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                value={formData.validTill}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-lg text-white font-medium"
                style={{
                  background: "rgb(255,164,141)",
                  background: "linear-gradient(270deg, rgba(255,164,141,1) 0%, rgba(253,59,132,1) 100%)"
                }}
              >
                Create Offer
              </button>
              <button
                onClick={handleCancel}
                className="w-full py-3 rounded-lg text-gray-700 font-medium border border-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Right Column - Images and Additional Info */}
          <div className="space-y-6">
            <img
              src={StoreImg}
              alt="Store illustration"
              className="w-64 mx-auto"
            />

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <input
                type="text"
                name="address"
                placeholder="Enter store address"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-start space-x-4">
              <img
                src={ManagerImg}
                alt="Manager avatar"
                className="w-16 h-16 object-cover"
              />
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 text-sm">Manager / Incharge</label>
                  <input
                    type="text"
                    name="managerName"
                    placeholder="Manager Name"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                    value={formData.managerName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm">Contact number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Manager Phone Number"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOffer;