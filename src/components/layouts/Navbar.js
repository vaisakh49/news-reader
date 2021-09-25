import React, { useState } from "react"
import Search from "../custom/Search"
// import PropTypes from "prop-types"
import AdvanceSearchModal from "../custom/AdvanceSearchModal"

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <strong>News Reader</strong>
          </a>
          <Search />
        </div>
        <div className="btn btn-primary btn-sm" onClick={() => setIsOpen(true)}>
          Advance search
        </div>
      </nav>
      <AdvanceSearchModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

// Navbar.propTypes = {}

export default Navbar
