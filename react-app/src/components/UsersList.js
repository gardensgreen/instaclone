import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <main className="main__backgroundColor">
      <div className="userProfile__main__div">
        <header className="main__div__header">
          <div style={{ width: "291px", height: "194px", marginRight: "30px" }}>
            <div style={{ width: "150px", height: "150px", cursor: "pointer", alignItems: "center", display: "block", justifyContent: "center" }}>
              <span className="header__div__profilePicture">
                Profil-Pic
              </span>
            </div>
          </div>
          <section style={{ width: "613px", height: "194px" }}>
            <div style={{ marginBotton: "20px" }}>
              <h2 className="section__div__userName">Demo</h2>
            </div>
          </section>
        </header>
      </div>
    </main>
  );
}

export default UsersList;
