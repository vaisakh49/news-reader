import React, { useState } from "react"
import axios from "axios"
// import PropTypes from "prop-types"
import Search from "../custom/Search"

const Navbar = (props) => {
  const [data, setData] = useState(null)
  const searchNews = async () => {
    const config = {
      headers: {
        "x-api-key": "IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE",
      },
    }

    const { data } = await axios.get("/news-api/news/", config)
    setData(data)
    console.log(data.result.data)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
