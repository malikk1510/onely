import React from "react";
import Onely from "../../assets/onely.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={Onely} height="50px" width="50px" alt="onely" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/films">
              Films
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/short/films">
              Short-Films
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/drama">
              Drama
            </Link>
          </li>
        </ul>
        <h1 style={{color:"gray"}}>ONELY</h1>
        <ul className="navbar-nav  ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/songs">
              Songs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/podcasts">
              Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/books">
              Books
            </Link>
          </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <ul className="navbar-nav  ">
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
