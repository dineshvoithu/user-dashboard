import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* Top Navbar */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>My Dashboard</h2>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/dashboard/users" style={styles.link}>
            Users
          </Link>
          <Link to="/dashboard/profile" style={styles.link}>
            Profile
          </Link>
        </div>
      </nav>

      {/*  Main Content */}
      <main style={styles.main}>
        {children}
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  nav: {
    background: "#282c34",
    color: "white",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  main: {
    padding: "20px",
  },
};

export default DashboardLayout;
