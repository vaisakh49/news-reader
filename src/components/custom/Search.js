import React, { useEffect, useState } from "react"
// import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { letestNews, searchNews } from "../../actions/newsActions"

const Search = (props) => {
  const dispatch = useDispatch()

  const filterList = useSelector((state) => state.filterList)

  const { startdate, enddate } = filterList

  useEffect(() => {
    dispatch(letestNews())
  }, [dispatch])

  const [text, setText] = useState("")

  const search = (e) => {
    e.preventDefault()
    if (text === "" || startdate === "" || enddate === "") {
      alert("please enter something")
      dispatch(letestNews())
    } else {
      dispatch(searchNews(text, startdate, enddate))
      setText("")
    }
  }

  // updating text state
  const onChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    setText(e.target.value)
  }

  return (
    <>
      <form className="form-inline" onSubmit={search}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search here..."
          value={text}
          onChange={onChange}
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
