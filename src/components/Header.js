import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const PREFIX_URL='/~hamidi';

export default class Header extends Component {
  render() {
    return (
      <header className="c-header">
        <div className="c-header__menu-container">
          <div className="c-header__menu">
            <Link
              className="c-header__menu-item"
              to="/"
            >
              Home
            </Link>

            <Link
              className="c-header__menu-item"
              to="/research"
            >
              Research
            </Link>

            <Link
              className="c-header__menu-item"
              to="/teaching"
            >
              Teaching 
            </Link>

            <Link
              className="c-header__menu-item"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
