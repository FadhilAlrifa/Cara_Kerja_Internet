import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
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
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <span className="text-blue-700">D</span>121231106
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 text-gray-700 font-medium">
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
    </nav>
  );
}
