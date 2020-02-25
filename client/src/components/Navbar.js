import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark fixed-top'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            Vendrix
          </Link>
          <button
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a href='/' className='nav-link'>
                  Product Updates
                </a>
              </li>
              <li className='nav-item'>
                <Link to='/blog/new' className='nav-link'>
                  New Post
                </Link>
              </li>
            </ul>

            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a href='#create-head-section' className='nav-link'>
                  Signin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
