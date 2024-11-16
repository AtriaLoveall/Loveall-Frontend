import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Blogin";
import Business from "./pages/Business";
import Dashboard from "./pages/Dashboard";
import YourOffers from "./pages/YourOffers";
import ManageOffers from "./pages/ManageOffers";
import Analytics from "./pages/Analytics";
import AddOffer from "./pages/AddOffer";
import BusinessProfile from "./pages/BusinessProfile";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* Move BusinessProfile outside of Business layout */}
      <Route path="/business/profile" element={<BusinessProfile />} />
      <Route path="/business" element={<Business />}>
        {/* Nested Routes within Business Component */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="youroffers" element={<YourOffers />} />
        <Route path="manageoffers" element={<ManageOffers />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="add" element={<AddOffer />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;