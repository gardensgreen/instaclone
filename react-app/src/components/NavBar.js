import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = ({ setAuthenticated, userdata }) => {
  const history = useHistory();
  let clickedOnUser = false;
  let searchFocus = false;
  const clickedSearch = () => {
    const searchIcons = window.document.getElementById("searchIcons");
    const searchIconsActive = window.document.getElementById("searchIcons--active");
    const searchIconsText = window.document.querySelector(".searchIcons--searchText");
    const searchIconsInput = window.document.getElementById("searchIcons__input");
    const emptyDiv = window.document.getElementById("emptySearchDiv")
    if (searchFocus === false) {
      emptyDiv.style.display = "";
      searchIcons.style.display = "none";
      searchIconsActive.style.display = "flex";
      searchIconsText.style.display = "none";
      searchIconsInput.focus();
      searchFocus = true;
    } else {
      emptyDiv.style.display = "none";
      searchIcons.style.display = "inline";
      searchIconsActive.style.display = "none";
      searchIconsText.style.display = "inline-block";
      searchFocus = false;
    }
  }

  const clickedUser = () => {
    const userDropdown = window.document.querySelector(".center__span__userDropdown");
    const clickableEle = window.document.querySelector(".clickable-element");
    if (clickedOnUser === false) {
      userDropdown.style.display = "";
      clickableEle.style.display = "";
      clickedOnUser = true;
    } else {
      userDropdown.style.display = "none";
      clickableEle.style.display = "none";
      clickedOnUser = false;
    }
  }

  const homeButton = () => {
    history.push("/");
  }
  const profileButton = (e) => {
    e.preventDefault();
    const clickableEle = window.document.querySelector(".clickable-element");
    const userDropdown = window.document.querySelector(".center__span__userDropdown");
    userDropdown.style.display = "none";
    clickableEle.style.display = "none";
    clickedOnUser = false;
    history.push(`/users/${userdata.username}`);
  }
  const settingsButton = (e) => {
    e.preventDefault();
    const clickableEle = window.document.querySelector(".clickable-element");
    const userDropdown = window.document.querySelector(".center__span__userDropdown");
    userDropdown.style.display = "none";
    clickableEle.style.display = "none";
    clickedOnUser = false;
    history.push(`/users/${userdata.username}/edit`)
  }

  return (
    <nav className="nav">
      <div className="nav__div1">
        <div className="nav__div2">
          <div className="nav__div2__left">
            <span style={{ marginTop: "-6px", fontFamily: "BillabongW00-Regular", fontSize: "40px", height: "54px" }}>Instagram</span>
          </div>
          <div className="nav__div2__center">
            <input className="div2__center__searchbar" type="text" autoCapitalize="none" placeholder="Search" />
            <div onClick={clickedSearch} className="div2__center__searchIcons" role="button">
              <div id="emptySearchDiv" style={{ display: "none", bottom: "0", left: "0", position: "fixed", right: "0", top: "0", zIndex: "2", background: "transparent" }}></div>
              <div id="searchIcons--active">
                <span style={{ marginRight: "6px", verticalAlign: "baseline", backgroundSize: "440px 411px", backgroundPosition: "-428px -241px", width: "10px", height: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <input id="searchIcons__input" style={{ background: "transparent", border: "none", width: "199px" }} />
                <span className="searchIcons--searchText" style={{ display: "inline-block", maxWidth: "140px", overflow: "hidden", textOverflow: "ellipsis", verticalAlign: "bottom", whiteSpace: "nowrap" }}>Search</span>
              </div>
              <div id="searchIcons" style={{ display: "inline", left: "-5px", bottom: "2px" }}>
                <span style={{ display: "inline-block", marginRight: "6px", verticalAlign: "baseline", backgroundSize: "440px 411px", backgroundPosition: "-428px -241px", width: "10px", height: "10px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <span className="searchIcons--searchText" style={{ display: "inline-block", maxWidth: "140px", overflow: "hidden", textOverflow: "ellipsis", verticalAlign: "bottom", whiteSpace: "nowrap" }}>Search</span>
              </div>
            </div>
          </div>
          <div className="nav__div2__right">
            <div className="div2__right__icons">
              <div onClick={homeButton} style={{ width: "22px", height: "22px", cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                </svg>
              </div>
              <div style={{ width: "30px", height: "30px" }}>
                <div className="div2__center__pic"></div>
                <span onClick={clickedUser} className="div2__center__span">
                  <img style={{ width: "22px", height: "22px" }} src={userdata.avatarUrl} alt="nav-pic" />
                </span>
                <div style={{ marginLeft: "-180px", top: "15px", position: "relative" }}>
                  <div onClick={clickedUser} className="clickable-element" style={{ display: "none", bottom: "0", left: "0", position: "fixed", right: "0", top: "0", zIndex: "2", background: "transparent" }}></div>
                  <div className="center__span__userDropdown" style={{ display: "none", transformOrigin: "top center", opacity: "1", background: "rgba(var(--d87,255,255,255),1)", borderRadious: "6px", boxShadow: "0 0 5px 1px rgba(var(--jb7,0,0,0),.0975)", position: "absolute", zIndex: "3", left: "24px" }} aria-hidden="false">
                    <div className="span__userDropdown__topPointer"></div>
                    <div className="span__userDropdown__box">
                      <a onClick={profileButton} className="userDropdown__box__selections" href={`/${userdata.username}`}>
                        <div className="box__selections__option">
                          <div id="profileOption" style={{ marginRight: "12px", width: "12px", height: "12px", top: "3px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                          </div>
                          <div>Profile</div>
                        </div>
                      </a>
                      <a onClick={settingsButton} className="userDropdown__box__selections" href={`/${userdata.username}/edit`}>
                        <div className="box__selections__option">
                          <div id="profileOption" style={{ marginRight: "12px", width: "12px", height: "12px", top: "3px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide" viewBox="0 0 16 16">
                              <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                            </svg>
                          </div>
                          <div>Settings</div>
                        </div>
                      </a>
                      <hr style={{ backgroundColor: "rgba(var(--b38,219,219,219),1)", border: "0", height: "1px", margin: "0", width: "230px" }} />
                      <LogoutButton setAuthenticated={setAuthenticated} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
