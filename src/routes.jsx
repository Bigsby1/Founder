/* eslint-disable no-unused-vars */
import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/layouts/Home/Home";
import Profile from "./components/layouts/Profile/Profile";
import Signup from "./components/layouts/Signup/Signup";

function useRoutes(isAuthticated, isAdmin) {
  return (
    <div className="container">
      {!isAuthticated ? (
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home isAuthticated={isAuthticated} />} />

          {/* --------- Redirect------- */}
          <Route path="/profile" element={<Navigate to="/signup" />} />
        </Routes>
      ) : (
        <Routes>
          {/* --------- Redirect------- */}
          <Route path="/" element={<Home isAuthticated={isAuthticated} />} />
          <Route
            path="/profile"
            element={<Profile isAuthticated={isAuthticated} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default useRoutes;
