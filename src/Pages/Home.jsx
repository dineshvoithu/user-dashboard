import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | My App";
  }, []);
  return (
    <div>
      <h2>🏠 Home Page</h2>
      <p>Welcome to the User Dashboard!</p>
    </div>
  );
};

export default Home;
