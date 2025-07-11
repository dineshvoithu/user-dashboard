import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    document.title = "Profile | My App";
  }, []);

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>👤 Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    margin: "0 auto",
  },
  title: {
    marginBottom: "15px",
    color: "#333",
  },
};

export default Profile;
