import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UserContext from "../../context/user/userContext";

const Navbar = () => {
  const userContext = useContext(UserContext);
  const { logout, user } = userContext;

  const onLogout = () => {
    logout();
  };
  if (user) {
    return (
      <nav>
        <div class='nav-wrapper'>
          <a href='#' class='brand-logo'>
            NEWYORK TIMES
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/read-later'>Read Later</Link>
            </li>
            <li>
              <a href='#!' onClick={onLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else return "";
};

export default Navbar;
