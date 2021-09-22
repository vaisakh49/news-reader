import React from "react"
// import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { searchNews } from "../../actions/newsActions"

const Search = (props) => {
  const dispatch = useDispatch()

  const search = () => {
    dispatch(searchNews())
  }

  return (
    <>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <button className="btn btn-outline-secondary " onClick={search}>
        Search
      </button>
    </>
  )
}

// Search.propTypes = {}

export default Search
