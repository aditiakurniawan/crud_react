import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black border-b-2 border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-5 px-3  text-white hover:text-gray-400"
              >
                Logo
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-5 px-3  text-white hover:text-gray-400">
              Home
            </Link>
            <Link
              to="/mahasiswa"
              className="py-5 px-3  text-white hover:text-gray-400"
            >
              Mahasiswa
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
