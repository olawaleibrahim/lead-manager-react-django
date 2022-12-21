import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">Lead Manager</a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='nav-item'>
                  <Link to="/register" className='nav-link'>Register</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/login" className='nav-link'>Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
};

export default Header;
