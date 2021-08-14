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
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>
            <span style={{ marginLeft: "20px" }}>NEWYORK TIMES</span>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
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
  } else
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>
            <span style={{ marginLeft: "20px" }}>NEWYORK TIMES</span>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
