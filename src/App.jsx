import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./pages/index";
import Http from "./pages/Http";
import Domain from "./pages/Domain";
import Hosting from "./pages/Hosting";
import Dns from "./pages/Dns";
import Browser from "./pages/Browser";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <div className="p-6 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/http" element={<Http />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/dns" element={<Dns />} />
            <Route path="/browser" element={<Browser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
