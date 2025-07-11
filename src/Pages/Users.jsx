// import React, { useEffect, useState } from "react";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     document.title = "Users | My App";
//   }, []);

//   return (
//     <div>
//       <h2>👥 Users Page</h2>
//       <p>List of users will be displayed here.</p>
//       <input
//         type="text"
//         value={search}
//         placeholder="Search by Name and Email"
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {loading ? (
//         <p>Loading</p>
//       ) : (
//         <ul>
//           {users

//             .filter(
//               (user) =>
//                 user.name.toLowerCase().includes(search.toLowerCase()) ||
//                 user.email.toLowerCase().includes(search.toLowerCase())
//             )

//             .map((user) => (
//               <li key={user.id}>
//                 {user.name} {user.email}
//               </li>
//             ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Users;

import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  //  Fetch users when page loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  //  Set page title
  useEffect(() => {
    document.title = "Users | My App";
  }, []);

  // Filter users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>👥 Users</h2>
      <p style={styles.subtitle}>Search and view all users below:</p>

      <input
        type="text"
        value={search}
        placeholder="Search by Name or Email"
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      {loading ? (
        <p style={styles.loading}>⏳ Loading users...</p>
      ) : (
        <div style={styles.grid}>
          {filteredUsers.map((user) => (
            <div key={user.id} style={styles.card}>
              <h3 style={styles.name}>{user.name}</h3>
              <p style={styles.email}>{user.email}</p>
              <p style={styles.username}>@{user.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  heading: {
    marginBottom: "10px",
    color: "#333",
  },
  subtitle: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#666",
  },
  input: {
    padding: "10px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  loading: {
    fontStyle: "italic",
    color: "#888",
  },
  grid: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  name: {
    margin: 0,
    fontSize: "18px",
    color: "#222",
  },
  email: {
    fontSize: "14px",
    color: "#555",
  },
  username: {
    fontSize: "13px",
    color: "#999",
  },
};

export default Users;
