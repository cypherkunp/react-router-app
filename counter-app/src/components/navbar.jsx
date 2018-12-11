import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
