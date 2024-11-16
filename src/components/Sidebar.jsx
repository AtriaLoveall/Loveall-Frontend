import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      className="w-64 min-h-screen text-white"
      style={{
        background: "linear-gradient(180deg, rgba(71,0,28,1) 0%, rgba(151,17,50,1) 60%)",
      }}
    >
      <div className="p-6 text-center font-bold text-2xl">LoveAll</div>
      <nav className="flex flex-col p-4 space-y-6 mt-8">
        <NavLink to="/business/dashboard" className={({ isActive }) => `p-2 rounded ${isActive ? "bg-[#971132]" : ""}`}>Dashboard</NavLink>
        <NavLink to="/business/youroffers" className={({ isActive }) => `p-2 rounded ${isActive ? "bg-[#971132]" : ""}`}>Your Offers</NavLink>
        <NavLink to="/business/manageoffers" className={({ isActive }) => `p-2 rounded ${isActive ? "bg-[#971132]" : ""}`}>Manage Offers</NavLink>
        <NavLink to="/business/analytics" className={({ isActive }) => `p-2 rounded ${isActive ? "bg-[#971132]" : ""}`}>Analytics</NavLink>
        <NavLink to="/business/add" className={({ isActive }) => `p-2 rounded ${isActive ? "bg-[#971132]" : ""}`}>Add New Offer</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;