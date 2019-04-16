import React from 'react';
import './header.css';

const Header = () => (
  
  <header className="row">
  <>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header" id="header">
          <a className="navbar-brand" href="#">Outlook Email</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Inbox</a></li>
            <li><a href="#">Junk Email</a></li>
            <li><a href="#">Draft</a></li>
            <li><a href="#">Deleted Items</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
</>
  </header>
);


export default Header;