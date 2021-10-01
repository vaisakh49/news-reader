import React, { useState } from "react";
import Search from "../custom/Search";
import AdvanceSearchModal from "../custom/AdvanceSearchModal";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <div
            className="navbar-brand"
            style={{ textTransform: "capitalize", fontSize: 28 }}
          >
            <a href="/">
              <strong className="text-primary">News </strong>
              <span>
                <strong className="text-secondary">Reader</strong>
              </span>
            </a>
          </div>
          <div className="topnav-centered">
            <Search />
          </div>

          <div
            className="btn btn-outline-primary btn-sm"
            onClick={() => setIsOpen(true)}
          >
            Advance search
          </div>
        </div>
      </nav>
      <AdvanceSearchModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default Navbar;
