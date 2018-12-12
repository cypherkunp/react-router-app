import React from "react";

// Stateless functional component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar - render()");
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
