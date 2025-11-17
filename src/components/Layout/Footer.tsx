import React from "react";
import Navigation from "../Layout/Navigation";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-6">

        {/* Title */}
        <p className="text-lg font-semibold tracking-wide">
          Travel Baseball Team Budget App
        </p>

        {/* Quick Links Title */}
        <p className="uppercase text-sm font-bold text-gray-400">
          Quick Links
        </p>

        {/* Navigation */}
        <div className="flex justify-center">
          <Navigation  />
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm leading-6 mt-4">
          &copy; {new Date().getFullYear()} Travel Baseball Team Budget App <br />
          Created by <span className="font-semibold text-gray-300">Frank Spitzock</span> <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
