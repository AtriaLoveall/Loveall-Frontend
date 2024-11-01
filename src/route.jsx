import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";

import Login from "./pages/Blogin";

const AppRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<Register />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
  );
};

export default AppRoute;
