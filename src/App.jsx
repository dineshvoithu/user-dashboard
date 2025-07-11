import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Profile from "./Pages/Profile";
import UserContext from "./context/UserContext";
import Layout from "./Components/Layout";

const App = () => {
  const user = {
    name: "Dinesh",
    role: "Front End Developer",
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>User Dashboard</h1>

        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/users"
            element={
              <Layout>
                <Users />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
