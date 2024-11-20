import React, { useEffect, useState } from "react";
import { Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getToken } from '../utils/tokenManager';
import Empty from "../assets/images/Empty.png";

const ManageOffers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkForStores();
  }, []);

  const checkForStores = async () => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/Buss/check-stores`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to check for stores');
      }

      const data = await response.json();
      if (data.hasStores) {
        navigate("/business/manage-many-offers");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNow = () => {
    navigate("/business/create-offer");
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Manage Offers</h1>
      
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="flex justify-end mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Offers"
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="ml-4">
            <Plus className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-gray-600 text-lg">No Offers currently</p>
          
          <img
            src={Empty}
            alt="No offers illustration"
            className="w-64 h-64 object-contain"
          />

          <button
            className="px-8 py-3 rounded-lg text-white font-medium text-lg"
            style={{
              background: "linear-gradient(180deg, rgba(71,0,28,1) 0%, rgba(151,17,50,1) 60%)"
            }}
            onClick={handleCreateNow}
          >
            CREATE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageOffers;