import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, User } from "lucide-react";
import { useAuth } from '../hooks/useAuth';
import { getToken } from '../utils/tokenManager';
import storeImage from '../assets/images/Midhun.jpeg';

const YourOffers = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      fetchStoresAndOffers();
    }
  }, [isAuthenticated, navigate]);

  const fetchStoresAndOffers = async () => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/Buss/your-offers`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch stores and offers');
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
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">🎫 Your Offers</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input 
              className="pl-10 w-[300px] h-10 border border-gray-300 rounded-md"
              placeholder="Search Offers"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-md">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {stores.map((store, index) => (
          <div key={index} className="border rounded-lg p-6">
            <div className="flex items-start gap-8">
              <div className="w-2/5">
                <img
                  src={storeImage}
                  alt="Store illustration"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="w-3/5">
                <div className="mb-4">
                  <div className="text-sm text-gray-500">Store name</div>
                  <div className="text-lg font-semibold">{store.storeName}</div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-500">Store address</div>
                  <div>{store.address}</div>
                </div>
                <div className="flex gap-12">
                  <div>
                    <div className="text-sm text-gray-500">Manager / Incharge</div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{store.managerName}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Contact Number</div>
                    <div>{store.contactNumber}</div>
                  </div>
                </div>
                {store.offers.length > 0 ? (
                  store.offers.map((offer, offerIndex) => (
                    <div key={offerIndex} className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Offer</div>
                        <div className="font-semibold">{offer.offerType}</div>
                        <div className="text-sm text-gray-500">Valid till {new Date(offer.validTill).toLocaleDateString()}</div>
                      </div>
                      <button 
                        className="bg-[#FD3B84] hover:bg-[#FD3B84]/90 text-white px-4 py-2 rounded-md"
                      >
                        Edit Offer
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="mt-4 text-gray-500">No offers available for this store.</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourOffers;