import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import AdminPanel from "./components/AdminPanel";
import { profilesData } from "./data";

const App = () => {
  const [profiles, setProfiles] = useState(profilesData);

  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home profiles={profiles} />} />
        <Route path="/profile/:id" element={<Profile profiles={profiles} />} />
        <Route path="/map" element={<Map profiles={profiles} />} />
        <Route path="/admin" element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />} />
      </Routes>
    </div>
  );
};

export default App;

  