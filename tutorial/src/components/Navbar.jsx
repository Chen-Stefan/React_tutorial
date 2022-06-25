import React from "react";


function Navbar(props) {
  return (
    <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge bg-pill bg-secondary">{props.totalCounters}</span>
          </a>
        </div>
      </nav>
  )
}

export default Navbar
