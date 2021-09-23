import React from "react"
import Search from "../custom/Search"
// import PropTypes from "prop-types"

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <a className="navbar-brand" href="/">
          <strong>News Reader</strong>
        </a>
        <Search />
      </div>
    </nav>
  )
}

// Navbar.propTypes = {}

export default Navbar
