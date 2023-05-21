import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbarimageadd">
      <div className="navbarandabout ">
        <div className="navbar mt-2">
          <div className="navsanket mx-2 py-2" onClick={() => navigate("/")}>
            Task
          </div>
          <div className="navname py-2">
            <Link className="navlinks" to="/">
              CRUD
            </Link>
          </div>
          <div className="navname py-2">
            {" "}
            <Link className="navlinks" to="/Api">
              Weather
            </Link>
          </div>
          <div className="navname py-2">
            <Link className="navlinks" to="/form">
              Form
            </Link>
          </div>
          <div className="navname py-2">
            <Link className="navlinks" to="/thumbnail">
              thumbnail
            </Link>
          </div>
          <div className="navname py-2">
            <Link className="navlinks" to="/animation">
              animation
            </Link>
          </div>

          <div className="navbtn mx-3 py-2">
            <hr className="verticalline" />
            <a>
              <img
                className="mx-2"
                onClick={() => {
                  setShowNav(!showNav);
                }}
                width={25}
                src="https://i.ibb.co/8PZ7pLw/hamburger.png"
                alt="hamburger"
                border="0"
              />
            </a>
          </div>
        </div>
      </div>
      {showNav && (
        <div className="nav-list-container">
          <div className="nav-list">
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="mx-4 mt-4"
            >
              <Link className="navlinks" to="/">
                CRUD
              </Link>
            </div>
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="mx-4"
            >
              <Link className="navlinks" to="/Api">
                Weather
              </Link>
            </div>
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="mx-4"
            >
              <Link className="navlinks" to="/form">
                Form
              </Link>
            </div>
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="mx-4"
            >
              <Link className="navlinks" to="/thumbnail">
                thumbnail
              </Link>
            </div>
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="mx-4 pb-4"
            >
              <Link className="navlinks" to="/animation">
                Animation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
