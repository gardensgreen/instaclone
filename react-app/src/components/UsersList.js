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
            <ul style={{ marginBottom: "20px", display: "flex", flexDirection: "row" }}>
              <li style={{ marginLeft: "0px", marginRight: "40px", fontSize: "16px", display: "list-item" }}>
                <span>
                  <span style={{ color: "rgba(var(--i1d,38,38,38),1)", fontWeight: "600" }}>10 </span>
                  posts
                </span>
              </li>
              <li style={{ marginRight: "40px", fontSize: "16px" }}>
                <a style={{ color: "inherit", textDecoration: "none" }} href="/demo/followers" tabIndex="0">
                  <span style={{ color: "rgba(var(--i1d,38,38,38),1)", fontWeight: "600" }} title="600">600 </span>
                  followers
                </a>
              </li>
              <li style={{ marginRight: "0", fontSize: "16px" }}>
                <a style={{ color: "inherit", textDecoration: "none" }} href="/demo/following" tabIndex="0">
                  <span style={{ color: "rgba(var(--i1d,38,38,38),1)", fontWeight: "600" }}>400 </span>
                  following
                </a>
              </li>
            </ul>
            <div className="section__div__bio"><p>This is bio test!</p></div>
          </section>
        </header>
        <div className="main__div__posts">
          <a className="div__posts__sectionTitle" href="/demo">
            <span style={{ display: "flex", alignItems: "center", color: "rgba(var(--i1d,38,38,38),1)", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
              </svg>
              <span style={{ marginLeft: "6px" }}>Posts</span>
            </span>
          </a>
          <a className="div__posts__sectionTitle" href="/demo/saved">
            <span style={{ display: "flex", alignItems: "center", color: "rgba(var(--i1d,38,38,38),1)", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
              <span style={{ marginLeft: "6px" }}>Saved</span>
            </span>
          </a>
        </div>
        <div className="div__posts__images">
          <article className="posts__images__article"></article>
        </div>
      </div>
    </main>
  );
}

export default UsersList;
