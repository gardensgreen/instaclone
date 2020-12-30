import React from 'react';
// import { NavLink } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="nav">
      <div className="nav__div1">
        <div className="nav__div2">
          <div className="nav__div2__left">
            <span style={{ marginTop: "-6px", fontFamily: "BillabongW00-Regular", fontSize: "40px", height: "54px" }}>Instagram</span>
          </div>
          <div className="nav__div2__center">
            <div style={{ width: "30px", height: "30px" }}>
              <div className="div2__center__pic"></div>
              <span className="div2__center__span">Demo</span>
            </div>
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