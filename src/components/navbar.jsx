import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "HTTP/HTTPS", path: "/http" },
    { name: "Domain", path: "/domain" },
    { name: "Hosting", path: "/hosting" },
    { name: "DNS", path: "/Dns" },
    { name: "Browser", path: "/Browser" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <span className="text-blue-700">D</span>121231106
        </Link>

        {/* Tombol hamburger (muncul di mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none text-gray-800"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-blue-600 transition duration-200 ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 py-3 space-y-3 border-t border-gray-200">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // Tutup menu setelah diklik
              className={`block hover:text-blue-600 transition duration-200 ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
