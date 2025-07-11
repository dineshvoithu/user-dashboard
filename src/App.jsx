import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Profile from "./Pages/Profile";
import UserContext from "./context/UserContext";
import Login from "./Pages/Login";
import DashboardLayout from "./Components/DashboardLayout";
import UserDetails from "./Pages/UserDetails";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  const user = {
    name: "Dinesh",
    role: "Front End Developer",
  };

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard/users" element={<Users />} />
          <Route path="dashboard/users/:id" element={<UserDetails />} />
          <Route path="dashboard/profile" element={<Profile />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
