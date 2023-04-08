import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import navbarIcon from "../../assets/navbar-icon.png";
import { useAuthContext } from "../../hooks/useAuthContext";
function Navbar(props) {
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { user, dispatch } = useAuthContext();
  function handleClick() {
    setIsNavExpanded(!isNavExpanded);
  }

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("#navbar");

    window.scrollY > 0
      ? navbar.classList.add("fixed")
      : navbar.classList.remove("fixed");
  });

  function handleLogout() {
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("../");
  }

  return (
    <>
      <nav className="landing-navbar" id="navbar">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={navbarIcon} />
          <h1>Blinder</h1>
        </div>
        <div className={isNavExpanded ? "navbar-menu expanded" : "navbar-menu"}>
          <ul>
            {user && (
              <>
                <li>
                  <Link to="/dashboard" id="dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/events" id="events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/discover" id="discover">
                    Discover
                  </Link>
                </li>
              </>
            )}
            <li>
              <a
                href="file://localhost/C:/Users/jashd/OneDrive/Documents/Github/Hackathons/coc23-frontend/frontend/public/map.html"
                target="__blank"
                id="explore"
              >
                Explore
              </a>
            </li>
            <li>
              <Link to="/shop" id="shop">
                Shop
              </Link>
            </li>
            {user && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
            {!user && (
              <li>
                <button onClick={() => navigate("/login")}>Login</button>
              </li>
            )}

            {props.logged === "true" && <></>}
          </ul>
        </div>
        <button className="hamburger" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
