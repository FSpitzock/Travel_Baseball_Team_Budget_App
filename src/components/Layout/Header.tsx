import React from "react";
import Navigation from "../Layout/Navigation";
import OutlawLogo from "../../assets/OutlawLogo.png";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-20">
      
      {/* Left Section: Logo + Title */}
      <div className="flex items-center gap-4">
        <img
          src={OutlawLogo}
          alt="Oviedo Outlaw Logo"
          className="w-20 h-20 object-contain"
        />

        <h2 className="text-2xl font-bold text-gray-800">
          Team Budget
        </h2>
      </div>

      {/* Right Section: Navigation */}
      <Navigation />
    </header>
  );
};

export default Header;
