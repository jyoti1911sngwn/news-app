import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="px-4">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <a className="navbar-brand" href="/business">
          Business
        </a>
        <a className="navbar-brand" href="/sports">
          Sports
        </a>
        <a className="navbar-brand" href="/general">
          General
        </a>
        <a className="navbar-brand" href="/entertainment">
          Entertainment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
