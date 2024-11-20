import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from "lucide-react";
import { useAuth } from '../hooks/useAuth';
import { getToken } from '../utils/tokenManager';
import Empty from "../assets/images/Empty.png";

const ManageManyOffers = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      fetchStores();
    }
  }, [isAuthenticated, navigate]);

  const fetchStores = async () => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/Buss/manage-many-offers`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch stores');
      }

      const data = await response.json();
      setStores(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditOffer = (storeId) => {
    console.log('Edit offer for store:', storeId);
  };

  const handleDeleteOffer = (storeId) => {
    console.log('Delete offer for store:', storeId);
  };

  const handleCreateNewStore = () => {
    navigate("/business/create-offer");
  };

  const filteredStores = stores.filter(store => 
    store.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Manage Offers for your stores</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text"
              placeholder="🔍 Search offers"
              className="pl-4 pr-10 py-2 border border-gray-200 rounded-md w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Plus className="h-5 w-5 text-[#FD3B84]" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredStores.map((store, index) => (
          <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-start">
              <div className="ml-8 mr-16">
                <img
                  src={Empty}
                  alt="Store illustration"
                  className="w-[180px] h-[200px] object-contain"
                />
              </div>
              <div className="flex-1 pt-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-2">{store.storeName}</h2>
                  <p className="text-gray-600">{store.address}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleEditOffer(index)}
                    className="px-6 py-2 bg-[#FD3B84] text-white rounded-md hover:bg-[#FD3B84]/90 font-medium"
                  >
                    Edit Offer
                  </button>
                  <button
                    onClick={() => handleDeleteOffer(index)}
                    className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleCreateNewStore}
          className="px-8 py-3 rounded-lg text-white font-medium text-lg"
          style={{
            background: "rgb(255,164,141)",
            background: "linear-gradient(270deg, rgba(255,164,141,1) 0%, rgba(253,59,132,1) 100%)"
          }}
        >
          Create New Store
        </button>
      </div>
    </div>
  );
};

export default ManageManyOffers;