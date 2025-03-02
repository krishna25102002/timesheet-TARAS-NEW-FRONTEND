// src/App.js

import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginScreen from "../screens/Login/LoginPage";
import EntryPage from "../screens/EntryPage/EntryPage";
import WeekselectionPage from "../screens/WeekselectionPage/WeekselectionPage";
import AttendancePage from "../screens/AttendanceEntry/AttendancePage";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function AppNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <EntryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/weekselection"
          element={
            <ProtectedRoute>
              <WeekselectionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <AttendancePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppNavigator;
