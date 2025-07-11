import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  const handleBack = () => {
    navigate("/dashboard/users");
  };
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>👤 User Details (ID: {id})</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <button onClick={handleBack} style={styles.backButton}>
        ← Back to Users
      </button>
    </div>
  );
};

export default UserDetails;

const styles = {
  backButton: {
    padding: "8px 12px",
    marginBottom: "20px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
