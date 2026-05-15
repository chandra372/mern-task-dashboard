import React from 'react';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Task Dashboard</div>
        <div className="navbar-menu">
          {user ? (
            <>
              <span className="navbar-user">Welcome, {user.name}</span>
              <button className="navbar-btn logout-btn" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="navbar-btn">Login</a>
              <a href="/register" className="navbar-btn">Register</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
