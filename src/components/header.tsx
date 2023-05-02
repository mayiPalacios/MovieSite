"use client";
import { useContext, useEffect, useState } from "react";
import $ from "jquery";

import useAuth from "lastHomework/hooks/useAuth";
import { useRouter } from "next/navigation";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  useEffect(() => {
    $(".navbar-toggler").click(function () {
      setShowNav(!showNav);
    });
  }, [showNav]);

  const isLoggedIn = useAuth();
  const handleNavigation = () => {
    router.push("/favorite");
  };

  const handleLogout = () => {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("account_id");
    localStorage.removeItem("boolSessionId");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="/">
          My Movie Site
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${showNav ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className=" d-flex nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/">
                Search
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/movie">
                Movies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/TV">
                TV-SHOW
              </a>
            </li>

            {isLoggedIn && (
              <li className="nav-item">
                <a className="nav-link" onClick={handleNavigation}>
                  Favorite
                </a>
              </li>
            )}
          </ul>

          {isLoggedIn ? (
            <div className="navbar-nav">
              <a className="nav-link" onClick={handleLogout} href="/login">
                Logout
              </a>
              <a className="nav-link" href="/">
                About-me
              </a>
            </div>
          ) : (
            <div className="navbar-nav">
              <a className="nav-link" href="https://www.themoviedb.org/signup">
                Sign up
              </a>
              <a className="nav-link" href="/login">
                Log in
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Header;
