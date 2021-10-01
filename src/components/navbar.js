import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper bg-white">
        <div className="header-wrapper">
          <header>Bookstore CMS </header>
          <ul className="menu">
            <li><NavLink exact to="/" activeClassName="active">BOOKS</NavLink></li>
            <li><NavLink exact to="/categories" activeClassName="active">CATEGORIES</NavLink></li>
          </ul>
        </div>
        <div className="profile-icon"><i className="fa fa-user-circle" /></div>
      </div>
    </nav>
  );
}
