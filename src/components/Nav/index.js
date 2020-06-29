import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          Google Book Search
        </a>
        
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
