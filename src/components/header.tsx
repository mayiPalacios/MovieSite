"use client";
import { useEffect, useState } from "react";
import $ from "jquery";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    $(".navbar-toggler").click(function () {
      setShowNav(!showNav);
    });
  }, [showNav]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="#">
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
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <div className="navbar-nav">
            <a className="nav-link" href="#">
              Sign up
            </a>
            <a className="nav-link" href="#">
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
