import React from 'react';
// import { NavLink } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';

const NavBar = ({ setAuthenticated }) => {
  const clickedSearch = () => {
    const searchIcons = window.document.getElementById("searchIcons");
    searchIcons.style.display = "none";
    const searchIconsActive = window.document.getElementById("searchIcons--active");
    searchIconsActive.style.display = "flex"
    const searchIconsText = window.document.getElementById("searchIcons--searchText");
    searchIconsText.style.display = "none"
    const searchIconsInput = window.document.getElementById("searchIcons__input");
    searchIconsInput.focus();
  }

  return (
    <nav className="nav">
      <div className="nav__div1">
        <div className="nav__div2">
          <div className="nav__div2__left">
            <span style={{ marginTop: "-6px", fontFamily: "BillabongW00-Regular", fontSize: "40px", height: "54px" }}>Instagram</span>
          </div>
          <div className="nav__div2__center">
            <input className="div2__center__searchbar" type="text" autocapitalize="none" placeholder="Search" />
            <div onFocus={clickedSearch} className="div2__center__searchIcons" role="button">
              <div id="searchIcons--active">
                <span style={{ marginRight: "6px", verticalAlign: "baseline", backgroundSize: "440px 411px", backgroundPosition: "-428px -241px", width: "10px", height: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <input id="searchIcons__input" style={{ background: "transparent", border: "none", width: "199px" }} />
                <span id="searchIcons--searchText" style={{ display: "inline-block", maxWidth: "140px", overflow: "hidden", textOverflow: "ellipsis", verticalAlign: "bottom", whiteSpace: "nowrap" }}>Search</span>
              </div>
              <div id="searchIcons" style={{ display: "inline", left: "-5px", bottom: "2px" }}>
                <span style={{ display: "inline-block", marginRight: "6px", verticalAlign: "baseline", backgroundSize: "440px 411px", backgroundPosition: "-428px -241px", width: "10px", height: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <span style={{ display: "inline-block", maxWidth: "140px", overflow: "hidden", textOverflow: "ellipsis", verticalAlign: "bottom", whiteSpace: "nowrap" }}>Search</span>
              </div>
            </div>
            {/* <div style={{ width: "30px", height: "30px" }}>
              <div className="div2__center__pic"></div>
              <span className="div2__center__span">Demo</span>
            </div> */}
          </div>
          <div className="nav__div2__right">
            <div className="div2__right__icons">
              <div style={{ width: "22px", height: "22px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/" exact={true} activeClassName="active">
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/login" exact={true} activeClassName="active">
    //         Login
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/sign-up" exact={true} activeClassName="active">
    //         Sign Up
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/users" exact={true} activeClassName="active">
    //         Users
    //       </NavLink>
    //     </li>
    //     <li>
    //       <LogoutButton setAuthenticated={setAuthenticated} />
    //     </li>
    //   </ul>
    // </nav>