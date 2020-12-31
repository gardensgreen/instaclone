import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    e.preventDefault();
    await logout();
    setAuthenticated(false);
    window.location.href = "/login"
  };

  return (
    <a onClick={onLogout} className="userDropdown__box__selections" href="/login">
      <div className="box__selections__option">
        <div id="profileOption" style={{ marginRight: "12px", width: "12px", height: "12px", top: "3px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
          </svg>
        </div>
        <div>Logout</div>
      </div>
    </a>
  )
};

export default LogoutButton;
