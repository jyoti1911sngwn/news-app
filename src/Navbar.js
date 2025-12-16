import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top py-3">
      <div className="px-4">
        <a className="navbar-brand" href="/">
          General
        </a>
        <a className="navbar-brand" href="/lifestyle">
          Lifestyle
        </a>
        <a className="navbar-brand" href="/business">
          Business
        </a>
        <a className="navbar-brand" href="/world">
          World
        </a>
         <a className="navbar-brand" href="/politics">
          Politics
        </a>
        <a className="navbar-brand" href="/entertainment">
          Entertainment
        </a>
        <a className="navbar-brand" href="/top">
          Top
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
