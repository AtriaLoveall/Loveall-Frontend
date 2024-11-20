import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Blogin";
import Business from "./pages/Business";
import Dashboard from "./pages/Dashboard";
import YourOffers from "./pages/YourOffers";
import ManageOffers from "./pages/ManageOffers";
import ManageManyOffers from "./pages/ManageManyOffers";
import Analytics from "./pages/Analytics";
import AddOffer from "./pages/AddOffer";
import BusinessProfile from "./pages/BusinessProfile";
import CreateOffer from "./pages/CreateOffer";
import BusinessTransaction from "./pages/BusinessTransaction";
import BusinessFeedback from "./pages/BusinessFeedback";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* BusinessProfile outside of Business layout */}
      <Route path="/business/profile" element={<BusinessProfile />} />
      <Route path="/business" element={<Business />}>
        {/* Nested Routes within Business Component */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="youroffers" element={<YourOffers />} />
        <Route path="manageoffers" element={<ManageOffers />} />
        <Route path="manage-many-offers" element={<ManageManyOffers />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="add" element={<AddOffer />} />
        <Route path="create-offer" element={<CreateOffer />} />
        <Route path="transactions" element={<BusinessTransaction />} />
        <Route path="feedback" element={<BusinessFeedback />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;