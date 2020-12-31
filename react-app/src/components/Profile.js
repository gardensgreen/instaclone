import React, { useEffect, useState } from "react";

function Profile(props) {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/users/${props.userdata.id}`);
      const responseData = await response.json();
      setUsers(responseData);
    }
    fetchData();
  }, []);

  let clickedFollowersButton = false;
  const clickedFollowers = (e) => {
    e.preventDefault();
    const emptyDiv = window.document.querySelector(".clickable-element-userPage");
    const followersWindow = window.document.getElementById("followersDiv");
    if (clickedFollowersButton === false) {
      emptyDiv.style.display = "flex";
      followersWindow.style.display = "";
      clickedFollowersButton = true;
    } else {
      emptyDiv.style.display = "none";
      followersWindow.style.display = "none";
      clickedFollowersButton = false;
      e.stopPropagation();
      return;
    }
  }
  const clickedFollowing = (e) => {
    return;
  }

  return (
    <main className="main__backgroundColor">
      <div className="userProfile__main__div">
        <header className="main__div__header">
          <div style={{ width: "291px", height: "194px", marginRight: "30px" }}>
            <div style={{ width: "150px", height: "150px", cursor: "pointer", alignItems: "center", display: "block", justifyContent: "center" }}>
              <span className="header__div__profilePicture">
                <img style={{ left: "0", position: "absolute", top: "0", width: "150px", height: "150px" }} src={user.avatarUrl} alt="profile-picture" />
              </span>
            </div>
          </div>
          <section style={{ width: "613px", height: "194px" }}>
            <div style={{ marginBotton: "20px" }}>
              <h2 className="section__div__userName">{user.username}</h2>
            </div>
            <ul style={{ marginBottom: "20px", display: "flex", flexDirection: "row", listStyle: "none", paddingLeft: "0px" }}>
              <li style={{ marginLeft: "0px", marginRight: "40px", fontSize: "16px", display: "list-item" }}>
                <span>
                  <span style={{ color: "rgba(var(--i1d,38,38,38),1)", fontWeight: "600" }}>10 </span>
                  posts
                </span>
              </li>
              <li style={{ marginRight: "40px", fontSize: "16px" }}>
                <a onClick={clickedFollowers} style={{ color: "inherit", textDecoration: "none" }} href="/demo/followers" tabIndex="0">
                  <span style={{ color: "rgba(var(--i1d,38,38,38),1)", fontWeight: "600" }} title="600">600 </span>
                  followers
                </a>
              </li>
              <li style={{ marginRight: "0", fontSize: "16px" }}>
                <a onClick={clickedFollowing} style={{ color: "inherit", textDecoration: "none" }} href="/demo/following" tabIndex="0">
                  <span style={{ color: "rgba(var(--i1d,38,38,38),1)", fontWeight: "600" }}>400 </span>
                  following
                </a>
              </li>
            </ul>
            <div className="section__div__bio"><p>{user.bio}</p></div>
          </section>
        </header>
        <div className="main__div__posts">
          <a className="div__posts__sectionTitle" href="/demo">
            <span style={{ display: "flex", alignItems: "center", color: "rgba(var(--i1d,38,38,38),1)", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
              </svg>
              <span style={{ marginLeft: "6px" }}>Posts</span>
            </span>
          </a>
          <a className="div__posts__sectionTitle" href="/demo/saved">
            <span style={{ display: "flex", alignItems: "center", color: "rgba(var(--i1d,38,38,38),1)", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              <span style={{ marginLeft: "6px" }}>Likes</span>
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

export default Profile;