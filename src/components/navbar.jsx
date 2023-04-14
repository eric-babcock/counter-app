import React, from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="reddit.com">
        Navbar
        <span className='badge bg-pill bg-secondary m-2'>
            {props.totalCounters}
          </span>
      </a>
    </nav>
  )
}
export default NavBar;
